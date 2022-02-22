import "../../assets/styles/Posts/Posts.css";
import Post from "./Post";
import { IPost } from "../../pages/FeedPage";
import { useState } from "react";
import { AiOutlineSearch as Search } from "react-icons/ai";
interface IPostList {
  setContentPost: React.Dispatch<React.SetStateAction<IPost[]>>;
  content: IPost[];
}
function PostList(props: IPostList) {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="post-list">
      <div className="post-list-container">
        <Search className="post-list-search-icon" />
        <input
          className="post-list-search"
          type="text"
          placeholder=" Search..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
        />
      </div>
      {props.content
        .filter((post) => {
          if (searchValue === "") return post;
          else if (
            post.content
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          ) {
            return post;
          }
        })
        .map((post) => (
          <Post
            key={post.id}
            setContentPost={props.setContentPost}
            content={post}
          />
        ))}
    </div>
  );
}

export default PostList;
