import Navbar from "@/src/Components/elements/Navbar/Navbar";
import HeroSlider from "@/src/Components/elements/Slider/Slider";
import MainCard from "@/src/Components/fragments/mainCard";
import NewArrivalsLayouts from "@/src/Components/layouts/newArrivalLayouts";
import InformationLayouts from "../Components/layouts/informationLayouts";
import BannerLayouts from "../Components/layouts/bannerLayouts";
import ArticleLayouts from "../Components/layouts/articleLayouts";
import Footer from "../Components/elements/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <MainCard />
      <NewArrivalsLayouts />
      <InformationLayouts />
      <BannerLayouts />
      <ArticleLayouts />
      <Footer />
    </>
  );
}
