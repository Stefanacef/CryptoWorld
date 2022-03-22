import { FormikErrors, FormikTouched } from 'formik'
export interface ITransaction {
  id: number
  coin: string
  amount: string
  date: string
  currency: string
  type: string
  price: string
  description?: string
  pinOnTop?: boolean
}

export interface IValidation {
  messageError?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined
}

export interface ICoinSelectorPros extends IValidation {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void
  coin?: string
}

export interface ITransactionsForm {
  setOpen: (value: boolean) => void
  title: string
  data?: any
  editStatus: boolean
  handleSubmit: (values: ITransaction) => void
}
