import { Box } from '@mui/material'
import AddNewTransaction from '../components/transactions/AddNewTransaction'
import TransactionsTable from '../components/transactions/table/TransactionsTable'

const Transactions = () => {
  return (
    <Box m="30px" display="flex" justifyContent="center" flexDirection="column">
      <AddNewTransaction />
      <TransactionsTable />
    </Box>
  )
}

export default Transactions
