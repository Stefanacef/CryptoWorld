import CardModel from "../../interfaces/card";
import "../../assets/styles/Cards/Card.css";
function Card({ border }: CardModel) {
  return (
    <div className={`card ${border}`}>
      <h1>Title</h1>
      <p>description</p>
    </div>
  );
}
export default Card;
