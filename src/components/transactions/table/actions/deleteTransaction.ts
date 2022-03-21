const deleteTransaction = async (id: number) => {
  const URL = `https://retoolapi.dev/3N9lEy/transactions/${id}`
  await fetch(URL, { method: 'DELETE' })
  return true
}

export default deleteTransaction
