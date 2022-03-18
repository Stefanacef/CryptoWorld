import { useMemo } from 'react'
import { useIntl } from 'react-intl'
import { useRecoilValue } from 'recoil'
import Table from '../../shared/table/Table'
import { transactionsAtom } from '../state'

const TransactionsTable = () => {
  const intl = useIntl()
  const transactions = useRecoilValue(transactionsAtom)

  const columns = useMemo(
    () => [
      {
        Header: intl.formatMessage({ id: 'transactions.cell.coin' }),
        accessor: 'coin',
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
        accessor: 'date',
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.type' }),
        accessor: 'type',
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.description' }),
        accessor: 'description',
      },
    ],
    [intl]
  )

  return (
    <>
      <Table data={transactions} columns={columns} />
    </>
  )
}

export default TransactionsTable
