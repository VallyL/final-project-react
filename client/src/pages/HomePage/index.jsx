import CheckDiscount from "../../components/ChechDiscount";
import SmallCategories from "../../components/SmallCategories";
import DiscountRequest from "../../components/DiscountRequest";

function HomePage() {
  return (
    <section>
      <CheckDiscount />
      <SmallCategories />
      <DiscountRequest />
    </section>
  );
}

export default HomePage;
