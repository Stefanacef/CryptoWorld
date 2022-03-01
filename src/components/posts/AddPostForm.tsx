import { useContext, useEffect, useState } from 'react'
import { PostsContent } from './PostContentProvider'
import Textarea from '../textarea/Textarea'

export default function AddPostForm() {
  const { setContentPost } = useContext(PostsContent)
  const [textContent, setTextContent] = useState<string>('')

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
