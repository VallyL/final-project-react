import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { sendOrder } from "../../redux/orderSlice.js";
import {
  removeFromCart,
  updateQuantity,
  setInitialCartItems,
  clearCart,
} from "../../redux/cartSlice.js";
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemTitle,
  CartItemQuantityContainer,
  CartItemQuantityButton,
  CartItemQuantity,
  CartItemPrice,
  CartItemOldPrice,
  CartItemRemoveButton,
  OrderDetailsContainer,
  OrderDetailsHeading,
  OrderDetailsInfo,
  OrderDetailsTotal,
  OrderDetailsTotalLabel,
  OrderDetailsTotalPrice,
  CartDiscountForm,
  CartDiscountInput,
  CartDiscountButton,
  CartDiscountMessage,
  EmptyCartMessage,
  ContinueShoppingButton,
} from "../../assets/styles/StyledComponents.js";

function CartComponent() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.products.products);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    dispatch(setInitialCartItems(storedItems));
  }, []);

  const handleRemoveFromCart = (cartItem) => {
    if (!cartItem || !cartItem.id) {
      console.error("Cart item is null or does not have an ID");
      return;
    }

    dispatch(removeFromCart({ id: cartItem.id }));
  };

  const handleUpdateQuantity = (cartItem, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(cartItem);
      return;
    }
    dispatch(updateQuantity({ product: cartItem, newQuantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = {
      name,
      phoneNumber,
      email,
      products: cartItems,
    };

    dispatch(sendOrder(data));
    setIsSubmitted(true);
  };

  const validateForm = () => {
    let isValid = true;
    let message = "";

    if (name.length < 2) {
      isValid = false;
      message = "Name must be at least 2 letters long";
    } else if (
      !phoneNumber.startsWith("+") ||
      !/^[+]*[0-9]*$/.test(phoneNumber)
    ) {
      isValid = false;
      message = "Please enter a valid phone number starting with +";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      message = "Please enter a valid email";
    }

    setErrorMessage(message);
    return isValid;
  };

  const calculateTotalPrice = () => {
    console.log("Cart Items:", cartItems);
    return cartItems.reduce((total, cartItem) => {
      if (!cartItem) return total;
      const itemPrice = cartItem.discont_price
        ? cartItem.discont_price * cartItem.quantity
        : cartItem.price * cartItem.quantity;

      return total + itemPrice;
    }, 0);
  };

  return (
    <div style={{ padding: "40px", paddingTop: "0px" }}>
      <Grid container spacing={4} mt={4}>
        <Grid item xs={12} md={8}>
          {cartItems.length > 0 ? (
            <Grid container spacing={4}>
              {cartItems.map((cartItem, index) => {
                console.log("cartItem:", cartItem);
                const product = cartItem;
                if (!product) {
                  return null;
                }
                return (
                  <Grid item xs={12} key={index}>
                    <CartItemContainer>
                      <CartItemImage
                        src={`http://localhost:3333${product.image}`}
                        alt={product.title}
                      />
                      <CartItemDetails>
                        <CartItemTitle component="h3">
                          {product.title}
                        </CartItemTitle>
                        <div style={{ display: "flex", gap: "60px" }}>
                          <CartItemQuantityContainer>
                            <CartItemQuantityButton
                              onClick={() =>
                                handleUpdateQuantity(
                                  cartItem,
                                  cartItem.quantity - 1
                                )
                              }
                            >
                              -
                            </CartItemQuantityButton>
                            <CartItemQuantity>
                              {isNaN(cartItem.quantity) ? 0 : cartItem.quantity}
                            </CartItemQuantity>
                            <CartItemQuantityButton
                              onClick={() =>
                                handleUpdateQuantity(
                                  cartItem,
                                  cartItem.quantity + 1
                                )
                              }
                            >
                              +
                            </CartItemQuantityButton>
                          </CartItemQuantityContainer>
                          <CartItemPrice component="div">
                            <span style={{ display: "flex", gap: "10px" }}>
                              {cartItem.discont_price ? (
                                <>
                                  <strong>
                                    $
                                    {cartItem.discont_price * cartItem.quantity}
                                  </strong>
                                  <CartItemOldPrice>
                                    ${cartItem.price * cartItem.quantity}
                                  </CartItemOldPrice>
                                </>
                              ) : (
                                <strong>
                                  ${cartItem.price * cartItem.quantity}
                                </strong>
                              )}
                            </span>
                          </CartItemPrice>
                        </div>
                      </CartItemDetails>
                      <CartItemRemoveButton
                        onClick={() => handleRemoveFromCart(cartItem)}
                      >
                        x
                      </CartItemRemoveButton>
                    </CartItemContainer>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <EmptyCartMessage>
                Looks like you have no items in your basket currently.
              </EmptyCartMessage>
              <ContinueShoppingButton component={Link} to="/">
                Continue Shopping
              </ContinueShoppingButton>
            </div>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <OrderDetailsContainer>
            <OrderDetailsHeading>Order details</OrderDetailsHeading>
            <OrderDetailsInfo>{cartItems.length} items</OrderDetailsInfo>
            <OrderDetailsTotal>
              <OrderDetailsTotalLabel>Total:</OrderDetailsTotalLabel>
              <OrderDetailsTotalPrice>
                ${calculateTotalPrice().toFixed(2)}
              </OrderDetailsTotalPrice>
            </OrderDetailsTotal>
            <CartDiscountForm onSubmit={handleSubmit}>
              <CartDiscountInput
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <CartDiscountInput
                label="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <CartDiscountInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <CartDiscountButton type="submit">Order</CartDiscountButton>
              {errorMessage && (
                <CartDiscountMessage>{errorMessage}</CartDiscountMessage>
              )}
              {isSubmitted && (
                <CartDiscountMessage>
                  We will get in touch soon
                </CartDiscountMessage>
              )}
              <CartDiscountButton onClick={handleClearCart}>
                Clear Cart
              </CartDiscountButton>
            </CartDiscountForm>
          </OrderDetailsContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default CartComponent;
