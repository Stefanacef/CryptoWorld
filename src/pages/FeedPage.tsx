import "../assets/styles/FeedPage/feed.css";
import Post from "../components/posts/Post";
import Textarea from "../components/textarea/Textarea";
import useFetch from "../components/function/useFetch";
interface IPost {
  id: number;
  content: string;
}
function FeedPage() {
  const URL: string = `http://localhost:8000/posts`;
  const { data } = useFetch(URL);
  return (
    <div className="feed">
      <h1 className="feed-title">Feed</h1>
      <Textarea />
      <Post data={data} />
    </div>
  );
}

export default FeedPage;
