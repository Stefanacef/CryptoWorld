import { useEffect, useState } from 'react'
import Textarea from '../textarea/Textarea'
import { useSetRecoilState } from 'recoil'
import postAtom from './State'

const AddPostForm = () => {
  const [textContent, setTextContent] = useState<string>('')
  const setContentPost = useSetRecoilState(postAtom)

  useEffect(() => {
    textContent &&
      setContentPost(previous => [
        ...previous,
        { content: textContent, id: Math.floor(Math.random() * 100 + 1) },
      ])
  }, [textContent, setContentPost])

  return (
    <Textarea setContent={setTextContent} placeholder="What's on your mind?" />
  )
}

export default AddPostForm
