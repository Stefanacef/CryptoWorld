import "../../assets/styles/Posts/Posts.css";
import { IPost } from "../../pages/FeedPage";
import {
  AiOutlineHeart as EmptyHeart,
  AiFillCloseCircle as Delete,
} from "react-icons/ai";
interface IPostProps {
  setContentPost: React.Dispatch<React.SetStateAction<IPost[]>>;
  content: IPost;
}

function Post(props: IPostProps) {
  const handelDelete = (id: number) => {
    props.setContentPost((previous) =>
      [...previous].filter((post) => post.id !== id)
    );
  };

  return (
    <div className="post">
      <div className="post-avatar"> AV</div>
      {props.content.content}
      <EmptyHeart className="post-like" />
      <Delete
        onClick={() => handelDelete(props.content.id)}
        className="post-delete"
      />
    </div>
  );
}

export default Post;
