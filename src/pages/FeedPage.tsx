import '../assets/styles/FeedPage/feed.css'
import PostList from '../components/posts/PostList'
import AddPostForm from '../components/posts/AddPostForm'
import { FormattedMessage } from 'react-intl'
import { Typography } from '@mui/material'
const FeedPage = () => {
  return (
    <>
      <Typography variant="h2" color="text.secondary" margin="100px 0">
        <FormattedMessage id="feed.page.title" defaultMessage="Feed" />
      </Typography>
      <AddPostForm />
      <PostList />
    </>
  )
}

export default FeedPage
