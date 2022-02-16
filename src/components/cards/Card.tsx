import "../../assets/styles/Cards/Card.css";
interface ICard {
  border?: string;
  height?: number;
  width?: number;
}
function Card({ border }: ICard) {
  return (
    <div className={`card ${border}`}>
      <h1>Title</h1>
      <p>description</p>
    </div>
  );
}
export default Card;
