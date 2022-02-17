import TopNavigation from "../components/navigation/TopNavigation";
import MainStatsBar from "../components/navigation/MainStatsBar";
import Carousel from "../components/carousel/Carousel";
import Table from "../components/tables/Table";
import "../assets/styles/HomePage/HomePage.css";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setData] = useState<string[]>([]);
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  useEffect(() => {
    fetch(URL)
      .then((date) => date.json())
      .then(setData)
      .catch((err) => {
        console.error(err);
      });
    console.log(data);
  }, []);
  return (
    <div className="home">
      <MainStatsBar />
      <TopNavigation />
      <Carousel />
      <Table data={data} />
    </div>
  );
}
