import useGeneralMutation from '../useGeneralMutation'

const useDeleteTransaction = () => {
  const deleteTransaction = async (id: number) => {
    const URL = `https://retoolapi.dev/WBYZNS/transactions/${id}`
    await fetch(URL, { method: 'DELETE' })
    return true
  }

  return useGeneralMutation(deleteTransaction, 'transactions')
}

export default useDeleteTransaction
