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
  Divider,
} from '@mui/material'

import { Clear, Favorite, Message } from '@mui/icons-material'

interface IPostProps {
  post: IPost
}

const Post = ({
  post: { id, content, lastEditAt, addedAt, like },
}: IPostProps) => {
  const setPost = useSetRecoilState(postsAtom)
  const comments = useRecoilValue(commentsSelector(id))
  const intl = useIntl()

  const [commentStatus, setCommentStatus] = useState<boolean>(false)
  const [editContent, setEditContent] = useState<string>('')
  const [editStatus, setEditStatus] = useState<boolean>(false)
  const [edited, setEdited] = useState<boolean>(false)

  const handleEdit = (id: number) => {
    setEdited(true)
    setPost(previous =>
      previous.map(post =>
        post.id === id
          ? {
              ...post,
              content: !editContent ? content : editContent,
              lastEditAt: new Date(),
            }
          : post
      )
    )
  }

  const handleDelete = (id: number) => {
    setPost(previous => previous.filter(post => post.id !== id))
  }

  const handleLiked = (id: number) => {
    setPost(previous =>
      previous.map(post =>
        post.id === id
          ? {
              ...post,
              like: !like,
            }
          : post
      )
    )
  }

  return (
    <>
      <Card sx={{ width: '100%', paddingBottom: '8px' }}>
        <CardHeader
          avatar={<Avatar aria-label="avatar">AV</Avatar>}
          action={
            <Tooltip
              title={intl.formatMessage({ id: 'generic.label.delete' })}
              arrow
            >
              <IconButton aria-label="delete" onClick={() => handleDelete(id)}>
                <Clear />
              </IconButton>
            </Tooltip>
          }
          subheader={
            !edited
              ? `${intl.formatTime(addedAt)} ${intl.formatDate(addedAt)}`
              : `${intl.formatTime(lastEditAt)} ${intl.formatDate(
                  lastEditAt
                )} ${intl.formatMessage({ id: 'generic.label.edit' })} `
          }
        />
        <Box px="5px">
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
                  setEditContent(e.target.value)
                }}
              />
            )}
          </CardContent>
        </Box>
        <CardActions disableSpacing>
          <Tooltip
            title={intl.formatMessage({ id: 'generic.label.like' })}
            arrow
          >
            <IconButton aria-label="like" onClick={() => handleLiked(id)}>
              <Favorite sx={{ color: `${like && '#FC4F4F'} ` }} />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={intl.formatMessage({ id: 'generic.label.comment' })}
            arrow
          >
            <IconButton
              aria-label="comment"
              onClick={() => setCommentStatus(previous => !previous)}
            >
              <Message />
              <span className="post-comments-span">
                {comments.length.toString()}
              </span>
            </IconButton>
          </Tooltip>

          <Box onClick={() => setEditStatus(previous => !previous)}>
            {!editStatus ? (
              <Button variant="outlined">
                <FormattedMessage
                  id="generic.label.edit"
                  defaultMessage="Edit"
                />
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="success"
                onClick={() => handleEdit(id)}
              >
                <FormattedMessage
                  id="generic.label.save"
                  defaultMessage="Save"
                />
              </Button>
            )}
          </Box>
        </CardActions>
        <Box px="16px">
          {commentStatus && (
            <>
              <Box mb="16px">
                <Divider />
              </Box>
              <CommentList parentId={id} />
            </>
          )}
        </Box>
      </Card>
    </>
  )
}

export default Post
