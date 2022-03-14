import Post from './Post'
import { useMemo, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { postsAtom } from './state'
import { useRecoilValue } from 'recoil'
import { useIntl } from 'react-intl'
import { TextField, InputAdornment, Box, Grid } from '@mui/material'

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
    <Box mt="30px" textAlign="left">
      <Box>
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
      </Box>
      <Grid container mt="30px" direction="column-reverse" rowGap="16px">
        {filteredPosts.map(post => (
          <Grid item key={post.id}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PostList
