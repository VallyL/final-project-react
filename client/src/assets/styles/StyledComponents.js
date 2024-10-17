import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  styled,
  Button,
  Box,
  TextField,
  Badge,
} from "@mui/material";
import BackgroundImage from "../../assets/images/img.svg";
import { Link } from "react-router-dom";

/*----------------Header---------------*/

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  padding: "20px 30px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
}));
export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
}));
export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
}));
export const LogoContainer = styled("div")({
  width: "70px",
  height: "70px",
});
export const CartContainer = styled("div")({
  width: "48px",
  height: "48px",
  marginTop: "10px",
});
export const CartQuantitySpan = styled("span")({
  width: "26px",
  height: "26px",
  backgroundColor: "rgba(13, 80, 255, 1)",
  color: "white",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "14px",
  fontWeight: "bold",
  position: "absolute",
  top: "-3px",
  right: "-3px",
});

/*----------------Footer---------------*/

export const ContactSection = styled("div")({
  backgroundColor: "rgba(241, 243, 244, 1)",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
});
export const ContactHeading = styled(Typography)({
  fontSize: "40px",
  fontWeight: 600,
  lineHeight: "44px",
  color: "black",
  marginTop: "10px",
});
export const ContactParagraph = styled(Typography)({
  color: "rgba(139, 139, 139, 1)",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  marginBottom: "10px",
});

/*----------------ChechDiscount---------------*/

export const HeroContainer = styled("div")({
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "40px",
  height: "600px",
  padding: "20px 50px",
  color: "white",
});
export const HeroHeading = styled(Typography)({
  fontSize: "96px",
  fontWeight: 700,
  lineHeight: "105px",
  marginBottom: "20px",
});
export const HeroButton = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  backgroundColor: "rgba(13, 80, 255, 1)",
  color: "white",
  padding: "15px 60px",
  borderRadius: "5px",
  textDecoration: "none",
}));

/*----------------SmallCategories---------------*/

export const SmallCategoriesHeading = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "50px",
  color: "black",
});
export const AllCategoriesButton = styled(Button)(({ theme }) => ({
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
export const SmallCategoryContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
});
export const SmallCategoryImage = styled("img")({
  height: "350px",
  borderRadius: "20px",
  marginBottom: "10px",
});
export const SmallCategoryName = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  color: "black",
});

/*----------------DiscountRequest---------------*/

export const DiscountContainer = styled("div")({
  backgroundColor: "rgba(36, 81, 198, 1)",
  background:
    "linear-gradient(to bottom, rgba(36, 81, 198, 1), rgba(13, 80, 255, 1))",
  paddingTop: "30px",
  minHeight: "500px",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "20px",
});
export const DiscountHeading = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "70px",
  color: "white",
  marginBottom: "40px",
});
export const DiscountForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  width: "500px",
  marginBottom: "20px",
  alignItems: "center",
});
export const DiscountInput = styled(TextField)(({ theme }) => ({
  marginBottom: "20px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
  },
  "& label": {
    color: "white",
  },
  "& .MuiInputLabel-root": {
    "&.Mui-focused": {
      color: "white",
    },
  },
  width: "500px",
}));
export const DiscountButton = styled(Button)({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  color: "black",
  backgroundColor: "white",
  padding: "15px 30px",
  marginTop: "20px",
  cursor: "pointer",
  border: "none",
  width: "500px",
  marginBottom: "10px",
});
export const DiscountMessage = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  color: "white",
  marginLeft: "20px",
});

/*----------------SmallDiscountedComponent---------------*/

