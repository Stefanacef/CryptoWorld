import { ITransaction } from './../../types'

const addNewTransaction = async (transaction: ITransaction) => {
  const URL = 'https://retoolapi.dev/3N9lEy/transactions'
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transaction),
  })
  return response.json()
}

export default addNewTransaction
