import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  styled,
  Box,
  TextField,
  Select,
  MenuItem,
  Badge,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../../redux/productsSlice";
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

const CategoriesHeading = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "40px",
  color: "black",
  marginBottom: "0px",
  marginTop: "60px",
});

const FilterContainer = styled(Box)({
  display: "flex",
  justifyContent: "start",
  gap: "20px",
  alignItems: "center",
  marginBottom: "0px",
});

const FilterLabel = styled(Typography)({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
});

const FilterInput = styled(TextField)(({ theme }) => ({
  width: "112px",
  borderRadius: "20px",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "16px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(191, 191, 191, 1)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(191, 191, 191, 1)",
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
  marginRight: "0px",
}));

const ProductCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "space-between",
  padding: "0px",
  border: "1px solid rgba(221, 221, 221, 1)",
  borderRadius: "20px",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
  height: "450px",
  paddingBottom: "20px",
  overflow: "hidden",
  position: "relative",
  maxWidth: "380px",
});

const ProductImage = styled("img")({
  height: "284px",
  width: "100%",
  marginBottom: "5px",
  borderBottom: "2px solid rgba(221, 221, 221, 1)",
  objectFit: "fill",
  alignSelf: "center",
});

const ProductName = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  color: "black",
  marginBottom: "10px",
  marginLeft: "20px",
  marginRight: "20px",
});

const ProductPrice = styled(Typography)({
  fontSize: "40px",
  fontWeight: 600,
  lineHeight: "44px",
  color: "black",
  display: "flex",
  gap: "5px",
  marginLeft: "20px",
});

const OldPrice = styled(Typography)({
  color: "rgba(139, 139, 139, 1)",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  textDecoration: "line-through",
  marginLeft: "10px",
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

function OneCategoryComponent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector(
    (state) => state.products.productsByCategory[id] || []
  );
  const isLoading = useSelector(
    (state) => state.products.isLoadingByCategory[id] || false
  );
  const error = useSelector(
    (state) => state.products.errorByCategory[id] || null
  );
  const category = useSelector(
    (state) => state.products.categories?.[id] || {}
  );
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
  const [sortOption, setSortOption] = useState("by default");

  useEffect(() => {
    dispatch(fetchProductsByCategory(id));
  }, [dispatch, id]);

  const filteredProducts = products.filter((product) => {
    if (priceFrom && !isNaN(priceFrom)) {
      if (product.price < parseFloat(priceFrom)) {
        return false;
      }
    }
    if (priceTo && !isNaN(priceTo)) {
      if (product.price > parseFloat(priceTo)) {
        return false;
      }
    }
    if (showDiscountedOnly && !product.discont_price) {
      return false;
    }
    return true;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortOption) {
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "price: high-low":
        return b.price - a.price;
      case "price: low-high":
        return a.price - b.price;
      default:
        return 0;
    }
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div style={{ padding: "40px" }}>
      <Grid container justifyContent="flex-start" alignItems="center" mb={4}>
        <Grid item>
          <MainButton component={Link} to="/">
            Main page
          </MainButton>
          <MainButton component={Link} to="/allCategories">
            Categories
          </MainButton>
          <CategoriesButton component={Link} to="/categories/:id">
            {category ? category.title : "Loading..."}
          </CategoriesButton>
        </Grid>
      </Grid>

      <CategoriesHeading>
        {category ? category.title : "Loading..."}
      </CategoriesHeading>

      <Grid container spacing={4} mt={4}>
        <Grid item xs={12}>
          <FilterContainer>
            <FilterLabel>Price</FilterLabel>
            <FilterInput
              type="number"
              placeholder="from"
              value={priceFrom}
              onChange={(e) => setPriceFrom(e.target.value)}
            />
            <FilterInput
              type="number"
              placeholder="to"
              value={priceTo}
              onChange={(e) => setPriceTo(e.target.value)}
            />
            <FilterLabel>Discounted items</FilterLabel>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showDiscountedOnly}
                  onChange={(e) => setShowDiscountedOnly(e.target.checked)}
                />
              }
              label=""
            />
            <FilterLabel>Sorted</FilterLabel>
            <Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <MenuItem value="by default">by default</MenuItem>
              <MenuItem value="newest">newest</MenuItem>
              <MenuItem value="price: high-low">price: high-low</MenuItem>
              <MenuItem value="price: low-high">price: low-high</MenuItem>
            </Select>
          </FilterContainer>
        </Grid>
      </Grid>

      <Grid container spacing={4} mt={4}>
        {isLoading && (
          <Grid item xs={12}>
            <Typography variant="h6">Loading products...</Typography>
          </Grid>
        )}
        {error && (
          <Grid item xs={12}>
            <Typography variant="h6">
              Error fetching products: {error}
            </Typography>
          </Grid>
        )}
        {sortedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Link
              to={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <ProductCard>
                {product.discont_price && (
                  <DiscountBadge
                    badgeContent={
                      "- " +
                      Math.round(
                        ((product.price - product.discont_price) /
                          product.price) *
                          100
                      ) +
                      " %"
                    }
                  >
                    <ProductImage
                      src={`http://localhost:3333${product.image}`}
                      alt={product.title}
                    />
                  </DiscountBadge>
                )}
                {!product.discont_price && (
                  <ProductImage
                    src={`http://localhost:3333${product.image}`}
                    alt={product.title}
                  />
                )}
                <ProductName>{product.title}</ProductName>
                <ProductPrice component="div">
                  {product.discont_price
                    ? `$${product.discont_price}`
                    : `$${product.price}`}
                  {product.discont_price && (
                    <OldPrice>${product.price}</OldPrice>
                  )}
                </ProductPrice>
                <AddToCartButton
                  onClick={(event) => {
                    event.stopPropagation();
                    cartItems.some((item) => item.id === product.id)
                      ? handleRemoveFromCart(product.id)
                      : handleAddToCart(product);
                  }}
                >
                  {cartItems.some((item) => item.id === product.id)
                    ? "Remove from cart"
                    : "Add to cart"}
                </AddToCartButton>
              </ProductCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OneCategoryComponent;