export const ProductCard = styled(Box)({
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
export const SmallProductImage = styled("img")({
  height: "284px",
  width: "100%",
  marginBottom: "5px",
  borderBottom: "2px solid rgba(221, 221, 221, 1)",
  objectFit: "fill",
  alignSelf: "center",
});
export const SmallProductName = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  color: "black",
  marginBottom: "10px",
  marginLeft: "20px",
  marginRight: "20px",
});
export const SmallProductPrice = styled(Typography)({
  fontSize: "40px",
  fontWeight: 600,
  lineHeight: "44px",
  color: "black",
  display: "flex",
  gap: "5px",
  marginLeft: "20px",
});
export const SmallOldPrice = styled(Typography)({
  color: "rgba(139, 139, 139, 1)",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  textDecoration: "line-through",
  marginLeft: "10px",
});
export const DiscountBadge = styled(Badge)(({ theme }) => ({
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

/*----------------AllCategories---------------*/

export const MainButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  padding: "10px 20px",
  fontWeight: 500,
  lineHeight: "20px",
  color: "rgba(139, 139, 139, 1)",
  borderRadius: "10px",
  border: "2px solid rgba(221, 221, 221, 1)",
  marginRight: "10px",
}));
export const CategoriesButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "20px",
  color: "rgba(40, 40, 40, 1)",
  borderRadius: "10px",
  border: "2px solid rgba(221, 221, 221, 1)",
  padding: "10px 20px",
}));
export const CategoriesHeading = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "40px",
  color: "black",
  marginBottom: "0px",
  marginTop: "60px",
});
export const CategoryContainer = styled(Box)({
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
export const CategoryImage = styled("img")({
  height: "350px",
  width: "100%",
  borderRadius: "10px",
  marginBottom: "10px",
});
export const CategoryName = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  color: "black",
});

/*----------------AllSales---------------*/

export const FilterInput = styled(TextField)(({ theme }) => ({
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
export const FilterContainer = styled(Box)({
  display: "flex",
  justifyContent: "start",
  gap: "20px",
  alignItems: "center",
  marginBottom: "0px",
});
export const FilterLabel = styled(Typography)({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
});
export const SmallAddToCartButton = styled(Button)(({ theme }) => ({
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

/*----------------CartComponent---------------*/

export const CartItemContainer = styled(Box)({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  padding: "0px",
  border: "1px solid rgba(221, 221, 221, 1)",
  borderRadius: "10px",
  marginBottom: "20px",
  position: "relative",
});
export const CartItemImage = styled("img")({
  width: "220px",
  height: "100%",
  borderRight: "1px solid rgba(221, 221, 221, 1)",
  objectFit: "fill",
});
export const CartItemDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "30px",
  gap: "30px",
});
export const CartItemTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  marginBottom: "10px",
});
export const CartItemQuantityContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
  border: "1px solid rgba(221, 221, 221, 1)",
  borderRadius: "5px",
  height: "58px",
});
export const CartItemQuantityButton = styled(Button)({
  padding: "5px 10px",
  fontSize: "26px",
  fontWeight: 700,
  lineHeight: "20px",
  borderLeft: "1px solid rgba(221, 221, 221, 1)",
  borderRight: "1px solid rgba(221, 221, 221, 1)",
  height: "58px",
  color: "rgba(139, 139, 139, 1)",
});
export const CartItemQuantity = styled(Typography)({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  margin: "0 30px",
});
export const CartItemPrice = styled(Typography)({
  fontSize: "40px",
  fontWeight: 600,
  lineHeight: "44px",
  display: "flex",
});
export const CartItemOldPrice = styled(Typography)({
  color: "rgba(139, 139, 139, 1)",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  textDecoration: "line-through",
  marginLeft: "10px",
});
export const CartItemRemoveButton = styled(Button)({
  fontSize: "22px",
  fontWeight: 700,
  lineHeight: "26px",
  color: "rgba(139, 139, 139, 1)",
  cursor: "pointer",
  position: "absolute",
  top: "25px",
  right: "10px",
});
export const OrderDetailsContainer = styled(Box)({
  backgroundColor: "rgba(241, 243, 244, 1)",
  borderRadius: "20px",
  padding: "30px",
  width: "100%",
});
export const OrderDetailsHeading = styled(Typography)({
  fontSize: "40px",
  fontWeight: 700,
  lineHeight: "44px",
  marginBottom: "20px",
});
export const OrderDetailsInfo = styled(Typography)({
  color: "rgba(139, 139, 139, 1)",
  fontSize: "40px",
  fontWeight: 500,
  lineHeight: "52px",
  marginBottom: "20px",
});
export const OrderDetailsTotal = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});
export const OrderDetailsTotalLabel = styled(Typography)({
  color: "rgba(139, 139, 139, 1)",
  fontSize: "40px",
  fontWeight: 500,
  lineHeight: "52px",
});
export const OrderDetailsTotalPrice = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "70px",
});
export const CartDiscountForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  margin: "0 auto",
  paddingTop: "20px",
});
export const CartDiscountInput = styled(TextField)(({ theme }) => ({
  marginBottom: "20px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
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
  width: "100%",
  backgroundColor: "white",
  color: "rgba(139, 139, 139, 1)",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "26px",
}));
export const CartDiscountButton = styled(Button)({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  color: "white",
  backgroundColor: "rgba(13, 80, 255, 1)",
  padding: "15px 30px",
  marginTop: "20px",
  cursor: "pointer",
  border: "none",
  width: "100%",
  marginBottom: "0px",
});
export const CartDiscountMessage = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  marginLeft: "20px",
});
export const EmptyCartMessage = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  marginBottom: "20px",
});
export const ContinueShoppingButton = styled(Button)({
  backgroundColor: "rgba(13, 80, 255, 1)",
  color: "white",
  borderRadius: "10px",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  padding: "15px 30px",
});
export const BasketHeading = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "30px",
  color: "black",
  marginBottom: "0",
});
export const ShopButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "20px",
  color: "rgba(139, 139, 139, 1)",
  border: "1px solid rgba(221, 221, 221, 1)",
  padding: "10px 30px",
  borderRadius: "10px",
  textDecoration: "none",
  width: "242px",
}));

