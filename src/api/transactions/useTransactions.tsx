import { ITransaction } from '../../components/transactions/types'
import useResource from '../useResource'

const useTransactions = () => {
  const URL = 'https://retoolapi.dev/WBYZNS/transactions'

  return useResource<ITransaction[]>(URL, 'transactions')
}

export default useTransactions
