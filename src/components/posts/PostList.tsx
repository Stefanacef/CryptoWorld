import '../../assets/styles/Posts/Posts.css'
import Post from './Post'
import { useMemo, useState } from 'react'
import { AiOutlineSearch as Search } from 'react-icons/ai'
import { postAtom } from './state'
import { useRecoilValue } from 'recoil'
import { useIntl } from 'react-intl'

const PostList = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const contentPost = useRecoilValue(postAtom)
  const intl = useIntl()

  const filterPosts = useMemo(() => {
    return contentPost.filter(post => {
      const display =
        searchValue === '' ||
        post.content
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      return display
    })
  }, [searchValue, contentPost])

  return (
    <div className="post-list">
      <div className="post-list-container">
        <Search className="post-list-search-icon" />
        <input
          className="post-list-search"
          type="text"
          placeholder={intl.formatMessage({ id: 'feed.search.placeholder' })}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
        />
      </div>
      {filterPosts.map(post => (
        <Post key={post.id} content={post} />
      ))}
    </div>
  )
}

export default PostList
