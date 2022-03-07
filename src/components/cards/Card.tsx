import '../../assets/styles/Cards/Card.css'
interface ICard {
  border?: string
  height?: number
  width?: number
  title?: string
  description?: string
  icon?: string
  price?: string
}
function Card({ border, title, price, icon }: ICard) {
  return (
    <div className={`card ${border}`}>
      <img className=" card-icon" src={icon} alt="icon of the coin" />
      <h3>{title}</h3>
      <p>{price} USD</p>
    </div>
  )
}
export default Card
