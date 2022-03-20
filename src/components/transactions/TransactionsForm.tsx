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
import { ITransaction, ITransactionsForm } from './types'
import { Formik } from 'formik'
import { useRecoilState } from 'recoil'
import { transactionsAtom } from './state'
import TextInput from '../shared/textField/TextInput'
import useInitialValue from './useInitialValue'
import useValidationSchema from './useValidationSchema'
import { Clear } from '@mui/icons-material'
import sortBy from 'lodash/sortBy'

const TransactionsForm = (props: ITransactionsForm) => {
  const intl = useIntl()
  const [transactions, setTransactions] = useRecoilState(transactionsAtom)
  const initialValue = useInitialValue()
  const validationSchema = useValidationSchema()

  const handleSubmit = (values: ITransaction) => {
    setTransactions(previous =>
      sortBy(
        [
          ...previous,
          {
            id: String(transactions.length + 1),
            coin: values.coin,
            amount: values.amount,
            date: values.date,
            currency: values.currency,
            type: values.type,
            price: values.price,
            description: values.description ? values.description : '',
            pinOnTop: values.pinOnTop,
          },
        ],
        el => !el.pinOnTop
      )
    )
    props.setOpen(false)
  }

  return (
    <>
      <Formik
        onSubmit={values => {
          props?.editStatus && props?.handleEdit
            ? props?.handleEdit(props.data?.id, values)
            : handleSubmit(values)
        }}
        initialValues={props.editStatus ? props?.data : initialValue}
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
              title={
                !props?.editStatus
                  ? intl.formatMessage({
                      id: 'transaction.title',
                    })
                  : intl.formatMessage({
                      id: 'transaction.title.edit',
                    })
              }
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
                    coin={props?.data?.coin}
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
              {!props.editStatus ? (
                <Button
                  variant="outlined"
                  onClick={() => {
                    submitForm()
                  }}
                >
                  <FormattedMessage
                    id="generic.label.submit"
                    defaultMessage="Submit"
                  />
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => {
                    submitForm()
                  }}
                >
                  <FormattedMessage
                    id="generic.label.save"
                    defaultMessage="Save"
                  />
                </Button>
              )}
            </CardActions>
          </Card>
        )}
      </Formik>
    </>
  )
}

export default TransactionsForm
