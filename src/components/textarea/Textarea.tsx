import Button from '../buttons/Button'
import '../../assets/styles/Textarea/Textarea.css'
import React, { useState } from 'react'
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
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-textarea"
          required
          value={content}
          placeholder={props.placeholder}
          onChange={e => {
            setContent(e.target.value)
          }}
        ></textarea>
        <div className="form-btn">
          {' '}
          <Button text="Post" border="border-send" />
        </div>
      </form>
    </div>
  )
}

export default Textarea
