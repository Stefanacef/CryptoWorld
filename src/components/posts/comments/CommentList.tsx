import { useEffect, useState } from 'react'
import '../../../assets/styles/Comments/Comments.css'
import Comment from './Comment'
import Textarea from '../../textarea/Textarea'

export interface IComment {
  id: number
  content: string
}
interface ICommentList {
  setCommentNumber: React.Dispatch<React.SetStateAction<number>>
}

function CommentList(props: ICommentList) {
  const [comments, setComments] = useState<IComment[]>([])
  const [textComments, setTextComments] = useState<string>('')
  const { setCommentNumber } = props

  useEffect(
    () => setCommentNumber(comments.length),
    [comments, setCommentNumber]
  )
  useEffect(() => {
    textComments &&
      setComments(previous => [
        ...previous,
        { content: textComments, id: Math.floor(Math.random() * 100 + 1) },
      ])
  }, [textComments])

  return (
    <div className="comments">
      <Textarea setContent={setTextComments} placeholder="Leave a comment..." />
      <div className="comments-list">
        <Comment comments={comments} />
      </div>
    </div>
  )
}

export default CommentList
