import { useMemo } from 'react'
import { ITransaction } from './types'

const useInitialValue = (props?: ITransaction) => {
  return useMemo<ITransaction>(
    () => ({
      id: props?.id ?? 0,
      coin: props?.coin ?? '',
      amount: props?.amount ?? '',
      date: props?.date ?? '',
      currency: props?.currency ?? '',
      type: props?.type ?? '',
      price: props?.price ?? '',
      description: props?.description ?? '',
      pinOnTop: props?.pinOnTop ?? false,
    }),
    [
      props?.id,
      props?.coin,
      props?.amount,
      props?.date,
      props?.currency,
      props?.type,
      props?.price,
      props?.description,
      props?.pinOnTop,
    ]
  )
}

export default useInitialValue
