import { FormattedMessage } from 'react-intl'

export const columnsData = [
  {
    Header: (
      <FormattedMessage id="table.header.cell.name" defaultMessage="NAME " />
    ),
    accessor: 'name',
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
