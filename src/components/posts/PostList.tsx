import '../../assets/styles/Posts/Posts.css'
import Post from './Post'
import { useState } from 'react'
import { AiOutlineSearch as Search } from 'react-icons/ai'
import postAtom from './state'
import { useRecoilValue } from 'recoil'

const PostList = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const contentPost = useRecoilValue(postAtom)

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
      {contentPost
        .filter(post => {
          const display = false
          if (
            searchValue === '' ||
            post.content
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
          ) {
            return post
          }
          return display
        })
        .map(post => (
          <Post key={post.id} content={post} />
        ))}
    </div>
  )
}

export default PostList
