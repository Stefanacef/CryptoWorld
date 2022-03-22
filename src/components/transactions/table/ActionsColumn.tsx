import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Dialog, Grid, IconButton, Tooltip } from '@mui/material'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import TransactionsForm from '../TransactionsForm'
import { ITransaction } from '../types'
import CircularProgress from '@mui/material/CircularProgress'
import useTransaction from '../../../api/transactions/useTransaction'
import useEditTransaction from '../../../api/transactions/useEditTansaction'
import useDeleteTransaction from '../../../api/transactions/useDeleteTransaction'

const ActionsColumn = ({ cell }: any) => {
  const intl = useIntl()
  const [open, setOpen] = useState(false)

  const { mutateAsync: mutateAsyncEditDelete, isLoading } =
    useDeleteTransaction()
  const { mutateAsync: mutateAsyncEdit } = useEditTransaction()

  const { data } = useTransaction(cell.row.original.id)

  const handleDelete = async () => {
    await mutateAsyncEditDelete(cell.row.original.id)
  }

  const handleEdit = async (values: ITransaction) => {
    await mutateAsyncEdit({
      ...data,
      id: cell.row.original.id,
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
    <>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item>
          {!isLoading ? (
            <Tooltip
              title={intl.formatMessage({ id: 'generic.label.delete' })}
              arrow
            >
              <IconButton aria-label="delete" onClick={() => handleDelete()}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <CircularProgress size="25px" sx={{ marginRight: '7px' }} />
          )}
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
          title={intl.formatMessage({
            id: 'transaction.title.edit',
          })}
          transactionsData={cell.row.original}
          handleSubmit={handleEdit}
          buttonText={intl.formatMessage({
            id: 'generic.label.save',
          })}
        />
      </Dialog>
    </>
  )
}

export default ActionsColumn
