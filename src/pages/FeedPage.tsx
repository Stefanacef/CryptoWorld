import PostList from '../components/posts/PostList'
import AddPostForm from '../components/posts/AddPostForm'
import { FormattedMessage } from 'react-intl'
import { Box, Typography } from '@mui/material'
const FeedPage = () => {
  return (
    <Box m="30px">
      <Box mb="30px" textAlign="left">
        <Typography variant="h2" color="text.secondary">
          <FormattedMessage id="feed.page.title" defaultMessage="Feed" />
        </Typography>
      </Box>
      <Box textAlign="left">
        <AddPostForm />
      </Box>
      <PostList />
    </Box>
  )
}

export default FeedPage
