import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../../redux/productsSlice";
import { addToCart, removeFromCart } from "../../redux/cartSlice.js";
import {
  MainButton,
  CategoriesButton,
  CategoriesHeading,
  FilterContainer,
  FilterLabel,
  FilterInput,
  ProductCard,
  SmallProductImage,
  SmallProductName,
  SmallProductPrice,
  SmallOldPrice,
  DiscountBadge,
  SmallAddToCartButton,
} from "../../assets/styles/StyledComponents.js";

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
                    <SmallProductImage
                      src={`http://localhost:3333${product.image}`}
                      alt={product.title}
                    />
                  </DiscountBadge>
                )}
                {!product.discont_price && (
                  <SmallProductImage
                    src={`http://localhost:3333${product.image}`}
                    alt={product.title}
                  />
                )}
                <SmallProductName>{product.title}</SmallProductName>
                <SmallProductPrice component="div">
                  {product.discont_price
                    ? `$${product.discont_price}`
                    : `$${product.price}`}
                  {product.discont_price && (
                    <SmallOldPrice>${product.price}</SmallOldPrice>
                  )}
                </SmallProductPrice>
                <SmallAddToCartButton
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
                </SmallAddToCartButton>
              </ProductCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OneCategoryComponent;
