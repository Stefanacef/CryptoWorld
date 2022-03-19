import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Grid, IconButton, Tooltip } from '@mui/material'
import { useIntl } from 'react-intl'
import { useSetRecoilState } from 'recoil'
import { transactionsAtom } from '../state'

const ActionsColumnHeader = ({ cell }: any) => {
  const intl = useIntl()
  const setTransactions = useSetRecoilState(transactionsAtom)

  const handleDelete = (id: string) => {
    setTransactions(previous =>
      previous.filter(transactionId => transactionId.id !== id)
    )
  }

  return (
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
        <Tooltip title={intl.formatMessage({ id: 'generic.label.edit' })} arrow>
          <IconButton aria-label="edit" onClick={() => console.log('buna')}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
}

export default ActionsColumnHeader
