import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../assets/icons/logo.svg";
import {
  StyledAppBar,
  StyledToolbar,
  StyledLink,
  LogoContainer,
  CartContainer,
  CartQuantitySpan,
} from "../../assets/styles/StyledComponents";

function Header() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoContainer>
          <Link to="/" style={{ textDecoration: "none" }}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <img
                src={Logo}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
            </IconButton>
          </Link>
        </LogoContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StyledLink to="/" style={{ marginRight: "20px" }}>
            <Typography variant="h6" sx={{ marginRight: "20px" }}>
              Main Page
            </Typography>
          </StyledLink>
          <StyledLink to="/allCategories" style={{ marginRight: "20px" }}>
            <Typography variant="h6" sx={{ marginRight: "20px" }}>
              Categories
            </Typography>
          </StyledLink>
          <StyledLink to="/allProducts" style={{ marginRight: "20px" }}>
            <Typography variant="h6" sx={{ marginRight: "20px" }}>
              All products
            </Typography>
          </StyledLink>
          <StyledLink to="/allSales" style={{ marginRight: "20px" }}>
            <Typography variant="h6" sx={{ marginRight: "20px" }}>
              All sales
            </Typography>
          </StyledLink>
        </div>
        <CartContainer>
          <Link to="/cartPage" style={{ textDecoration: "none" }}>
            <IconButton aria-label="cart" color="black">
              <ShoppingCartIcon style={{ width: "100%", height: "100%" }} />
              {cartItems.length > 0 && (
                <CartQuantitySpan>{cartItems.length}</CartQuantitySpan>
              )}
            </IconButton>
          </Link>
        </CartContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;
