import { Link } from "react-router-dom";
import {
  HeroContainer,
  HeroHeading,
  HeroButton,
} from "../../assets/styles/StyledComponents";

function CheckDiscount() {
  return (
    <HeroContainer>
      <HeroHeading>Amazing Discounts on Pets Products!</HeroHeading>
      <Link to="/allSales">
        <HeroButton>Check out</HeroButton>
      </Link>
    </HeroContainer>
  );
}

export default CheckDiscount;
