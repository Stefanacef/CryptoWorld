import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Grid, IconButton, Tooltip } from '@mui/material'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import CircularProgress from '@mui/material/CircularProgress'
import useDeleteTransaction from '../../../api/transactions/useDeleteTransaction'
import { DialogBox } from './DialogBox'

const ActionsColumn = ({ cell }: any) => {
  const intl = useIntl()
  const [open, setOpen] = useState(false)

  const { mutateAsync, isLoading } = useDeleteTransaction()

  const handleDelete = async () => {
    await mutateAsync(cell.row.original.id)
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
      {open ? <DialogBox setOpen={setOpen} open={open} cell={cell} /> : null}
    </>
  )
}

export default ActionsColumn
