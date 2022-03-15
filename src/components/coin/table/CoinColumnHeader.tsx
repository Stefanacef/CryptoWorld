import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { IFirstColumn } from './types'

const CoinColumnHeader = (props: IFirstColumn) => {
  return (
    <Link to={props.path} className="table-link">
      <Box>
        <img src={props.image} alt="coin" className="table-body-symbol" />
        <span>{props.value}</span>
      </Box>
    </Link>
  )
}

export default CoinColumnHeader
