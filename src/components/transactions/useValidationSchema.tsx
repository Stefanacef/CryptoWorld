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
            id: 'transaction.text.input.required',
          })
        ),
        amount: Yup.string().required(
          intl.formatMessage({
            id: 'transaction.text.input.required',
          })
        ),
        date: Yup.string().required(
          intl.formatMessage({
            id: 'transaction.text.input.required',
          })
        ),
        currency: Yup.string().required(
          intl.formatMessage({
            id: 'transaction.text.input.required',
          })
        ),
        type: Yup.string().required(
          intl.formatMessage({
            id: 'transaction.text.input.required',
          })
        ),
        price: Yup.string().required(
          intl.formatMessage({
            id: 'transaction.text.input.required',
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
