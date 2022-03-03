import '../assets/styles/FeedPage/feed.css'
import PostList from '../components/posts/PostList'
import AddPostForm from '../components/posts/AddPostForm'
import { FormattedMessage } from 'react-intl'

const FeedPage = () => {
  return (
    <div className="feed">
      <h1 className="feed-title">
        <FormattedMessage id="feed.title" defaultMessage="Feed" />
      </h1>
      <div className="feed-content-container">
        <AddPostForm />
        <PostList />
      </div>
    </div>
  )
}

export default FeedPage
