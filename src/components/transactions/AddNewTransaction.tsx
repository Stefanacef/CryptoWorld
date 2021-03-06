import { Box, Dialog, IconButton, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import TransactionsForm from './TransactionsForm'
import { ITransaction } from './types'
import useAddNewTransaction from '../../api/transactions/useAddNewTransaction'

const AddNewTransaction = () => {
  const intl = useIntl()
  const [open, setOpen] = useState(false)
  const { mutateAsync } = useAddNewTransaction()

  const handleSubmit = async (values: ITransaction) => {
    await mutateAsync({
      id: Math.floor(Math.random() * 100),
      coin: values.coin,
      amount: values.amount,
      date: values.date,
      currency: values.currency,
      type: values.type,
      price: values.price,
      description: values.description ? values.description : '',
      pinOnTop: values.pinOnTop,
    })
  }

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
        <TransactionsForm
          setOpen={setOpen}
          handleSubmit={handleSubmit}
          title={intl.formatMessage({
            id: 'transaction.title',
          })}
          buttonText={intl.formatMessage({
            id: 'generic.label.submit',
          })}
        />
      </Dialog>
    </Box>
  )
}

export default AddNewTransaction
