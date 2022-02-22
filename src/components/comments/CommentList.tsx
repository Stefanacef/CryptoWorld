import { useState } from "react";
import "../../assets/styles/Comments/Comments.css";
import Comment from "./Comment";
import Button from "../buttons/Button";
export interface IComment {
  id: number;
  content: string;
}
interface CommentList {
  setCommentNumber: React.Dispatch<React.SetStateAction<number>>;
}
function CommentList(props: CommentList) {
  const [commentBody, setCommentBody] = useState<string>("");
  const [comments, setComments] = useState<IComment[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComments((previous) => [
      ...previous,
      { content: commentBody, id: Math.floor(Math.random() * 100 + 1) },
    ]);
    props.setCommentNumber(comments.length + 1);
    setCommentBody("");
  };

  return (
    <div className="comments">
      <form onSubmit={handleSubmit}>
        <textarea
          className="comments-textarea"
          placeholder="Leave a comment"
          value={commentBody}
          onChange={(e) => {
            setCommentBody(e.target.value);
          }}
        ></textarea>
        <Button text="Post" border="border-send" />
      </form>
      <div className="comments-list">
        <Comment comments={comments} />
      </div>
    </div>
  );
}

export default CommentList;
