import { IValidation } from './../../transactions/types'

export interface ITextInput extends IValidation {
  id: string
  name: string
  label: string
  value: string
  variant?: 'standard' | 'filled' | 'outlined' | undefined
  onChange: (e: any) => void
  fullwidth?: boolean
}
