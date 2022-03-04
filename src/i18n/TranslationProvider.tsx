import { FC } from 'react'
import { IntlProvider } from 'react-intl'
import { useRecoilValue } from 'recoil'
import { languageAtom, languageSelector } from './state'

const TranslationProvider: FC = ({ children }) => {
  const language = useRecoilValue(languageAtom)
  const messages = useRecoilValue(languageSelector)

  return (
    <IntlProvider locale={language} messages={messages}>
      {children}
    </IntlProvider>
  )
}
export default TranslationProvider
