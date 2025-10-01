import Navbar from "@/src/Components/elements/Navbar/Navbar";
import HeroSlider from "@/src/Components/elements/Slider/Slider";
import MainCard from "@/src/Components/fragments/mainCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <MainCard />
    </>
  );
}
