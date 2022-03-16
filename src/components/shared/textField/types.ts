export interface ITextInput {
  id: string
  name: string
  label: string
  value: string
  variant?: 'standard' | 'filled' | 'outlined' | undefined
  onChange: (e: any) => void
  fullWidth?: boolean
}
