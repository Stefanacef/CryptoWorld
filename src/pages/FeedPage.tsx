import "../assets/styles/FeedPage/feed.css";
import Post from "../components/posts/Post";
import Textarea from "../components/textarea/Textarea";
import { useEffect, useState } from "react";
interface IPost {
  id: number;
  content: string;
}
function FeedPage() {
  const [data, setData] = useState<IPost[]>([]);
  const URL: string = `http://localhost:8000/posts`;
  useEffect(() => {
    fetch(URL)
      .then((date) => date.json())
      .then(setData)
      .catch((err) => {
        console.error(err);
      });
  }, [URL]);
  return (
    <div className="feed">
      <h1 className="feed-title">Feed</h1>
      <Textarea />
      <Post data={data} />
    </div>
  );
}

export default FeedPage;
