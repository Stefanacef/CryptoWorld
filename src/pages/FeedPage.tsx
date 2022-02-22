import "../assets/styles/FeedPage/feed.css";
import PostList from "../components/posts/PostList";
import Textarea from "../components/textarea/Textarea";
import { useState } from "react";
export interface IPost {
  id: number;
  content: string;
}
function FeedPage() {
  const [content, setContentPost] = useState<IPost[]>([]);

  return (
    <div className="feed">
      <h1 className="feed-title">Feed</h1>
      <Textarea setContentPost={setContentPost} />
      <PostList content={content} setContentPost={setContentPost} />
    </div>
  );
}

export default FeedPage;
