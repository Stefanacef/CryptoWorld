const deleteTransaction = async (id: number) => {
  const URL = `https://retoolapi.dev/WBYZNS/transactions/${id}`
  await fetch(URL, { method: 'DELETE' })
  return true
}

export default deleteTransaction
