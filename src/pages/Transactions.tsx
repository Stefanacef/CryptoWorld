import { Box } from '@mui/material'
import AddNewTransaction from '../components/transactions/AddNewTransaction'

const Transactions = () => {
  return (
    <Box m="30px" display="flex" justifyContent="center">
      <AddNewTransaction />
    </Box>
  )
}

export default Transactions
