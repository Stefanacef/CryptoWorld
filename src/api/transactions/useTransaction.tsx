import { ITransaction } from '../../components/transactions/types'
import useResource from '../useResource'

const useTransaction = (id?: number | undefined) => {
  const URL: string = `https://retoolapi.dev/WBYZNS/transactions/${id}`
  return useResource<ITransaction>(URL, 'transaction')
}

export default useTransaction
