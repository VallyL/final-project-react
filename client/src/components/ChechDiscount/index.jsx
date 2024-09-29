import BackgroundImage from "../../assets/images/img.svg";
import { Typography, Button, styled, Link } from "@mui/material";

const HeroContainer = styled("div")({
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

const HeroHeading = styled(Typography)({
  fontSize: "96px",
  fontWeight: 700,
  lineHeight: "105px",
  marginBottom: "20px",
});

const HeroButton = styled(Button)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  backgroundColor: "rgba(13, 80, 255, 1)",
  color: "white",
  padding: "15px 60px",
  borderRadius: "5px",
  textDecoration: "none",
}));

function CheckDiscount() {
  return (
    <HeroContainer>
      <HeroHeading>Amazing Discounts on Pets Products!</HeroHeading>
      <HeroButton component={Link} to="/allSales">
        Check out
      </HeroButton>
    </HeroContainer>
  );
}

export default CheckDiscount;
