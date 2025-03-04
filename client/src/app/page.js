import Footer from "@/components/footer/Footer";
import CarouselComponent from "@/components/nav/CarouselComponent";
import Navbar from "@/components/nav/Navbar";
import CategoryProduct from "@/components/product/CategoryProduct";
import PopulerProduct from "@/components/product/PopulerProduct";
import DiscountUpTo from "@/components/spacal/DiscountUpTo";
import FreeDeliveryProduct from "@/components/spacal/FreeDeliveryProduct";
import HomeCatagory from "@/components/spacal/HomeCatagory";
import LatestProduct from "@/components/spacal/LatestProduct";
import SpatialDeals from "@/components/spacal/SpatialDeals";
import { productCategoriesArray } from "@/constant/data";

export default function Home() {
  return (
    <main>
      <CarouselComponent />
      <SpatialDeals />
      <HomeCatagory />
      {/* <PopulerProduct /> */}
      <LatestProduct />
      <FreeDeliveryProduct />
      <DiscountUpTo />
      {productCategoriesArray.map((category) => (
        <CategoryProduct key={category} category={category} />
      ))}
    </main>
  );
}
