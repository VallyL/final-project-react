import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Button, Link } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/productsSlice";
import { addToCart, removeFromCart } from "../../redux/cartSlice.js";
import {
  MainButton,
  CategoriesButton,
  ProductImage,
  AddToCartButton,
  ProductDetailsHeading,
  ProductPriceContainer,
  ProductPrice,
  ProductOldPrice,
  DiscountPercentageSpan,
  ProductQuantityContainer,
  ProductQuantityButton,
  ProductDescriptionHeading,
  ProductDescription,
  ProductQuantity,
} from "../../assets/styles/StyledComponents.js";

function OneProductComponent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products.product);
  const isLoading = useSelector((state) => state.products.isLoadingProduct);
  const error = useSelector((state) => state.products.errorProduct);

  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleReadMoreClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const calculateDiscountPercentage = () => {
    if (product.discont_price) {
      return Math.round(
        ((product.price - product.discont_price) / product.price) * 100
      );
    }
    return 0;
  };

  return (
    <div style={{ padding: "40px" }}>
      <Grid container justifyContent="flex-start" alignItems="center" mb={4}>
        <Grid item>
          <MainButton component={Link} to="/">
            Main page
          </MainButton>
          <MainButton component={Link} to="/categories">
            Categories
          </MainButton>
          <MainButton component={Link} to="/categories/:id">
            {product && product.category}
          </MainButton>
          <CategoriesButton component={Link} to="/categories">
            {product && product.title}
          </CategoriesButton>
        </Grid>
      </Grid>
      <Grid container spacing={4} mt={4}>
        {isLoading && (
          <Grid item xs={12}>
            <Typography variant="h6">Loading product...</Typography>
          </Grid>
        )}
        {error && (
          <Grid item xs={12}>
            <Typography variant="h6">
              Error fetching product: {error}
            </Typography>
          </Grid>
        )}
        {product && (
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <ProductImage
                src={`http://localhost:3333${product.image}`}
                alt={product.title}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProductDetailsHeading>{product.title}</ProductDetailsHeading>
              <ProductPriceContainer>
                <ProductPrice>
                  {product.discont_price
                    ? `$${product.discont_price}`
                    : `$${product.price}`}
                </ProductPrice>
                {product.discont_price && (
                  <ProductOldPrice>${product.price}</ProductOldPrice>
                )}
                {product.discont_price && (
                  <DiscountPercentageSpan>
                    -{calculateDiscountPercentage()}%
                  </DiscountPercentageSpan>
                )}
              </ProductPriceContainer>
              <ProductPriceContainer>
                <ProductQuantityContainer>
                  <ProductQuantityButton
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </ProductQuantityButton>
                  <ProductQuantity>{quantity}</ProductQuantity>
                  <ProductQuantityButton
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    +
                  </ProductQuantityButton>
                </ProductQuantityContainer>
                <AddToCartButton
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  Add to cart
                </AddToCartButton>
              </ProductPriceContainer>
              <ProductDescriptionHeading>Description</ProductDescriptionHeading>
              <ProductDescription>
                {product?.description && (
                  <>
                    {showFullDescription
                      ? product.description
                      : product.description.substring(0, 300) + "..."}
                    {product.description.length > 300 && (
                      <Button onClick={handleReadMoreClick}>
                        {showFullDescription ? "Read Less" : "Read More"}
                      </Button>
                    )}
                  </>
                )}
              </ProductDescription>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default OneProductComponent;
