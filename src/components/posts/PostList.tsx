import "../../assets/styles/Posts/Posts.css";
import Post from "./Post";
import { IPost } from "../../pages/FeedPage";
interface IPostList {
  setContentPost: React.Dispatch<React.SetStateAction<IPost[]>>;
  content: IPost[];
}
function PostList(props: IPostList) {
  return (
    <div className="post-list">
      {props.content.map((post: IPost) => (
        <Post
          key={post.id}
          setContentPost={props.setContentPost}
          content={post}
        />
      ))}
    </div>
  );
}

export default PostList;
