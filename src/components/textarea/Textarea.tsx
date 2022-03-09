import '../../assets/styles/Textarea/Textarea.css'
import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Grid, TextareaAutosize, Button } from '@mui/material'

export interface ITextarea {
  setContent: React.Dispatch<React.SetStateAction<string>>
  placeholder?: string
}

function Textarea(props: ITextarea) {
  const [content, setContent] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    props.setContent(content)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" px="10%" rowGap={2}>
        <Grid item>
          <TextareaAutosize
            maxRows={4}
            value={content}
            style={{ width: ' 100%', height: 100, padding: 20 }}
            onChange={e => {
              setContent(e.target.value)
            }}
            placeholder={props.placeholder}
          />
        </Grid>
        <Grid item alignSelf="flex-start">
          <Button variant="outlined" type="submit">
            <FormattedMessage id="button.post" defaultMessage="Save" />
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Textarea
