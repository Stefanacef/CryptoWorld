import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  TextareaAutosize,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  TextField,
} from '@mui/material'
import { useMemo } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import CoinSelector from './CoinSelector'
import { ITransaction } from './types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useRecoilState } from 'recoil'
import { transactionsAtom } from './state'
import TextInput from '../shared/textField/TextInput'

const TransactionsForm = () => {
  const [transaction, setTransaction] = useRecoilState(transactionsAtom)
  console.log(transaction)
  const intl = useIntl()

  const initialValue = useMemo<ITransaction>(
    () => ({
      id: '',
      coin: '',
      amount: '',
      date: '',
      currency: '',
      type: '',
      price: '',
      description: '',
      pinOnTop: false,
    }),
    []
  )
  const validationSchema = Yup.object({
    coin: Yup.string().required('transaction.text.input.required'),
    amount: Yup.string().required('transaction.text.input.required'),
    date: Yup.string().required('transaction.text.input.required'),
    currency: Yup.string().required('transaction.text.input.required'),
    type: Yup.string().required('transaction.text.input.required'),
    price: Yup.string().required('transaction.text.input.required'),
    description: Yup.string()
      .min(10, 'transaction.description.minimum.characters')
      .notRequired(),
  })
  const handleSubmit = (values: ITransaction) => {
    if (
      values.coin &&
      values.amount &&
      values.date &&
      values.currency &&
      values.type &&
      values.price
    ) {
      return setTransaction(previous => [
        ...previous,
        {
          id: String(transaction.length + 1),
          coin: values.coin,
          amount: values.amount,
          date: values.date,
          currency: values.currency,
          type: values.type,
          price: values.price,
          description: values.description ? values.description : '',
          pinOnTop: values.pinOnTop,
        },
      ])
    }
  }

  return (
    <>
      <Formik
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values)
          resetForm()
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
              title={intl.formatMessage({
                id: 'transaction.title',
              })}
            />
            <CardContent>
              <Grid container direction="column" rowGap="10px">
                <Grid item>
                  <CoinSelector
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
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
                  />
                  <Box>
                    {errors.amount && touched.amount ? (
                      <span style={{ color: '#FC4F4F' }}>
                        <FormattedMessage
                          id={errors.amount}
                          defaultMessage="This filed is required"
                        />
                      </span>
                    ) : null}
                  </Box>
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
                  />
                  <Box>
                    {errors.price && touched.price ? (
                      <span style={{ color: '#FC4F4F' }}>
                        <FormattedMessage
                          id={errors.price}
                          defaultMessage="This filed is required"
                        />
                      </span>
                    ) : null}
                  </Box>
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
                  />
                  <Box>
                    {errors.currency && touched.currency ? (
                      <span style={{ color: '#FC4F4F' }}>
                        <FormattedMessage
                          id={errors.currency}
                          defaultMessage="This filed is required"
                        />
                      </span>
                    ) : null}
                  </Box>
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
                    fullWidth
                  />
                  <Box>
                    {errors.date && touched.date ? (
                      <span style={{ color: '#FC4F4F' }}>
                        <FormattedMessage
                          id={errors.date}
                          defaultMessage="This filed is required"
                        />
                      </span>
                    ) : null}
                  </Box>
                </Grid>
                <Grid item>
                  <Typography variant="body1" color="text.secondary">
                    <FormattedMessage
                      id="transaction.type"
                      defaultMessage="Type of transaction"
                    />
                  </Typography>
                  <Stack>
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
                      <Box>
                        {errors.type && touched.type ? (
                          <span style={{ color: '#FC4F4F' }}>
                            <FormattedMessage
                              id={errors.type}
                              defaultMessage="This filed is required"
                            />
                          </span>
                        ) : null}
                      </Box>
                    </ToggleButtonGroup>
                  </Stack>
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
                  <Box>
                    {errors.description && touched.description ? (
                      <span style={{ color: '#FC4F4F' }}>
                        <FormattedMessage
                          id={errors.description}
                          defaultMessage="This filed is required"
                        />
                      </span>
                    ) : null}
                  </Box>
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
              <Button variant="outlined" onClick={() => submitForm()}>
                <FormattedMessage
                  id="generic.label.submit"
                  defaultMessage="Submit"
                />
              </Button>
            </CardActions>
          </Card>
        )}
      </Formik>
    </>
  )
}

export default TransactionsForm
