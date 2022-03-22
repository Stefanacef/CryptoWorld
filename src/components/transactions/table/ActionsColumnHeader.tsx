import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Dialog, Grid, IconButton, Tooltip } from '@mui/material'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import TransactionsForm from '../TransactionsForm'
import { ITransaction } from '../types'
import { useMutation, useQueryClient } from 'react-query'
import deleteTransaction from './actions/deleteTransaction'
import CircularProgress from '@mui/material/CircularProgress'
import { updateTransaction } from './actions/editTransaction'
import useTransaction from '../../../api/useTransaction'

const ActionsColumnHeader = ({ cell }: any) => {
  const intl = useIntl()
  const [open, setOpen] = useState(false)

  const { mutateAsync: mutateAsyncEditDelete, isLoading } =
    useMutation(deleteTransaction)
  const { mutateAsync: mutateAsyncEdit } = useMutation(updateTransaction)

  const queryClient = useQueryClient()
  const { data } = useTransaction(cell.row.original.id)

  const handleDelete = async () => {
    await mutateAsyncEditDelete(cell.row.original.id)
    queryClient.invalidateQueries('transactions')
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
    queryClient.invalidateQueries('transactions')
    setOpen(false)
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
          editStatus={true}
          title={intl.formatMessage({
            id: 'transaction.title.edit',
          })}
          data={cell.row.original}
          handleSubmit={handleEdit}
        />
      </Dialog>
    </>
  )
}

export default ActionsColumnHeader
