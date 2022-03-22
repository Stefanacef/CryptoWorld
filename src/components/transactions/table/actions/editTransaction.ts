export const updateTransaction = async ({ id, ...transactions }: any) => {
  const response = await fetch(
    `https://retoolapi.dev/WBYZNS/transactions/${id}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transactions),
    }
  )
  return response
}
