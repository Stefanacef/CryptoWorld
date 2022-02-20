import "../../assets/styles/Posts/Posts.css";
import {
  AiFillHeart as Heart,
  AiOutlineHeart as EmptyHeart,
  AiFillCloseCircle as Delete,
} from "react-icons/ai";

interface IPost {
  id: number;
  content: string;
}
function Post(props: { data: IPost[] }) {
  const handelDelete = (id: string) => {
    fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    });
  };
  return (
    <div className="post-list">
      {props.data.map((post: IPost) => (
        <div key={post.id} className="post">
          <div className="post-avatar"> AV</div>
          {post.content}
          <EmptyHeart className="post-like" />
          <Delete
            onClick={() => handelDelete(post.id.toString())}
            className="post-delete"
          />
        </div>
      ))}
    </div>
  );
}

export default Post;
