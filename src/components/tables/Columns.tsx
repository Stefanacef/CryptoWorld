import { Box } from '@mui/system'
import '../../assets/styles/Table/Table.css'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import FilterByCoinName from './FilterByCoinName'

export const columnsData = [
  {
    Header: (
      <FormattedMessage id="table.header.cell.name" defaultMessage="NAME " />
    ),
    accessor: 'name',
    Cell: ({ cell }: { cell: { row: any; value: string } }) => (
      <Link to={`/coins/${cell?.row?.original.id}`} className="table-link">
        <Box>
          <img
            src={cell?.row?.original.image}
            alt="coin image"
            className="table-body-symbol"
          />
          <span>{cell?.value}</span>
        </Box>
      </Link>
    ),
    Filter: FilterByCoinName,
  },
  {
    Header: (
      <FormattedMessage id="table.header.cell.price" defaultMessage="PRICE " />
    ),
    accessor: 'current_price',
  },
  {
    Header: (
      <FormattedMessage
        id="table.header.cell.market.cap"
        defaultMessage="MARKET CAP "
      />
    ),
    accessor: 'market_cap',
  },
  {
    Header: (
      <FormattedMessage
        id="table.header.cell.volume"
        defaultMessage="VOLUME 24H"
      />
    ),
    accessor: 'total_volume',
  },
  {
    Header: (
      <FormattedMessage id="table.header.cell.low" defaultMessage="LOW 24H  " />
    ),
    accessor: 'low_24h',
  },
]
