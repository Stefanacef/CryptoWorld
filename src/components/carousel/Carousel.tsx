import '../../assets/styles/Carousel/Carousel.css'
import { FC } from 'react'
import Button from '../buttons/Button'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'

type Props = {
  children?: JSX.Element[]
}
const Carousel: FC<Props> = ({ children }) => {
  const navigate = useNavigate()
  const intl = useIntl()

  return (
    <div className="carousel">
      <h2 className="carousel-title">
        <FormattedMessage
          id="carousel.title"
          defaultMessage="Our favorite coins"
        />
      </h2>
      <div className="carousel-content">{children}</div>
      <div className="carousel-button" onClick={() => navigate('/research')}>
        <Button
          text={intl.formatMessage({ id: 'button.why' })}
          border="border-send"
        />
      </div>
    </div>
  )
}

export default Carousel
