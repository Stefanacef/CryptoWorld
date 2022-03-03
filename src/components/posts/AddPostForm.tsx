import { useCallback } from 'react'
import Textarea from '../textarea/Textarea'
import { useSetRecoilState } from 'recoil'
import { postAtom } from './state'
import { useIntl } from 'react-intl'

const AddPostForm = () => {
  const setContentPost = useSetRecoilState(postAtom)
  const intl = useIntl()

  const addPost = useCallback(
    textContent => {
      setContentPost(previous => [
        ...previous,
        { content: textContent, id: Math.floor(Math.random() * 100 + 1) },
      ])
    },
    [setContentPost]
  )

  return (
    <Textarea
      setContent={addPost}
      placeholder={intl.formatMessage({ id: 'feed.textarea.placeholder' })}
    />
  )
}

export default AddPostForm
