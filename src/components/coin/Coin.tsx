import { Skeleton, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { FormattedMessage } from 'react-intl'
import { useParams } from 'react-router-dom'
import useCoin from '../../api/coins/useCoin'

export interface ICoin {
  id: string
  last_updated: string
  name: string
  image: { small: string }
}

const Coin = () => {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useCoin(id)

  return (
    <Box p="30px">
      {isError ? (
        <span>
          <FormattedMessage id="generic.label.error" defaultMessage="Error" />
          {error?.message}
        </span>
      ) : isLoading ? (
        <Stack spacing={1} width="60px" marginLeft="50%">
          <Skeleton variant="circular" width={60} height={60} />
          <Skeleton variant="text" />
        </Stack>
      ) : (
        <Box>
          <img src={data?.image?.small} alt="coin" />
          {data?.name}
        </Box>
      )}
    </Box>
  )
}

export default Coin
