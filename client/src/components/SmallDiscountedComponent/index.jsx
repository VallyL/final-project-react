import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/productsSlice";
import {
  SmallCategoriesHeading,
  AllCategoriesButton,
  ProductCard,
  SmallProductImage,
  SmallProductName,
  SmallProductPrice,
  SmallOldPrice,
  DiscountBadge,
} from "../../assets/styles/StyledComponents";

function SmallDiscountedContainer() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error}</div>;
  }

  const discountedItems = products.filter((product) => product.discount > 0);
  const randomDiscountedItems = discountedItems
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div style={{ padding: "0px", margin: "70px 50px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid item>
          <SmallCategoriesHeading>Sale</SmallCategoriesHeading>
        </Grid>
        <hr
          style={{
            border: "1px solid rgba(221, 221, 221, 1)",
            width: "100%",
            marginLeft: "30px",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/allSales" style={{ textDecoration: "none" }}>
            <AllCategoriesButton>All sales</AllCategoriesButton>
          </Link>
        </div>
      </div>

      <Grid container spacing={4} mt={4}>
        {randomDiscountedItems.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Link
              to={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <ProductCard>
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
                <SmallProductName component="h2">
                  {product.title}
                </SmallProductName>
                <SmallProductPrice component="div">
                  ${product.discont_price}
                  <SmallOldPrice>${product.price}</SmallOldPrice>
                </SmallProductPrice>
              </ProductCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SmallDiscountedContainer;
