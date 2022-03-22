import { ICoin } from '../../components/coin/Coin'
import useResource from '../useResource'

const useCoin = (id?: string | undefined) => {
  const URL: string = `https://api.coingecko.com/api/v3/coins/${id}`

  return useResource<ICoin>(URL, 'coin')
}

export default useCoin
