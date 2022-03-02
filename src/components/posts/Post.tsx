import '../../assets/styles/Posts/Posts.css'
import { IPost } from './PostList'
import {
  AiOutlineHeart as EmptyHeart,
  AiFillCloseCircle as Delete,
  AiFillMessage as Comment,
} from 'react-icons/ai'
import Button from '../buttons/Button'
import CommentList from './comments/CommentList'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import postAtom from './State'

interface IPostProps {
  content: IPost
}

const Post = ({ content }: IPostProps) => {
  const setContentPost = useSetRecoilState(postAtom)

  const [commentStatus, setCommentStatus] = useState<boolean>(false)
  const [date, setDate] = useState<string>('')
  const [dateUpdate, setDateUpdate] = useState<boolean>(false)
  const [commentNumber, setCommentNumber] = useState<number>(0)
  const [editComment, setEditComment] = useState<string>('')
  const [editStatus, setEditStatus] = useState<boolean>(false)

  useEffect(() => {
    const currentDate = new Date()
    const time = currentDate.getHours() + ':' + currentDate.getMinutes()
    setDate(`${time} - ${currentDate.toLocaleDateString()}`)
  }, [dateUpdate])

  const handleEdit = (id: number) => {
    setContentPost(previous =>
      [...previous].map(post =>
        post.id === id
          ? { content: editComment, id: id }
          : { content: post.content, id: post.id }
      )
    )
    setDateUpdate(previous => !previous)
  }
  const handleDelete = (id: number) => {
    setContentPost(previous => [...previous].filter(post => post.id !== id))
  }

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-avatar"> AV</div>
        {!editStatus ? (
          <p> {content.content}</p>
        ) : (
          <textarea
            className="post-textarea"
            defaultValue={content.content}
            onChange={e => {
              setEditComment(e.target.value)
            }}
          ></textarea>
        )}
        <Delete
          onClick={() => handleDelete(content.id)}
          className="post-delete"
        />
      </div>
      <div className="post-interaction">
        <EmptyHeart className="post-like" />
        <div onClick={() => setCommentStatus(previous => !previous)}>
          <span className="post-comments-span">{commentNumber}</span>
          <Comment className="post-comments" />
        </div>

        <span className="post-date">{date}</span>
        <div
          className="post-edit"
          onClick={() => setEditStatus(previous => !previous)}
        >
          {!editStatus ? (
            <Button text="Edit" border="border-edit" />
          ) : (
            <div onClick={() => handleEdit(content.id)}>
              <Button text="Save" border="border-edit" />
            </div>
          )}
        </div>
      </div>
      {commentStatus && (
        <CommentList
          parentId={content.id}
          setCommentNumber={setCommentNumber}
        />
      )}
    </div>
  )
}

export default Post
