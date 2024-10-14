import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  styled,
  Box,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import { sendOrder } from "../../redux/orderSlice.js";
import {
  removeFromCart,
  updateQuantity,
  setInitialCartItems,
  clearCart,
} from "../../redux/cartSlice.js";

const CartItemContainer = styled(Box)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "0px",
  border: "1px solid rgba(221, 221, 221, 1)",
  borderRadius: "10px",
  marginBottom: "20px",
  position: "relative",
});

const CartItemImage = styled("img")({
  width: "220px",
  height: "100%",
  borderRight: "1px solid rgba(221, 221, 221, 1)",
  objectFit: "fill",
});

const CartItemDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "30px",
  gap: "30px",
});

const CartItemTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  marginBottom: "10px",
});

const CartItemQuantityContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
  border: "1px solid rgba(221, 221, 221, 1)",
  borderRadius: "5px",
  height: "58px",
});

const CartItemQuantityButton = styled(Button)({
  padding: "5px 10px",
  fontSize: "26px",
  fontWeight: 700,
  lineHeight: "20px",
  borderLeft: "1px solid rgba(221, 221, 221, 1)",
  borderRight: "1px solid rgba(221, 221, 221, 1)",
  height: "58px",
  color: "rgba(139, 139, 139, 1)",
});

const CartItemQuantity = styled(Typography)({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  margin: "0 30px",
});

const CartItemPrice = styled(Typography)({
  fontSize: "40px",
  fontWeight: 600,
  lineHeight: "44px",
  display: "flex",
});

const CartItemOldPrice = styled(Typography)({
  color: "rgba(139, 139, 139, 1)",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  textDecoration: "line-through",
  marginLeft: "10px",
});

const CartItemRemoveButton = styled(Button)({
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: "26px",
  color: "rgba(139, 139, 139, 1)",
  cursor: "pointer",
  position: "absolute",
  top: "25px",
  right: "10px",
});

const OrderDetailsContainer = styled(Box)({
  backgroundColor: "rgba(241, 243, 244, 1)",
  borderRadius: "20px",
  padding: "30px",
  width: "100%",
});

const OrderDetailsHeading = styled(Typography)({
  fontSize: "40px",
  fontWeight: 700,
  lineHeight: "44px",
  marginBottom: "20px",
});

const OrderDetailsInfo = styled(Typography)({
  color: "rgba(139, 139, 139, 1)",
  fontSize: "40px",
  fontWeight: 500,
  lineHeight: "52px",
  marginBottom: "20px",
});

const OrderDetailsTotal = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});

const OrderDetailsTotalLabel = styled(Typography)({
  color: "rgba(139, 139, 139, 1)",
  fontSize: "40px",
  fontWeight: 500,
  lineHeight: "52px",
});

const OrderDetailsTotalPrice = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "70px",
});

const DiscountForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  margin: "0 auto",
  paddingTop: "20px",
});

const DiscountInput = styled(TextField)(({ theme }) => ({
  marginBottom: "20px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "rgba(139, 139, 139, 1)",
  },
  "& label": {
    color: "rgba(139, 139, 139, 1)",
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: "rgba(139, 139, 139, 1)",
    },
  },
  width: "100%",
  backgroundColor: "white",
  color: "rgba(139, 139, 139, 1)",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "26px",
}));

const DiscountButton = styled(Button)({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  color: "white",
  backgroundColor: "rgba(13, 80, 255, 1)",
  padding: "15px 30px",
  marginTop: "20px",
  cursor: "pointer",
  border: "none",
  width: "100%",
  marginBottom: "0px",
});

const DiscountMessage = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  color: "white",
  marginLeft: "20px",
});

const EmptyCartMessage = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  marginBottom: "20px",
});

const ContinueShoppingButton = styled(Button)({
  backgroundColor: "rgba(13, 80, 255, 1)",
  color: "white",
  borderRadius: "10px",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  padding: "15px 30px",
});

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
            <DiscountForm onSubmit={handleSubmit}>
              <DiscountInput
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <DiscountInput
                label="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <DiscountInput
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <DiscountButton type="submit">Order</DiscountButton>
              {errorMessage && (
                <DiscountMessage>{errorMessage}</DiscountMessage>
              )}
              {isSubmitted && (
                <DiscountMessage>We will get in touch soon</DiscountMessage>
              )}
              <DiscountButton onClick={handleClearCart}>
                Clear Cart
              </DiscountButton>
            </DiscountForm>
          </OrderDetailsContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default CartComponent;
