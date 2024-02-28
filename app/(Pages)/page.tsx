import BestMonthProduct from "../components/Home/BestMonthProduct";
import Carousel from "../components/Home/Carousel";
import Categories from "../components/Home/Categories";
import CustomerService from "../components/Home/CustomerService";
import ExploreProducts from "../components/Home/ExploreProducts";
import ImageSale from "../components/Home/ImageSale";
import NewArrival from "../components/Home/NewArrival";
import TodaySale from "../components/Home/TodaySale";
import Line from "../components/custom/Line";


export default function Home() {
  return (
    <div>
      <Carousel />
      <TodaySale />
      <Line />
      <Categories />
      <Line />
      <BestMonthProduct />
      <ImageSale />
      <ExploreProducts />
      <NewArrival />
      <CustomerService />
    </div>
  );
}
