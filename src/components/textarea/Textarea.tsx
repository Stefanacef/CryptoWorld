import React, { useMemo, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { TextareaAutosize, Button, Box, Grid } from '@mui/material'
import { Formik } from 'formik'
import { IPost } from '../posts/types'
import * as Yup from 'yup'

export interface ITextarea {
  setContent: React.Dispatch<React.SetStateAction<string>>
  placeholder?: string
}

function Textarea(props: ITextarea) {
  const [count, setCount] = useState(0)
  const initialValue = useMemo<Partial<IPost>>(() => ({ content: '' }), [])

  const validationSchema = Yup.object({
    content: Yup.string()
      .min(3, 'feed.textarea.toShort')
      .max(100, 'feed.textarea.toLong')
      .required('feed.textarea.required'),
  })

  const handleSubmit = (values: Partial<IPost>) => {
    values.content && props.setContent(values.content)
  }

  const getTranslate = (message: string) => {
    return (
      <FormattedMessage
        id={message}
        defaultMessage="Message need to be between 3 and 100 characters"
      />
    )
  }

  return (
    <Formik
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values)
        resetForm()
        setCount(0)
      }}
      initialValues={initialValue}
      validationSchema={validationSchema}
    >
      {({ values, setFieldValue, submitForm, errors, touched }) => (
        <Box>
          <TextareaAutosize
            maxRows={4}
            value={values.content}
            style={{ width: ' 100%', height: 100, padding: 20 }}
            onChange={e => {
              setFieldValue('content', e.target.value)
              setCount(e.target.value.length)
            }}
            placeholder={props.placeholder}
          />
          <Grid container justifyContent="space-between">
            <Grid item>
              {errors.content && touched.content ? (
                <span style={{ color: '#FC4F4F' }}>
                  {getTranslate(errors.content)}
                </span>
              ) : null}
            </Grid>
            <Grid item color="lightgrey">
              {count}/100
            </Grid>
          </Grid>
          <Box mt="15px">
            <Button variant="outlined" onClick={() => submitForm()}>
              <FormattedMessage id="button.post" defaultMessage="Save" />
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  )
}

export default Textarea
