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
  const [commentStatus, setCommentStatus] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");
  const [commentNumber, setCommentNumber] = useState<number>(0);
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [editComment, setEditComment] = useState<string>("");

  useEffect(() => {
    const currentDate = new Date();
    setDate(currentDate.toLocaleDateString());
  }, [date]);

  const handleDelete = (id: number) => {
    props.setContentPost((previous) =>
      [...previous].filter((post) => post.id !== id)
    );
  };

  const handleEdit = (id: number) => {
    props.setContentPost((previous) =>
      [...previous].filter((post) =>
        post.id === id ? (post.content = editComment) : post.content
      )
    );
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-avatar"> AV</div>
        {!editStatus ? (
          <p> {props.content.content}</p>
        ) : (
          <textarea
            className="post-textarea"
            defaultValue={props.content.content}
            onChange={(e) => {
              setEditComment(e.target.value);
            }}
          ></textarea>
        )}
        <Delete
          onClick={() => handleDelete(props.content.id)}
          className="post-delete"
        />
      </div>
      <div className="post-interaction">
        <EmptyHeart className="post-like" />
        <div onClick={() => setCommentStatus((previous) => !previous)}>
          <span className="post-comments-span">{commentNumber}</span>
          <Comment className="post-comments" />
        </div>

        <span className="post-date">{date}</span>
        <div
          className="post-edit"
          onClick={() => setEditStatus((previous) => !previous)}
        >
          {!editStatus ? (
            <Button text="Edit" border="border-edit" />
          ) : (
            <div onClick={() => handleEdit(props.content.id)}>
              <Button text="Save" border="border-edit" />
            </div>
          )}
        </div>
      </div>
      {commentStatus && <CommentList setCommentNumber={setCommentNumber} />}
    </div>
  );
}

export default Post;
