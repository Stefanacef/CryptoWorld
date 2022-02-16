import TopNavigation from "../components/navigation/TopNavigation";
import MainStatsBar from "../components/navigation/MainStatsBar";
import Carousel from "../components/carousel/Carousel";
import "../assets/styles/HomePage/HomePage.css";
export default function HomePage() {
  return (
    <div className="home">
      <MainStatsBar />
      <TopNavigation />
      <Carousel />
    </div>
  );
}
