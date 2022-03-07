import { useCallback } from 'react'
import Textarea from '../textarea/Textarea'
import { useSetRecoilState } from 'recoil'
import { postsAtom } from './state'
import { FormattedDate, useIntl } from 'react-intl'

const AddPostForm = () => {
  const setContentPost = useSetRecoilState(postsAtom)
  const intl = useIntl()

  const addPost = useCallback(
    textContent => {
      setContentPost(previous => [
        ...previous,
        {
          content: textContent,
          id: Math.floor(Math.random() * 100 + 1),
          lastEditAt: new Date(),
        },
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
