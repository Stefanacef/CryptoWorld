import { useMemo } from 'react'
import { useIntl } from 'react-intl'
import { useRecoilValue } from 'recoil'
import FilterByCoinName from '../../shared/table/FilterByCoinName'
import Table from '../../shared/table/Table'
import { transactionsAtom } from '../state'
import CoinColumnHeader from './CoinColumnHeader'
import DateColumnHeader from './DateColumnHeader'
import DescriptionColumnHeader from './DescriptionColumnHeader'
import TypeColumnHeader from './TypeColumnHeader'

const TransactionsTable = () => {
  const intl = useIntl()
  const transactions = useRecoilValue(transactionsAtom)

  const columns = useMemo(
    () => [
      {
        Header: intl.formatMessage({ id: 'transactions.cell.coin' }),
        accessor: 'coin',
        Cell: ({ cell }: any) => <CoinColumnHeader coin={cell.value} />,
        Filter: FilterByCoinName,
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.amount' }),
        accessor: 'amount',
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.price' }),
        accessor: 'price',
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.currency' }),
        accessor: 'currency',
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.date' }),
        Cell: ({ cell }: any) => <DateColumnHeader date={cell.value} />,
        accessor: 'date',
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.type' }),
        accessor: 'type',
        Cell: ({ cell }: any) => <TypeColumnHeader type={cell.value} />,
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.description' }),
        accessor: 'description',
        Cell: ({ cell }: any) => (
          <DescriptionColumnHeader description={cell.value} />
        ),
      },
    ],
    [intl]
  )

  return (
    <>
      <Table
        data={transactions}
        columns={columns}
        message={intl.formatMessage({ id: 'transactions.no.transaction' })}
      />
    </>
  )
}

export default TransactionsTable
