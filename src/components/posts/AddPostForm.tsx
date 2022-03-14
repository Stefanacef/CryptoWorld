import { useCallback } from 'react'
import Textarea from '../textarea/Textarea'
import { useSetRecoilState } from 'recoil'
import { postsAtom } from './state'
import { useIntl } from 'react-intl'

const AddPostForm = () => {
  const setContentPost = useSetRecoilState(postsAtom)
  const intl = useIntl()

  const addPost = useCallback(
    textContent => {
      setContentPost(previous => [
        ...previous,
        {
          content: textContent,
          id: previous.length + 1,
          addedAt: new Date(),
          lastEditAt: new Date(),
          like: false,
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
