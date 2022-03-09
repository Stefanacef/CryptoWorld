import '../../assets/styles/Cards/Card.css'
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from '@mui/material'

interface ICard {
  border?: string
  height?: number
  width?: number
  title?: string
  description?: string
  icon?: string
  price?: string
}

function CoinCard({ title, price, icon }: ICard) {
  return (
    <Card sx={{ width: 170 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img className=" card-icon" src={icon} alt="icon of the coin" />
          </Avatar>
        }
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}$
        </Typography>
      </CardContent>
    </Card>
  )
}
export default CoinCard
