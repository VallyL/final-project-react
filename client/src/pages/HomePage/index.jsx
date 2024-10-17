import CheckDiscount from "../../components/ChechDiscount";
import SmallCategories from "../../components/SmallCategories";
import DiscountRequest from "../../components/DiscountRequest";
import SmallDiscountedContainer from "../../components/SmallDiscountedComponent";

function HomePage() {
  return (
    <section>
      <CheckDiscount />
      <SmallCategories />
      <DiscountRequest />
      <SmallDiscountedContainer />
    </section>
  );
}

export default HomePage;
