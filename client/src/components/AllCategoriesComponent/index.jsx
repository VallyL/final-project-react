import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../redux/categoriesSlice";
import {
  MainButton,
  CategoriesButton,
  CategoriesHeading,
  CategoryContainer,
  CategoryImage,
  CategoryName,
} from "../../assets/styles/StyledComponents";

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

export default AllCategoriesComponent;
