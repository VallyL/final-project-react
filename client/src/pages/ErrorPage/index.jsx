import Error from "../../assets/images/404.svg";
import { Typography, Box, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
});

const NotFoundImage = styled("img")({
  width: "690px",
  height: "270px",
  marginBottom: "40px",
  marginTop: "40px",
});

const NotFoundHeading = styled(Typography)({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "70px",
  color: "black",
  marginBottom: "20px",
});

const NotFoundMessage = styled(Typography)({
  color: "#8B8B8B",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "26px",
  marginBottom: "40px",
  textAlign: "center",
});

const GoHomeButton = styled(Button)({
  backgroundColor: "#0D50FF",
  color: "white",
  fontSize: "20px",
  fontWeight: 600,
  lineHeight: "26px",
  padding: "15px 60px",
  borderRadius: "5px",
});

function ErrorPage() {
  return (
    <NotFoundContainer>
      <NotFoundImage src={Error} alt="Page not found" />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundMessage>
        We're sorry, the page you requested could not be found.
        <br />
        Please go back to the homepage.
      </NotFoundMessage>
      <GoHomeButton component={Link} to="/">
        Go Home
      </GoHomeButton>
    </NotFoundContainer>
  );
}

export default ErrorPage;
