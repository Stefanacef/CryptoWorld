import { useState, useEffect } from 'react'
interface IPost {
  id: number
  content: string
}
const useFetch = (url: string) => {
  const [data, setData] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const abortCount = new AbortController()
    fetch(url, { signal: abortCount.signal })
      .then(respons => {
        if (!respons.ok) {
          throw Error('could not fetch the data from that resource')
        }
        return respons.json()
      })
      .then(data => {
        setData(data)
        setIsLoading(false)
        setError(null)
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Error')
        } else {
          setError(error.message)
          setIsLoading(false)
        }
      })
    return () => abortCount.abort()
  }, [url])
  return { data, isLoading, error }
}

export default useFetch
