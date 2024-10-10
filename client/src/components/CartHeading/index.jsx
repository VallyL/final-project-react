import { Button, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const BasketHeading = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "50px",
  color: "black",
});

const ShopButton = styled(Button)(({ theme }) => ({
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

function CartHeading() {
  return (
    <div style={{ padding: "0px", margin: "50px 50px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BasketHeading>Shopping cart</BasketHeading>
        <hr
          style={{
            border: "1px solid rgba(221, 221, 221, 1)",
            width: "45%",
            marginLeft: "40px",
          }}
        />
        <Link to="/allCategories" style={{ textDecoration: "none" }}>
          <ShopButton>Back to the store</ShopButton>
        </Link>
      </div>
    </div>
  );
}

export default CartHeading;
