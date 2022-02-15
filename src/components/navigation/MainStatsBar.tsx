import "../../assets/styles/Navigation/MainStatsBar.css";
import Content from "../../interfaces/content";
export default function MainStatsBar() {
  const content: Content[] = [
    { name: "Cryptos", value: 1000 },
    { name: "Market Cap", value: 19827660596 },
    { name: " 24h Real Volume", value: 77460311771 },
    { name: "Dominance : BTC", value: 42.3 },
    { name: "Exchanges ", value: 100 },
  ];
  return (
    <div className="mainStatsBar">
      <ul className="mainStatsBar-list">
        {content.map((value, index) => (
          <li key={index}>
            {value.name} : {value.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
