import Navbar from "@/src/Components/elements/Navbar/Navbar";
import HeroSlider from "@/src/Components/elements/Slider/Slider";
import MainCard from "@/src/Components/fragments/mainCard";
import NewArrivalsLayouts from "@/src/Components/layouts/newArrivalLayouts";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <MainCard />
      <NewArrivalsLayouts />
    </>
  );
}
