import Footer from "@/components/footer/Footer";
import CarouselComponent from "@/components/nav/CarouselComponent";
import Navbar from "@/components/nav/Navbar";
import SpatialDeals from "@/components/spacal/SpatialDeals";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <CarouselComponent/>
      <SpatialDeals/>
      <Footer/>
    </main>
  );
}
