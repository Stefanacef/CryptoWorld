import { useMemo } from 'react'
import { ITransaction } from './types'

const useInitialValue = () => {
  return useMemo<ITransaction>(
    () => ({
      id: '',
      coin: '',
      amount: '',
      date: '',
      currency: '',
      type: '',
      price: '',
      description: '',
      pinOnTop: false,
    }),
    []
  )
}

export default useInitialValue
