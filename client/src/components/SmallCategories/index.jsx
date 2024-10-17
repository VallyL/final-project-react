import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { fetchCategories } from "../../redux/categoriesSlice";
import { Link } from "react-router-dom";
import {
  SmallCategoriesHeading,
  AllCategoriesButton,
  SmallCategoryContainer,
  SmallCategoryImage,
  SmallCategoryName,
} from "../../assets/styles/StyledComponents";

function SmallCategories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const error = useSelector((state) => state.categories.error);
  const isLoading = useSelector((state) => state.categories.isLoading);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching categories: {error}</div>;
  }

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
          <SmallCategoriesHeading>Categories</SmallCategoriesHeading>
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
          <Link to="/allCategories" style={{ textDecoration: "none" }}>
            <AllCategoriesButton>All categories</AllCategoriesButton>
          </Link>
        </div>
      </div>

      <Grid container spacing={4} mt={4}>
        {categories.slice(0, 4).map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <Link
              to={`/categories/${category.id}`}
              style={{ textDecoration: "none" }}
            >
              <SmallCategoryContainer>
                <SmallCategoryImage
                  src={`http://localhost:3333${category.image}`}
                  alt={category.title}
                />
                <SmallCategoryName>{category.title}</SmallCategoryName>
              </SmallCategoryContainer>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SmallCategories;
