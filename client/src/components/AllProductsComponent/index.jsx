import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/productsSlice";
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

function AllProductsComponent() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);
  const [sortOption, setSortOption] = useState("by default");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
    if (!product || !product) {
      console.error("Product is null or does not have an ID");
      return;
    }
    const cartItem = { ...product, quantity: 1 };
    dispatch(addToCart({ product: cartItem }));

    console.log({ cartItems });
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div style={{ padding: "40px" }}>
      <Grid container justifyContent="flex-start" alignItems="center" mb={4}>
        <Grid item>
          <MainButton component={Link} to="/">
            Main page
          </MainButton>
          <CategoriesButton component={Link} to="/categories">
            All Products
          </CategoriesButton>
        </Grid>
      </Grid>

      <CategoriesHeading>All Products</CategoriesHeading>

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
                <SmallProductName component="h2">
                  {product.title}
                </SmallProductName>
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

export default AllProductsComponent;
