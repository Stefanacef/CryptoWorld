import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Dialog, Grid, IconButton, Tooltip } from '@mui/material'
import { sortBy } from 'lodash'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import { useSetRecoilState } from 'recoil'
import { transactionsAtom } from '../state'
import TransactionsForm from '../TransactionsForm'
import { ITransaction } from '../types'

const ActionsColumnHeader = ({ cell }: any) => {
  const intl = useIntl()
  const setTransactions = useSetRecoilState(transactionsAtom)
  const [open, setOpen] = useState(false)

  const handleDelete = (id: string) => {
    setTransactions(previous =>
      previous.filter(transactionId => transactionId.id !== id)
    )
  }
  const handleEdit = (id: string, values: ITransaction) => {
    setTransactions(previous =>
      sortBy(
        previous.map(transaction =>
          transaction.id === id
            ? {
                ...transaction,
                coin: values.coin,
                amount: values.amount,
                date: values.date,
                currency: values.currency,
                type: values.type,
                price: values.price,
                description: values.description ? values.description : '',
                pinOnTop: values.pinOnTop,
              }
            : transaction
        ),
        el => !el.pinOnTop,
        'id'
      )
    )
    setOpen(false)
  }
  return (
    <>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Tooltip
            title={intl.formatMessage({ id: 'generic.label.delete' })}
            arrow
          >
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(cell.row.original.id)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip
            title={intl.formatMessage({ id: 'generic.label.edit' })}
            arrow
          >
            <IconButton
              aria-label="edit"
              onClick={() => setOpen(prev => (prev = !prev))}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <TransactionsForm
          setOpen={setOpen}
          editStatus={true}
          data={cell.row.original}
          handleEdit={handleEdit}
        />
      </Dialog>
    </>
  )
}

export default ActionsColumnHeader
