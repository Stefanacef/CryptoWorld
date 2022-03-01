import '../assets/styles/FeedPage/feed.css'
import PostList from '../components/posts/PostList'
import AddPostForm from '../components/posts/AddPostForm'
import PostContentProvider from '../components/posts/PostContentProvider'

export interface IPost {
  id: number
  content: string
}

function FeedPage() {
  return (
    <div className="feed">
      <h1 className="feed-title">Feed</h1>
      <div className="feed-content-container">
        <PostContentProvider>
          <AddPostForm />
          <PostList />
        </PostContentProvider>
      </div>
    </div>
  )
}

export default FeedPage
