import { useEffect, useState } from 'react'
import '../../../assets/styles/Comments/Comments.css'
import Comment from './Comment'
import Textarea from '../../textarea/Textarea'
import { useRecoilState } from 'recoil'
import { commentAtom } from '../State'

export interface IComment {
  id: number
  content: string
}

interface ICommentList {
  setCommentNumber: React.Dispatch<React.SetStateAction<number>>
  parentId: number
}

function CommentList(props: ICommentList) {
  const [comments, setContentComment] = useRecoilState(
    commentAtom(props.parentId)
  )
  const [textComments, setTextComments] = useState<string>('')
  const { setCommentNumber } = props

  useEffect(
    () => setCommentNumber(comments.length),
    [comments, setCommentNumber]
  )
  useEffect(() => {
    textComments &&
      setContentComment(previous => [
        ...previous,
        { content: textComments, id: Math.floor(Math.random() * 100 + 1) },
      ])
  }, [textComments, setContentComment])

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
