import "../assets/styles/FeedPage/feed.css";
import PostList from "../components/posts/PostList";
import Textarea from "../components/textarea/Textarea";
import { useState, createContext } from "react";
export interface IPost {
  id: number;
  content: string;
}
export interface IPostsContent {
  content: IPost[];
  setContentPost: React.Dispatch<React.SetStateAction<IPost[]>>;
}
export const PostsContent = createContext<IPostsContent>({
  content: [],
  setContentPost: () => {},
});

function FeedPage() {
  const [content, setContentPost] = useState<IPost[]>([]);

  return (
    <div className="feed">
      <h1 className="feed-title">Feed</h1>
      <PostsContent.Provider value={{ content, setContentPost }}>
        <Textarea placeholder="What's on your mind?" />
        <PostList />
      </PostsContent.Provider>
    </div>
  );
}

export default FeedPage;
