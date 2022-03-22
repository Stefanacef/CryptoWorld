import { IconButton, Tooltip } from '@mui/material'
import { useIntl } from 'react-intl'
import PushPinIcon from '@mui/icons-material/PushPin'
import { Box } from '@mui/system'

const CoinColumnHeader = (props: any) => {
  const intl = useIntl()
  const coin =
    props.cell.value.charAt(0).toUpperCase() + props.cell.value.slice(1)
  const pin = props.cell.row.original.pinOnTop
  return (
    <>
      <Box display="flex" position="relative" width="100%">
        <span>{coin}</span>
        {pin && (
          <Box position="absolute" bottom=".5px" right="0">
            <Tooltip
              title={intl.formatMessage({ id: 'generic.label.pin' })}
              arrow
            >
              <PushPinIcon sx={{ color: 'gray' }} />
            </Tooltip>
          </Box>
        )}
      </Box>
    </>
  )
}

export default CoinColumnHeader
