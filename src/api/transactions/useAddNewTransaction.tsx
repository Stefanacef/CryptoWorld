import useGeneralMutation from '../useGeneralMutation'
import { ITransaction } from '../../components/transactions/types'

const useAddNewTransaction = () => {
  const addNewTransaction = async (transaction: ITransaction) => {
    const response = await fetch('https://retoolapi.dev/WBYZNS/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })
    return response.json()
  }

  return useGeneralMutation(addNewTransaction, 'transactions')
}
export default useAddNewTransaction
