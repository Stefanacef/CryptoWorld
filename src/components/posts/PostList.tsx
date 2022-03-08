import '../../assets/styles/Posts/Posts.css'
import Post from './Post'
import { useMemo, useState } from 'react'
import { AiOutlineSearch as Search } from 'react-icons/ai'
import { postsAtom } from './state'
import { useRecoilValue } from 'recoil'
import { useIntl } from 'react-intl'

const PostList = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const posts = useRecoilValue(postsAtom)
  const intl = useIntl()

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const display =
        searchValue === '' ||
        post.content
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      return display
    })
  }, [searchValue, posts])

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
      {filteredPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
