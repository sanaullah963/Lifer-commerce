import Footer from "@/components/footer/Footer";
import CarouselComponent from "@/components/nav/CarouselComponent";
import Navbar from "@/components/nav/Navbar";
import PopulerProduct from "@/components/product/PopulerProduct";
import DiscountUpTo from "@/components/spacal/DiscountUpTo";
import FreeDeliveryProduct from "@/components/spacal/FreeDeliveryProduct";
import LatestProduct from "@/components/spacal/LatestProduct";
import SpatialDeals from "@/components/spacal/SpatialDeals";

export default function Home() {
  return (
    <main>
      <CarouselComponent />
      <SpatialDeals />
      <PopulerProduct />
      <LatestProduct />
      <FreeDeliveryProduct />
      <DiscountUpTo />
    </main>
  );
}
