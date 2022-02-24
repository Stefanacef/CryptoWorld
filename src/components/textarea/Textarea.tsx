import Button from "../buttons/Button";
import "../../assets/styles/Textarea/Textarea.css";
import React, { useState, useContext } from "react";
import { IPost } from "../../pages/FeedPage";
import { PostsContent } from "../../pages/FeedPage";
export interface ITextarea {
  setContent?: React.Dispatch<React.SetStateAction<IPost[]>>;
  placeholder?: string;
}
function Textarea(props: ITextarea) {
  const { setContentPost } = useContext(PostsContent);
  const [contentTextarea, setContentTextarea] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContentPost((previous) => [
      ...previous,
      { content: contentTextarea, id: Math.floor(Math.random() * 100 + 1) },
    ]);

    setContentTextarea("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-textarea"
          required
          value={contentTextarea}
          placeholder={props.placeholder}
          onChange={(e) => {
            setContentTextarea(e.target.value);
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
