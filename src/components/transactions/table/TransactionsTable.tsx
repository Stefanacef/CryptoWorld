import { useMemo } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import Table from '../../shared/table/Table'
import CoinColumnHeader from './CoinColumnHeader'
import DateColumnHeader from './DateColumnHeader'
import DescriptionColumnHeader from './DescriptionColumnHeader'
import TypeColumnHeader from './TypeColumnHeader'
import FilterByType from './FilterByType'
import FilterByName from '../../shared/table/FilterByName'
import ActionsColumnHeader from './ActionsColumnHeader'
import useTransactions from '../../../api/useTransactions'
import { Skeleton } from '@mui/material'

const TransactionsTable = () => {
  const intl = useIntl()
  const { data: transactions, isLoading, error, isError } = useTransactions()
  console.log(transactions)

  const columns = useMemo(
    () => [
      {
        Header: intl.formatMessage({ id: 'transactions.cell.coin' }),
        accessor: 'coin',
        Cell: ({ cell }: any) => <CoinColumnHeader cell={cell} />,
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
        Cell: ({ cell }: any) => <DateColumnHeader date={cell.value} />,
        accessor: 'date',
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.type' }),
        accessor: 'type',
        Cell: ({ cell }: any) => <TypeColumnHeader type={cell.value} />,
        Filter: FilterByType,
      },
      {
        Header: intl.formatMessage({ id: 'transactions.cell.description' }),
        accessor: 'description',
        Cell: ({ cell }: any) => (
          <DescriptionColumnHeader description={cell.value} />
        ),
      },
      {
        Header: intl.formatMessage({ id: 'table.header.cell.actions' }),
        id: 'action',
        Cell: ({ cell }: any) => <ActionsColumnHeader cell={cell} />,
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
          data={transactions}
          columns={columns}
          message={intl.formatMessage({ id: 'transactions.no.transaction' })}
        />
      )}
    </>
  )
}

export default TransactionsTable
