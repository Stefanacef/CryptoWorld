import Button from "../buttons/Button";
import "../../assets/styles/Textarea/Textarea.css";
import React, { useState } from "react";
import { IPost } from "../../pages/FeedPage";
export interface ITextarea {
  setContentPost?: React.Dispatch<React.SetStateAction<IPost[]>>;
}
function Textarea(props: ITextarea) {
  const [content, setContent] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (props.setContentPost) {
      props.setContentPost((previous) => [
        ...previous,
        { content: content, id: Math.floor(Math.random() * 100 + 1) },
      ]);
    }
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-textarea"
          required
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <div className="form-btn">
          {" "}
          <Button text="Post" border="border-send" />
        </div>
      </form>
    </div>
  );
}

export default Textarea;
