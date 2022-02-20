import TopNavigation from "../components/navigation/TopNavigation";
import MainStatsBar from "../components/navigation/MainStatsBar";
import Carousel from "../components/carousel/Carousel";
import Card from "../components/cards/Card";
import Table from "../components/tables/Table";
import "../assets/styles/HomePage/HomePage.css";
import { useEffect, useState } from "react";
interface ICryptoCoin {
  id: string;
  name: string;
  image: string;
  current_price: string;
}
export default function HomePage() {
  const [data, setData] = useState<ICryptoCoin[]>([]);
  const URL: string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
  useEffect(() => {
    fetch(URL)
      .then((date) => date.json())
      .then(setData)
      .catch((err) => {
        console.error(err);
      });
  });
  const topFiveCoins = data.slice(-5);
  return (
    <div className="home">
      <MainStatsBar />
      <TopNavigation />
      <Carousel>
        {topFiveCoins.map((crypto: ICryptoCoin) => (
          <Card
            key={crypto.id}
            border=" border border-purple"
            title={crypto.name}
            icon={crypto.image}
            price={crypto.current_price}
          />
        ))}
      </Carousel>
      <Table data={data} />
    </div>
  );
}
