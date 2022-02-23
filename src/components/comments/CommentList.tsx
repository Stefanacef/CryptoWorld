import { useEffect, useState } from "react";
import "../../assets/styles/Comments/Comments.css";
import Comment from "./Comment";
import Textarea from "../textarea/Textarea";
export interface IComment {
  id: number;
  content: string;
}
interface ICommentList {
  setCommentNumber: React.Dispatch<React.SetStateAction<number>>;
}
function CommentList(props: ICommentList) {
  const [comments, setComments] = useState<IComment[]>([]);
  useEffect(() => props.setCommentNumber(comments.length), [comments]);

  return (
    <div className="comments">
      <Textarea setContent={setComments} placeholder="Leave a comment..." />
      <div className="comments-list">
        <Comment comments={comments} />
      </div>
    </div>
  );
}

export default CommentList;
