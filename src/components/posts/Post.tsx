import '../../assets/styles/Posts/Posts.css'
import { IPost } from './types'
import {
  AiOutlineHeart as EmptyHeart,
  AiFillCloseCircle as Delete,
  AiFillMessage as Comment,
} from 'react-icons/ai'
import Button from '../buttons/Button'
import CommentList from './comments/CommentList'
import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { commentsSelector, postAtom } from './state'

interface IPostProps {
  post: IPost
}

const Post = ({ post: { id, content } }: IPostProps) => {
  const setContentPost = useSetRecoilState(postAtom)
  const comments = useRecoilValue(commentsSelector(id))

  const [commentStatus, setCommentStatus] = useState<boolean>(false)
  const [date, setDate] = useState<string>('')
  const [dateUpdate, setDateUpdate] = useState<boolean>(false)
  const [editComment, setEditComment] = useState<string>('')
  const [editStatus, setEditStatus] = useState<boolean>(false)

  useEffect(() => {
    const currentDate = new Date()
    const time = currentDate.getHours() + ':' + currentDate.getMinutes()
    setDate(`${time} - ${currentDate.toLocaleDateString()}`)
  }, [dateUpdate])

  const handleEdit = (id: number) => {
    setContentPost(previous =>
      previous.map(post =>
        post.id === id
          ? { content: editComment, id: id }
          : { content: post.content, id: post.id }
      )
    )
    setDateUpdate(previous => !previous)
  }
  const handleDelete = (id: number) => {
    setContentPost(previous => previous.filter(post => post.id !== id))
  }

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-avatar"> AV</div>
        {!editStatus ? (
          <p> {content}</p>
        ) : (
          <textarea
            className="post-textarea"
            defaultValue={content}
            onChange={e => {
              setEditComment(e.target.value)
            }}
          ></textarea>
        )}
        <Delete onClick={() => handleDelete(id)} className="post-delete" />
      </div>
      <div className="post-interaction">
        <EmptyHeart className="post-like" />
        <div onClick={() => setCommentStatus(previous => !previous)}>
          <span className="post-comments-span">
            {comments.length.toString()}
          </span>
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
            <div onClick={() => handleEdit(id)}>
              <Button text="Save" border="border-edit" />
            </div>
          )}
        </div>
      </div>
      {commentStatus && <CommentList parentId={id} />}
    </div>
  )
}

export default Post
