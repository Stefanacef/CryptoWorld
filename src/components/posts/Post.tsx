import '../../assets/styles/Posts/Posts.css'
import { IPost } from './types'
import {
  AiOutlineHeart as EmptyHeart,
  AiFillCloseCircle as Delete,
  AiFillMessage as Comment,
} from 'react-icons/ai'
import Button from '../buttons/Button'
import CommentList from './comments/CommentList'
import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { commentsSelector, postsAtom } from './state'
import { FormattedDate, FormattedTime, useIntl } from 'react-intl'

interface IPostProps {
  post: IPost
}

const Post = ({ post: { id, content, lastEditAt } }: IPostProps) => {
  const setPost = useSetRecoilState(postsAtom)
  const comments = useRecoilValue(commentsSelector(id))
  const intl = useIntl()

  const [commentStatus, setCommentStatus] = useState<boolean>(false)
  const [editComment, setEditComment] = useState<string>('')
  const [editStatus, setEditStatus] = useState<boolean>(false)

  const handleEdit = (id: number) => {
    setPost(previous =>
      previous.map(post =>
        post.id === id
          ? {
              content: editComment,
              id: id,
              lastEditAt: new Date(),
            }
          : {
              content: post.content,
              id: post.id,
              lastEditAt: post.lastEditAt,
            }
      )
    )
  }
  const handleDelete = (id: number) => {
    setPost(previous => previous.filter(post => post.id !== id))
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

        <span className="post-date">
          <span className="post-time">
            <FormattedTime value={lastEditAt} />
          </span>
          <FormattedDate value={lastEditAt} />
        </span>
        <div
          className="post-edit"
          onClick={() => setEditStatus(previous => !previous)}
        >
          {!editStatus ? (
            <Button
              text={intl.formatMessage({ id: 'button.edit' })}
              border="border-edit"
            />
          ) : (
            <div onClick={() => handleEdit(id)}>
              <Button
                text={intl.formatMessage({ id: 'button.save' })}
                border="border-edit"
              />
            </div>
          )}
        </div>
      </div>
      {commentStatus && <CommentList parentId={id} />}
    </div>
  )
}

export default Post
