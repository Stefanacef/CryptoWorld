import { TextField } from '@mui/material'

const FilterByCoinName = ({ column }: any) => {
  const { filterValue, setFilter } = column
  return (
    <TextField
      id="standard-basic"
      label="Search..."
      value={filterValue || ''}
      variant="standard"
      onChange={e => setFilter(e.target.value)}
    />
  )
}

export default FilterByCoinName
