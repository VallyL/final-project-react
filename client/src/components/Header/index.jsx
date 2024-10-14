import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, IconButton, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../assets/icons/logo.svg";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  padding: "20px 30px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
}));

const LogoContainer = styled("div")({
  width: "70px",
  height: "70px",
});

const CartContainer = styled("div")({
  width: "48px",
  height: "48px",
  marginTop: "10px",
});

const CartQuantitySpan = styled("span")({
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
