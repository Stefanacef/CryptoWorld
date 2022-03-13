import { FormattedMessage } from 'react-intl'

const GetTranslate = ({ message }: { message: string }) => {
  return (
    <FormattedMessage id={message} defaultMessage="This filed is required" />
  )
}

export default GetTranslate
