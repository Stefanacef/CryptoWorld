import '../../assets/styles/Posts/Posts.css'
import Post from './Post'
import { useState, useContext } from 'react'
import { AiOutlineSearch as Search } from 'react-icons/ai'
import { PostsContent } from '../../pages/FeedPage'
function PostList() {
  const [searchValue, setSearchValue] = useState<string>('')
  const { content } = useContext(PostsContent)

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
      {content
        .filter(post => {
          if (searchValue === '') return post
          else if (
            post.content
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          ) {
            return post
          }
          return
        })
        .map(post => (
          <Post key={post.id} content={post} />
        ))}
    </div>
  )
}

export default PostList
