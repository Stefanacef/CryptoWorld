import { Button, Modal } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import TransactionsForm from './TransactionsForm'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

const AddNewTransaction = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        <FormattedMessage
          id="transactions.add"
          defaultMessage="Add transactions"
        />
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TransactionsForm setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  )
}

export default AddNewTransaction
