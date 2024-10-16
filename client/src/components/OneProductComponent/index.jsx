import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  styled,
  Box,
  Badge,
  Link,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/productsSlice";
import { addToCart, removeFromCart } from "../../redux/cartSlice.js";

const MainButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  padding: "10px 20px",
  fontWeight: 500,
  lineHeight: "20px",
  color: "rgba(139, 139, 139, 1)",
  borderRadius: "10px",
  border: "2px solid rgba(221, 221, 221, 1)",
  marginRight: "10px",
}));

const CategoriesButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "20px",
  color: "rgba(40, 40, 40, 1)",
  borderRadius: "10px",
  border: "2px solid rgba(221, 221, 221, 1)",
  padding: "10px 20px",
}));

const ProductImage = styled("img")({
  height: "284px",
  width: "100%",
  marginBottom: "5px",
  borderBottom: "2px solid rgba(221, 221, 221, 1)",
  objectFit: "fill",
  alignSelf: "center",
});

const CategoriesHeading = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "40px",
  color: "black",
  marginBottom: "0px",
  marginTop: "60px",
});

const DiscountBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "rgba(13, 80, 255, 1)",
    color: "white",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "18px",
    position: "absolute",
    top: "20px",
    right: "35px",
  },
}));

const AddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(13, 80, 255, 1)",
  color: "white",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  padding: "20px 20px",
  borderRadius: "5px",
  position: "absolute",
  bottom: "170px",
  right: "20px",
  left: "20px",
  opacity: 0,
  transition: "opacity 0.1s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
}));

const ProductDetailsHeading = styled(Typography)({
  fontSize: "40px",
  fontWeight: 700,
  lineHeight: "44px",
  color: "black",
  marginBottom: "20px",
});

const ProductPriceContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
});

const ProductPrice = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "70px",
});

const ProductOldPrice = styled(Typography)({
  color: "rgba(139, 139, 139, 1)",
  fontSize: "40px",
  fontWeight: 500,
  lineHeight: "52px",
  textDecoration: "line-through",
});

const DiscountPercentageSpan = styled("span")({
  backgroundColor: "rgba(13, 80, 255, 1)",
  height: "35px",
  color: "white",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  padding: "5px 10px",
  borderRadius: "5px",
});

const ProductQuantityContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
});

const ProductQuantityButton = styled(Button)({
  padding: "5px 10px",
  borderRadius: "5px",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "20px",
  border: "1px solid rgba(221, 221, 221, 1)",
});

const ProductQuantity = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  margin: "0 10px",
});

const ProductDescriptionHeading = styled(Typography)({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  marginBottom: "10px",
});

const ProductDescription = styled(Typography)({
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "20px",
});

function OneProductComponent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.products.product);
  const isLoading = useSelector((state) => state.products.isLoadingProduct);
  const error = useSelector((state) => state.products.errorProduct);
  const cartItems = useSelector((state) => state.cart.cartItems);

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
          <CategoriesButton component={Link} to="/categories">
            Categories
          </CategoriesButton>
          <CategoriesButton component={Link} to="/categories">
            {product && product.category}
          </CategoriesButton>
          <CategoriesButton component={Link} to="/categories">
            {product && product.title}
          </CategoriesButton>
        </Grid>
      </Grid>

      <CategoriesHeading>{product && product.category}</CategoriesHeading>

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
              {product.discont_price && (
                <DiscountBadge
                  badgeContent={"-" + calculateDiscountPercentage() + " %"}
                />
              )}
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
