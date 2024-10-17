import Error from "../../assets/images/404.svg";
import { Link } from "react-router-dom";
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundMessage,
  GoHomeButton,
} from "../../assets/styles/StyledComponents";

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
