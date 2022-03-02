import { useCallback } from 'react'
import Textarea from '../textarea/Textarea'
import { useSetRecoilState } from 'recoil'
import { postAtom } from './state'

const AddPostForm = () => {
  const setContentPost = useSetRecoilState(postAtom)

  const addPost = useCallback(
    textContent => {
      setContentPost(previous => [
        ...previous,
        { content: textContent, id: Math.floor(Math.random() * 100 + 1) },
      ])
    },
    [setContentPost]
  )

  return <Textarea setContent={addPost} placeholder="What's on your mind?" />
}

export default AddPostForm
