import { useEffect, useState } from 'react'
import Comment from './Comment'
import Textarea from '../../textarea/Textarea'
import { useRecoilState } from 'recoil'
import { commentsAtom } from '../state'
import { useIntl } from 'react-intl'
import { Box } from '@mui/material'

interface ICommentList {
  parentId: number
}

const CommentList = (props: ICommentList) => {
  const [comments, setComments] = useRecoilState(commentsAtom(props.parentId))
  const [textComments, setTextComments] = useState<string>('')
  const intl = useIntl()

  useEffect(() => {
    textComments &&
      setComments(previous => [
        ...previous,
        {
          content: textComments,
          id: previous.length + 1,
        },
      ])
  }, [textComments, setComments])

  return (
    <Box>
      <Textarea
        setContent={setTextComments}
        placeholder={intl.formatMessage({ id: 'comment.textarea.placeholder' })}
      />
      <Comment comments={comments} />
    </Box>
  )
}

export default CommentList
