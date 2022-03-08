import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface ICoin {
  id: string
  last_updated: string
  name: string
  image: { small: string }
}

const Coin = () => {
  const [coin, setCoin] = useState<ICoin>()
  const { id } = useParams()
  const URL: string = `https://api.coingecko.com/api/v3/coins/${id}`

  useEffect(() => {
    fetch(URL)
      .then(data => data.json())
      .then(setCoin)
      .catch(err => {
        console.error(err)
      })
  }, [URL])

  return (
    <div>
      <img src={coin?.image.small} alt="coin" />
      {coin?.name}
    </div>
  )
}

export default Coin
