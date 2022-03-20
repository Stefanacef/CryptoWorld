import { Box, Dialog, IconButton, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import TransactionsForm from './TransactionsForm'

const AddNewTransaction = () => {
  const intl = useIntl()
  const [open, setOpen] = useState(false)

  return (
    <Box textAlign="left">
      <Typography variant="body1" color="text.secondary">
        <FormattedMessage
          id="transactions.add"
          defaultMessage="Add new transaction"
        />
      </Typography>
      <Tooltip title={intl.formatMessage({ id: 'transactions.add' })} arrow>
        <IconButton
          aria-label="add"
          onClick={() => setOpen(true)}
          sx={{ background: '#2196f3 ', marginBottom: '30px' }}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <TransactionsForm setOpen={setOpen} />
      </Dialog>
    </Box>
  )
}

export default AddNewTransaction
