import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface ICoin {
  id?: string
  image?: string
  last_updated?: string
}
const Coin = () => {
  const [coin, setCoin] = useState<ICoin>({})
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
      {coin.id}
      {coin.last_updated}
    </div>
  )
}

export default Coin
