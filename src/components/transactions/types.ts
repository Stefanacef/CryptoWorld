import { FormikErrors, FormikTouched } from 'formik'
export interface ITransaction {
  id: string
  coin: string
  amount: string
  date: string
  currency: string
  type: string
  price: string
  description?: string
  pinOnTop?: boolean
}

export interface ICoinSelector {
  id: number
  image: string
  name: string
}
export interface ICoinSelectorPros {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void
  errors: FormikErrors<ITransaction>
  touched: FormikTouched<ITransaction>
}
