import { useEffect, useState } from 'react'
import '../../../assets/styles/Comments/Comments.css'
import Comment from './Comment'
import Textarea from '../../textarea/Textarea'
import { useRecoilState } from 'recoil'
import { commentsAtom } from '../state'
import { useIntl } from 'react-intl'

interface ICommentList {
  setCommentNumber: React.Dispatch<React.SetStateAction<number>>
  parentId: number
}

const CommentList = (props: ICommentList) => {
  const [comments, setComments] = useRecoilState(commentsAtom(props.parentId))
  const [textComments, setTextComments] = useState<string>('')
  const { setCommentNumber } = props
  const intl = useIntl()

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
  }, [textComments, setComments])

  return (
    <div className="comments">
      <Textarea
        setContent={setTextComments}
        placeholder={intl.formatMessage({ id: 'comment.textarea.placeholder' })}
      />
      <div className="comments-list">
        <Comment comments={comments} />
      </div>
    </div>
  )
}

export default CommentList
