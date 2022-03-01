import { IComment } from './CommentList'
import { AiOutlineStar as CommentIcon } from 'react-icons/ai'
function Comment(props: { comments: IComment[] }) {
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
