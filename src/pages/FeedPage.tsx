import '../assets/styles/FeedPage/feed.css'
import PostList from '../components/posts/PostList'
import Textarea from '../components/textarea/Textarea'
import { useState, createContext, useEffect } from 'react'

export interface IPost {
  id: number
  content: string
}
export interface IPostsContent {
  content: IPost[]
  setContentPost: React.Dispatch<React.SetStateAction<IPost[]>>
}
export const PostsContent = createContext<IPostsContent>({
  content: [],
  setContentPost: () => {},
})

function FeedPage() {
  const [content, setContentPost] = useState<IPost[]>([])
  const [textContent, setTextContent] = useState<string>('')

  useEffect(() => {
    textContent &&
      setContentPost(previous => [
        ...previous,
        { content: textContent, id: Math.floor(Math.random() * 100 + 1) },
      ])
  }, [textContent])

  return (
    <div className="feed">
      <h1 className="feed-title">Feed</h1>
      <div className="feed-content-container">
        <Textarea
          setContent={setTextContent}
          placeholder="What's on your mind?"
        />
        <PostsContent.Provider value={{ content, setContentPost }}>
          <PostList />
        </PostsContent.Provider>
      </div>
    </div>
  )
}

export default FeedPage
