import "../../assets/styles/Posts/Posts.css";
import { IPost } from "../../pages/FeedPage";
import {
  AiOutlineHeart as EmptyHeart,
  AiFillCloseCircle as Delete,
} from "react-icons/ai";
import Button from "../buttons/Button";
import { useEffect, useState } from "react";
interface IPostProps {
  setContentPost: React.Dispatch<React.SetStateAction<IPost[]>>;
  content: IPost;
}

function Post(props: IPostProps) {
  const [date, setDate] = useState<string>("");
  useEffect(() => {
    const currentDate = new Date();
    setDate(currentDate.toLocaleDateString());
  }, [date]);
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
      <span className="post-date">{date}</span>
      <div className="post-edit">
        <Button text="Edit" border="border-edit" />
      </div>
    </div>
  );
}

export default Post;
