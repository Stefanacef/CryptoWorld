import { useQuery } from 'react-query'

const useResource = <TResource,>(url: string, key: string) => {
  const fetchResource = async () => {
    const response = await fetch(url)
    return response.json()
  }
  return useQuery<TResource, Error>(key, fetchResource)
}

export default useResource
