import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Button, styled, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../redux/categoriesSlice";

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

const CategoryContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "5px",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const CategoryImage = styled("img")({
  height: "350px",
  width: "100%",
  borderRadius: "10px",
  marginBottom: "10px",
});

const CategoryName = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  color: "black",
});

function AllCategoriesComponent() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
        </Grid>
      </Grid>

      <CategoriesHeading>Categories</CategoriesHeading>

      <Grid container spacing={4} mt={4}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <Link
              to={`/categories/${category.title}`}
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

export default AllCategoriesComponent;
