import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { TextareaAutosize, Button, Box } from '@mui/material'

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
      <Box>
        <TextareaAutosize
          maxRows={4}
          value={content}
          style={{ width: ' 100%', height: 100, padding: 20 }}
          onChange={e => {
            setContent(e.target.value)
          }}
          placeholder={props.placeholder}
        />
      </Box>
      <Box mt="15px">
        <Button variant="outlined" type="submit">
          <FormattedMessage id="button.post" defaultMessage="Save" />
        </Button>
      </Box>
    </form>
  )
}

export default Textarea
