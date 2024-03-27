import Footer from "@/components/footer/Footer";
import CarouselComponent from "@/components/nav/CarouselComponent";
import Navbar from "@/components/nav/Navbar";
import DiscountUpTo from "@/components/spacal/DiscountUpTo";
import FreeDeliveryProduct from "@/components/spacal/FreeDeliveryProduct";
import LatestProduct from "@/components/spacal/LatestProduct";
import SpatialDeals from "@/components/spacal/SpatialDeals";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <CarouselComponent/>
      <FreeDeliveryProduct/>
      <SpatialDeals/>
      <LatestProduct/>
      <DiscountUpTo/>
      <Footer/>
    </main>
  );
}
