import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'
import TextInput from '../shared/textField/TextInput'

const TransactionsForm = () => {
  const intl = useIntl()
  return (
    <Card
      sx={{
        width: '500px',
        minHeight: '550px',
        padding: '30px',
        textAlign: 'left',
      }}
    >
      <CardHeader
        title={intl.formatMessage({
          id: 'transaction.title',
        })}
      />
      <CardContent>
        <Grid container direction="column" rowGap="30px">
          <Grid item>
            <FormControl fullWidth>
              <InputLabel id="coin-selector-label">
                <FormattedMessage
                  id="generic.label.coins"
                  defaultMessage="Coin"
                />
              </InputLabel>
              <Select
                labelId="coin-selector-label"
                id="coin-selector"
                value="{"
                label={intl.formatMessage({
                  id: 'generic.label.coins',
                })}
                onChange={() => {
                  console.log('buna')
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ paddingLeft: '16px', marginTop: '15px' }}
      >
        <Button variant="outlined" onClick={() => console.log('buna')}>
          <FormattedMessage id="signUp.button.create" defaultMessage="Create" />
        </Button>
      </CardActions>
    </Card>
  )
}

export default TransactionsForm
