import "../../assets/styles/Posts/Posts.css";
import { IPost } from "../../pages/FeedPage";
import {
  AiOutlineHeart as EmptyHeart,
  AiFillCloseCircle as Delete,
  AiFillMessage as Comment,
} from "react-icons/ai";
import Button from "../buttons/Button";
import CommentList from "../comments/CommentList";
import { useEffect, useState } from "react";
interface IPostProps {
  setContentPost: React.Dispatch<React.SetStateAction<IPost[]>>;
  content: IPost;
}

function Post(props: IPostProps) {
  const [comment, setComment] = useState<boolean>(false);
  const [commentNumber, setCommentNumber] = useState<number>(0);

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
      <div className="post-header">
        <div className="post-avatar"> AV</div>
        {props.content.content}
        <Delete
          onClick={() => handelDelete(props.content.id)}
          className="post-delete"
        />
      </div>
      <div className="post-interaction">
        <EmptyHeart className="post-like" />
        <div onClick={() => setComment((previous) => !previous)}>
          <span className="post-comments-span">{commentNumber}</span>
          <Comment className="post-comments" />
        </div>

        <span className="post-date">{date}</span>
        <div className="post-edit">
          <Button text="Edit" border="border-edit" />
        </div>
      </div>

      {comment && <CommentList setCommentNumber={setCommentNumber} />}
    </div>
  );
}

export default Post;
