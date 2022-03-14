import { useMemo } from 'react'
import { IUser } from './types'
import { useSetRecoilState } from 'recoil'
import { usersAtom } from './state'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  Button,
  CardActions,
  Grid,
} from '@mui/material'
import { Box } from '@mui/system'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { FormattedMessage, useIntl } from 'react-intl'

const SignUpCard = () => {
  const setUser = useSetRecoilState(usersAtom)
  const intl = useIntl()

  const initialValue = useMemo<IUser>(
    () => ({ email: '', password: '', firstName: '', lastName: '' }),
    []
  )
  const validationSchema = Yup.object({
    firstName: Yup.string().required('signUp.firstName.required'),
    lastName: Yup.string().required('signUp.lastName.required'),
    email: Yup.string()
      .email('signUp.email.valid')
      .required('signUp.email.required'),
    password: Yup.string()
      .min(8, 'signUp.password.minimum.characters')
      .required('signUp.password.required'),
  })

  const handleSubmit = (values: IUser) => {
    if (
      values.email &&
      values.password &&
      values.firstName &&
      values.lastName
    ) {
      setUser(previous => [
        ...previous,
        {
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
        },
      ])
    }
  }
  return (
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
              id: 'signUp.title',
            })}
          />
          <CardContent>
            <Grid container direction="column" rowGap="30px">
              <Grid item>
                <TextField
                  id="lastName"
                  name="lastName"
                  label={intl.formatMessage({
                    id: 'signUp.last.name.label',
                  })}
                  type="text"
                  variant="filled"
                  fullWidth
                  value={values.lastName}
                  onChange={e => {
                    setFieldValue('lastName', e.target.value)
                  }}
                />
                <Box>
                  {errors.lastName && touched.lastName ? (
                    <span style={{ color: '#FC4F4F' }}>
                      <FormattedMessage
                        id={errors.lastName}
                        defaultMessage="This filed is required"
                      />
                    </span>
                  ) : null}
                </Box>
              </Grid>
              <Grid item>
                <TextField
                  id="firstName"
                  name="firstName"
                  label={intl.formatMessage({
                    id: 'signUp.first.name.label',
                  })}
                  type="text"
                  variant="filled"
                  fullWidth
                  value={values.firstName}
                  onChange={e => {
                    setFieldValue('firstName', e.target.value)
                  }}
                />
                <Box>
                  {errors.firstName && touched.firstName ? (
                    <span style={{ color: '#FC4F4F' }}>
                      <FormattedMessage
                        id={errors.firstName}
                        defaultMessage="This filed is required"
                      />
                    </span>
                  ) : null}
                </Box>
              </Grid>

              <Grid item>
                <TextField
                  id="email"
                  name="email"
                  label={intl.formatMessage({
                    id: 'signUp.email.label',
                  })}
                  variant="filled"
                  fullWidth
                  value={values.email}
                  onChange={e => {
                    setFieldValue('email', e.target.value)
                  }}
                />
                <Box>
                  {errors.email && touched.email ? (
                    <span style={{ color: '#FC4F4F' }}>
                      <FormattedMessage
                        id={errors.email}
                        defaultMessage="This filed is required"
                      />
                    </span>
                  ) : null}
                </Box>
              </Grid>
              <Grid item>
                <TextField
                  id="password"
                  name="password"
                  label={intl.formatMessage({
                    id: 'signUp.password.label',
                  })}
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                  fullWidth
                  value={values.password}
                  onChange={e => {
                    setFieldValue('password', e.target.value)
                  }}
                />
                <Box>
                  {errors.password && touched.password ? (
                    <span style={{ color: '#FC4F4F' }}>
                      <FormattedMessage
                        id={errors.password}
                        defaultMessage="This filed is required"
                      />
                    </span>
                  ) : null}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ paddingLeft: '16px', marginTop: '15px' }}
          >
            <Button variant="outlined" onClick={() => submitForm()}>
              <FormattedMessage
                id="signUp.button.create"
                defaultMessage="Create"
              />
            </Button>
          </CardActions>
          <Typography variant="body2" color="text.secondary"></Typography>
        </Card>
      )}
    </Formik>
  )
}

export default SignUpCard
