import { useMemo } from 'react'
import { ITransaction } from './types'

const useInitialValue = () => {
  return useMemo<ITransaction>(
    () => ({
      id: 0,
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
