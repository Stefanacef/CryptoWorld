import { Box } from '@mui/system'
import { FormattedMessage } from 'react-intl'

const TypeColumnHeader = (props: { type: string }) => {
  return (
    <Box
      sx={{
        borderRadius: '15px',
        backgroundColor: props.type === 'Buy' ? '#91e987bc' : '#ee66667e',
        textAlign: 'center',
        padding: '0 5px',
      }}
    >
      {props.type === 'Buy' ? (
        <FormattedMessage id="transaction.buy" defaultMessage="Buy " />
      ) : (
        <FormattedMessage id="transaction.sell" defaultMessage="Sell " />
      )}
    </Box>
  )
}

export default TypeColumnHeader
