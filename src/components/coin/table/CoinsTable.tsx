import '../../../assets/styles/Table/Table.css'
import { useMemo } from 'react'
import { useIntl } from 'react-intl'
import FilterByCoinName from './FilterByCoinName'
import CoinColumnHeader from './CoinColumnHeader'
import Table from '../../shared/table/Table'
import { ICryptoCoin } from './types'

function CoinsTable(props: { data: ICryptoCoin[] }) {
  const intl = useIntl()

  const columns = useMemo(
    () => [
      {
        Header: intl.formatMessage({ id: 'table.header.cell.name' }),
        accessor: 'name',
        Cell: ({ cell }: { cell: { row: any; value: string } }) => (
          <CoinColumnHeader
            id={cell?.row?.original.id}
            path={`/coins/${cell?.row?.original.id}`}
            image={cell?.row?.original.image}
            value={cell?.value}
          />
        ),
        Filter: FilterByCoinName,
      },
      {
        Header: intl.formatMessage({ id: 'table.header.cell.price' }),
        accessor: 'current_price',
        Cell: ({ cell }: any) =>
          intl.formatNumber(cell.value, { style: 'currency', currency: 'USD' }),
      },
      {
        Header: intl.formatMessage({ id: 'table.header.cell.market.cap' }),
        accessor: 'market_cap',
        Cell: ({ cell }: any) =>
          intl.formatNumber(cell.value, { style: 'currency', currency: 'USD' }),
      },
      {
        Header: intl.formatMessage({ id: 'table.header.cell.volume' }),
        accessor: 'total_volume',
        Cell: ({ cell }: any) =>
          intl.formatNumber(cell.value, { style: 'currency', currency: 'USD' }),
      },
      {
        Header: intl.formatMessage({ id: 'table.header.cell.low' }),
        accessor: 'low_24h',
        Cell: ({ cell }: any) =>
          intl.formatNumber(cell.value, { style: 'currency', currency: 'USD' }),
      },
    ],
    [intl]
  )

  return (
    <>
      <Table data={props.data} columns={columns} />
    </>
  )
}

export default CoinsTable
