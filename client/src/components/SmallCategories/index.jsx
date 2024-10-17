import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Button, styled, Box } from "@mui/material";
import { fetchCategories } from "../../redux/categoriesSlice";
import { Link } from "react-router-dom";

const CategoriesHeading = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "50px",
  color: "black",
});

const AllCategoriesButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "20px",
  color: "rgba(139, 139, 139, 1)",
  border: "1px solid rgba(221, 221, 221, 1)",
  padding: "10px 30px",
  borderRadius: "10px",
  textDecoration: "none",
  width: "142px",
}));

const CategoryContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
});

const CategoryImage = styled("img")({
  height: "350px",
  borderRadius: "20px",
  marginBottom: "10px",
});

const CategoryName = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  color: "black",
});

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
          <CategoriesHeading>Categories</CategoriesHeading>
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
              <CategoryContainer>
                <CategoryImage
                  src={`http://localhost:3333${category.image}`}
                  alt={category.title}
                />
                <CategoryName>{category.title}</CategoryName>
              </CategoryContainer>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default SmallCategories;
