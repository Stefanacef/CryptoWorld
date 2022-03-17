import { ICryptoCoin } from '../components/coin/table/types'
import useResource from './useResource'

const useCoins = () => {
  const URL: string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  return useResource<ICryptoCoin[]>(URL, 'coins')
}

export default useCoins
