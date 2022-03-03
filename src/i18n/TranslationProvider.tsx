import { FC } from 'react'
import { IntlProvider, MessageFormatElement } from 'react-intl'
import en from './languages/en.json'
import ro from './languages/ro.json'

interface IntlConfig {
  locale: string
  messages: Record<string, string> | Record<string, MessageFormatElement[]>
}

const TranslationProvider: FC = ({ children }) => {
  const local = navigator.language
  return (
    <IntlProvider locale={local} messages={ro}>
      {children}
    </IntlProvider>
  )
}
export default TranslationProvider
