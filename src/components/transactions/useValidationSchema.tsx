import { useMemo } from 'react'
import { useIntl } from 'react-intl'
import * as Yup from 'yup'

const useValidationSchema = () => {
  const intl = useIntl()
  return useMemo(
    () =>
      Yup.object({
        coin: Yup.string().required(
          intl.formatMessage({
            id: 'transaction.coin.input.required',
          })
        ),
        amount: Yup.string().required(
          intl.formatMessage({
            id: 'transaction.amount.input.required',
          })
        ),
        date: Yup.string().required(
          intl.formatMessage({
            id: 'transaction.price.input.required',
          })
        ),
        currency: Yup.string().required(
          intl.formatMessage({
            id: 'transaction.currency.input.required',
          })
        ),
        type: Yup.string().required(
          intl.formatMessage({
            id: 'transaction.date.input.required',
          })
        ),
        price: Yup.string().required(
          intl.formatMessage({
            id: 'transaction.type.input.required',
          })
        ),
        description: Yup.string()
          .min(
            10,
            intl.formatMessage({
              id: 'transaction.description.minimum.characters',
            })
          )
          .notRequired(),
      }),
    [intl]
  )
}

export default useValidationSchema
