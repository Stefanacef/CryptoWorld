import { ITransaction } from '../components/transactions/types'
import useResource from './useResource'

const useTransactions = () => {
  const URL = 'https://retoolapi.dev/3N9lEy/transactions/3N9lEy/transactions'

  return useResource<ITransaction[]>(URL, 'transactions')
}

export default useTransactions