/*----------------OneProduct---------------*/

export const ProductImage = styled("img")({
  width: "100%",
  marginLeft: "40px",
  marginBottom: "5px",
  borderBottom: "2px solid rgba(221, 221, 221, 1)",
  objectFit: "fill",
  alignSelf: "center",
});
export const AddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(13, 80, 255, 1)",
  color: "white",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  padding: "20px 20px",
  borderRadius: "5px",
  height: "58px",
  width: "65%",
}));
export const ProductDetailsHeading = styled(Typography)({
  fontSize: "40px",
  fontWeight: 700,
  lineHeight: "44px",
  color: "black",
  marginBottom: "20px",
});
export const ProductPriceContainer = styled(Box)({
  display: "flex",
  alignItems: "start",
  marginBottom: "20px",
  gap: "20px",
});
export const ProductPrice = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "70px",
});
export const ProductOldPrice = styled(Typography)({
  color: "rgba(139, 139, 139, 1)",
  fontSize: "40px",
  fontWeight: 500,
  lineHeight: "52px",
  textDecoration: "line-through",
});
export const DiscountPercentageSpan = styled("span")({
  backgroundColor: "rgba(13, 80, 255, 1)",
  height: "35px",
  color: "white",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  padding: "5px 10px",
  borderRadius: "5px",
});
export const ProductQuantityContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  border: "1px solid rgba(221, 221, 221, 1)",
  borderRadius: "5px",
  height: "58px",
  width: "200px",
  justifyContent: "space-between",
});
export const ProductQuantityButton = styled(Button)({
  padding: "5px 10px",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "20px",
  borderLeft: "1px solid rgba(221, 221, 221, 1)",
  borderRight: "1px solid rgba(221, 221, 221, 1)",
  height: "100%",
});
export const ProductQuantity = styled(Typography)({
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  margin: "0 10px",
});
export const ProductDescriptionHeading = styled(Typography)({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  marginBottom: "10px",
});
export const ProductDescription = styled(Typography)({
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "20px",
});

/*----------------ErrorPage---------------*/

export const NotFoundContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
});
export const NotFoundImage = styled("img")({
  width: "690px",
  height: "270px",
  marginBottom: "40px",
  marginTop: "40px",
});
export const NotFoundHeading = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "70px",
  color: "black",
  marginBottom: "20px",
});
export const NotFoundMessage = styled(Typography)({
  color: "#8B8B8B",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  marginBottom: "40px",
  textAlign: "center",
});
export const GoHomeButton = styled(Button)({
  backgroundColor: "#0D50FF",
  color: "white",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  padding: "15px 60px",
  borderRadius: "5px",
});
