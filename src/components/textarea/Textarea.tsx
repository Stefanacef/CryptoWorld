import Button from "../buttons/Button";
import "../../assets/styles/Textarea/Textarea.css";
import React, { useState } from "react";
function Textarea() {
  const [content, setContent] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const post: {} = { content };
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      console.log("new post adit");
    });
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
