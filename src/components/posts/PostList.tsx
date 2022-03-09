import Post from './Post'
import { useMemo, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { postsAtom } from './state'
import { useRecoilValue } from 'recoil'
import { useIntl } from 'react-intl'
import { TextField, InputAdornment, Grid } from '@mui/material'

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
    <Grid container direction="column" px="10%" marginTop="50px">
      <Grid item alignSelf="flex-start">
        <TextField
          size="small"
          type="search"
          label={intl.formatMessage({ id: 'feed.search.placeholder' })}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
        />
      </Grid>
      <Grid item container rowGap={4} justifyContent="center" marginTop={5}>
        {filteredPosts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Grid>
    </Grid>
  )
}

export default PostList
