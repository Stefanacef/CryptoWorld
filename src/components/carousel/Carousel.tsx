import '../../assets/styles/Carousel/Carousel.css'
import { FC } from 'react'
import Button from '../buttons/Button'
import { useNavigate } from 'react-router-dom'
type Props = {
  children?: JSX.Element[]
}
const Carousel: FC<Props> = ({ children }) => {
  const navigate = useNavigate()

  return (
    <div className="carousel">
      <h2 className="carousel-title">Our favorite coins</h2>
      <div className="carousel-content">{children}</div>
      <div className="carousel-button" onClick={() => navigate('/research')}>
        <Button text="Why?" border="border-send" />
      </div>
    </div>
  )
}

export default Carousel
