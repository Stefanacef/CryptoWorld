import { useMutation, useQueryClient } from 'react-query'

const useGeneralMutation = <TRequest, TResponse>(
  mutationFn: (parameter: TRequest) => Promise<TResponse>,
  queryKey: string
) => {
  const queryClient = useQueryClient()
  return useMutation<TResponse, any, TRequest>(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey)
    },
  })
}

export default useGeneralMutation
