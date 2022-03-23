import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  TextareaAutosize,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  TextField,
  Tooltip,
  IconButton,
} from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'
import CoinSelector from './CoinSelector'
import { ITransactionsForm } from './types'
import { Formik } from 'formik'
import TextInput from '../shared/textField/TextInput'
import useInitialValue from './useInitialValue'
import useValidationSchema from './useValidationSchema'
import { Clear } from '@mui/icons-material'

const TransactionsForm = (props: ITransactionsForm) => {
  const intl = useIntl()
  const initialValue = useInitialValue(props?.transactionsData)
  const validationSchema = useValidationSchema()

  return (
    <>
      <Formik
        onSubmit={values => {
          props?.handleSubmit(values)
          props.setOpen(false)
        }}
        initialValues={initialValue}
        validationSchema={validationSchema}
      >
        {({ values, setFieldValue, submitForm, errors, touched }) => (
          <Card
            sx={{
              width: '500px',
              minHeight: '550px',
              padding: '30px',
              textAlign: 'left',
            }}
          >
            <CardHeader
              title={props?.title}
              action={
                <Tooltip
                  title={intl.formatMessage({ id: 'generic.label.close' })}
                  arrow
                >
                  <IconButton
                    aria-label="close"
                    onClick={() => props.setOpen(false)}
                  >
                    <Clear />
                  </IconButton>
                </Tooltip>
              }
            />
            <CardContent>
              <Grid container direction="column" rowGap="10px">
                <Grid item>
                  <CoinSelector
                    setFieldValue={setFieldValue}
                    messageError={errors.amount}
                    touched={touched.amount}
                    coin={values.coin}
                  />
                </Grid>
                <Grid item>
                  <TextInput
                    id="amount"
                    name="amount"
                    label="transaction.amount"
                    value={values.amount}
                    variant="outlined"
                    onChange={e => {
                      setFieldValue('amount', e.target.value)
                    }}
                    messageError={errors.amount}
                    touched={touched.amount}
                  />
                </Grid>
                <Grid item>
                  <TextInput
                    id="price"
                    name="price"
                    label="transaction.price"
                    value={values.price}
                    variant="outlined"
                    onChange={e => {
                      setFieldValue('price', e.target.value)
                    }}
                    messageError={errors.price}
                    touched={touched.price}
                  />
                </Grid>
                <Grid item>
                  <TextInput
                    id="currency"
                    name="currency"
                    label="transaction.currency"
                    value={values.currency}
                    variant="outlined"
                    onChange={e => {
                      setFieldValue('currency', e.target.value)
                    }}
                    messageError={errors.currency}
                    touched={touched.currency}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="date"
                    label={intl.formatMessage({
                      id: 'transaction.date',
                    })}
                    type="date"
                    defaultValue={values.date}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={e => {
                      setFieldValue('date', e.target.value)
                    }}
                  />
                  {errors.date && touched.date ? (
                    <span style={{ color: '#FC4F4F' }}>{errors.date}</span>
                  ) : null}
                </Grid>
                <Grid item>
                  <Typography variant="body1" color="text.secondary">
                    <FormattedMessage
                      id="transaction.type"
                      defaultMessage="Type of transaction"
                    />
                  </Typography>

                  <ToggleButtonGroup
                    value={values.type}
                    exclusive
                    onChange={(e: any) => {
                      setFieldValue('type', e.target.value)
                    }}
                    aria-label="text alignment"
                  >
                    <ToggleButton value="Buy" aria-label="left aligned">
                      <FormattedMessage
                        id="transaction.buy"
                        defaultMessage="Bui"
                      />
                    </ToggleButton>
                    <ToggleButton value="Sell" aria-label="centered">
                      <FormattedMessage
                        id="transaction.sell"
                        defaultMessage="Sell"
                      />
                    </ToggleButton>
                  </ToggleButtonGroup>
                  {errors.type && touched.type ? (
                    <span style={{ color: '#FC4F4F' }}>{errors.type}</span>
                  ) : null}
                </Grid>
                <Grid item>
                  <Typography variant="body1" color="text.secondary">
                    <FormattedMessage
                      id="transaction.description"
                      defaultMessage="Add a description"
                    />
                  </Typography>
                  <TextareaAutosize
                    style={{ width: ' 100%', height: 100, padding: 10 }}
                    placeholder={intl.formatMessage({
                      id: 'transaction.description',
                    })}
                    value={values.description}
                    onChange={e => {
                      setFieldValue('description', e.target.value)
                    }}
                  ></TextareaAutosize>
                  {errors.description && touched.description ? (
                    <span style={{ color: '#FC4F4F' }}>
                      {errors.description}
                    </span>
                  ) : null}
                </Grid>
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.pinOnTop}
                        onChange={e => {
                          setFieldValue('pinOnTop', e.target.checked)
                        }}
                      />
                    }
                    label={intl.formatMessage({
                      id: 'transaction.pin.on.top',
                    })}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{ paddingLeft: '16px', marginTop: '15px' }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  submitForm()
                }}
              >
                {props.buttonText}
              </Button>
            </CardActions>
          </Card>
        )}
      </Formik>
    </>
  )
}

export default TransactionsForm
