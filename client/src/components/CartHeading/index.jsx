import { Link } from "react-router-dom";
import {
  BasketHeading,
  ShopButton,
} from "../../assets/styles/StyledComponents";

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
        <Link to="/allProducts" style={{ textDecoration: "none" }}>
          <ShopButton>Back to the store</ShopButton>
        </Link>
      </div>
    </div>
  );
}

export default CartHeading;
