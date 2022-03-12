import { IComment } from '../types'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Grid } from '@mui/material'

const Comment = (props: { comments: IComment[] }) => {
  return (
    <Grid container direction="column-reverse" rowGap="8px" mt="15px">
      {props.comments.map(el => (
        <Grid item key={el.id} borderBottom="1px solid #e87a60">
          <StarBorderIcon />
          {el.content}
        </Grid>
      ))}
    </Grid>
  )
}

export default Comment
