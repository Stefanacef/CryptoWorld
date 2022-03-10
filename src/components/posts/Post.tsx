import '../../assets/styles/Posts/Posts.css'
import { IPost } from './types'
import CommentList from './comments/CommentList'
import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { commentsSelector, postsAtom } from './state'
import { FormattedMessage, useIntl } from 'react-intl'
import {
  Box,
  TextareaAutosize,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  Button,
  Tooltip,
} from '@mui/material'

import { Clear, Favorite, Message } from '@mui/icons-material'

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
    <>
      <Card sx={{ width: '100%' }}>
        <CardHeader
          avatar={<Avatar aria-label="avatar">AV</Avatar>}
          action={
            <Tooltip title="Delete" arrow>
              <IconButton aria-label="delete" onClick={() => handleDelete(id)}>
                <Clear />
              </IconButton>
            </Tooltip>
          }
          subheader={`${intl.formatTime(lastEditAt)} ${intl.formatDate(
            lastEditAt
          )}`}
        />
        <CardContent>
          {!editStatus ? (
            <Typography variant="body2" color="text.secondary">
              {content}
            </Typography>
          ) : (
            <TextareaAutosize
              maxRows={4}
              defaultValue={content}
              style={{ width: 200, height: 50 }}
              onChange={e => {
                setEditComment(e.target.value)
              }}
            />
          )}
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="Like" arrow>
            <IconButton aria-label="like">
              <Favorite />
            </IconButton>
          </Tooltip>
          <Tooltip title=" Add Comment" arrow>
            <IconButton aria-label="comment">
              <Message
                onClick={() => setCommentStatus(previous => !previous)}
              />
              <span className="post-comments-span">
                {comments.length.toString()}
              </span>
            </IconButton>
          </Tooltip>

          <Box onClick={() => setEditStatus(previous => !previous)}>
            {!editStatus ? (
              <Button variant="outlined">
                <FormattedMessage id="button.edit" defaultMessage="Edit" />
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="success"
                onClick={() => handleEdit(id)}
              >
                <FormattedMessage id="button.save" defaultMessage="Save" />
              </Button>
            )}
          </Box>
        </CardActions>
      </Card>
      {commentStatus && <CommentList parentId={id} />}
    </>
  )
}

export default Post
