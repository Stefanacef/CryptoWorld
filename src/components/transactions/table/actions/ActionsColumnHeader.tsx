import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Dialog, Grid, IconButton, Tooltip } from '@mui/material'
import { sortBy } from 'lodash'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import { useSetRecoilState } from 'recoil'
import { transactionsAtom } from '../../state'
import TransactionsForm from '../../TransactionsForm'
import { ITransaction } from '../../types'
import { useMutation, useQueryClient } from 'react-query'
import deleteTransaction from './deleteTransaction'
import CircularProgress from '@mui/material/CircularProgress'

const ActionsColumnHeader = ({ cell }: any) => {
  const intl = useIntl()
  const setTransactions = useSetRecoilState(transactionsAtom)
  const [open, setOpen] = useState(false)

  const { mutateAsync, isLoading } = useMutation(deleteTransaction)
  const queryClient = useQueryClient()

  const handleDelete = async () => {
    await mutateAsync(cell.row.original.id)
    queryClient.invalidateQueries('transactions')
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
            <IconButton aria-label="delete" onClick={() => handleDelete()}>
              {isLoading ? (
                <Box height="10px">
                  <CircularProgress />
                </Box>
              ) : (
                <DeleteIcon />
              )}
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
