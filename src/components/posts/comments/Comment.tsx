import { IComment } from '../types'
import { AiOutlineStar as CommentIcon } from 'react-icons/ai'

const Comment = (props: { comments: IComment[] }) => {
  return (
    <div>
      {props.comments.map(el => (
        <div className="comment" key={el.id}>
          <CommentIcon className="comment-icon" />
          {el.content}
        </div>
      ))}
    </div>
  )
}

export default Comment
