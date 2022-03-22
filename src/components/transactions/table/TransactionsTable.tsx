import { useMemo } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import Table from '../../shared/table/Table'
import CoinColumn from './CoinColumn'
import DateColumn from './DateColumn'
import DescriptionColumn from './Description'
import TypeColumn from './TypeColumnHeader'
import FilterByType from './FilterByType'
import FilterByName from '../../shared/table/FilterByName'
import ActionsColumn from './ActionsColumn'
import useTransactions from '../../../api/transactions/useTransactions'
import { Skeleton } from '@mui/material'
import { sortBy } from 'lodash'

const TransactionsTable = () => {
  const intl = useIntl()
  const { data: transactions, isLoading, error, isError } = useTransactions()

  const sortedTransactions = sortBy(
    transactions,
    transaction => !transaction.pinOnTop,
    'id'
  )

  const columns = useMemo(
    () => [
      {
        Header: intl.formatMessage({ id: 'transactions.cell.coin' }),
        accessor: 'coin',
        Cell: ({ cell }: any) => <CoinColumn cell={cell} />,
        Filter: FilterByName,
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
        Cell: ({ cell }: any) => <DateColumn date={cell.value} />,
        accessor: 'date',
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.type' }),
        accessor: 'type',
        Cell: ({ cell }: any) => <TypeColumn type={cell.value} />,
        Filter: FilterByType,
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.description' }),
        accessor: 'description',
        Cell: ({ cell }: any) => <DescriptionColumn description={cell.value} />,
      },
      {
        Header: intl.formatMessage({ id: 'table.header.cell.actions' }),
        id: 'action',
        Cell: ({ cell }: any) => <ActionsColumn cell={cell} />,
      },
    ],
    [intl]
  )

  return (
    <>
      {isError ? (
        <span>
          <FormattedMessage id="generic.label.error" defaultMessage="Error" />
          {error?.message}
        </span>
      ) : isLoading ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="500px"
          animation="wave"
        />
      ) : (
        <Table
          data={sortedTransactions}
          columns={columns}
          message={intl.formatMessage({ id: 'transactions.no.transaction' })}
        />
      )}
    </>
  )
}

export default TransactionsTable
