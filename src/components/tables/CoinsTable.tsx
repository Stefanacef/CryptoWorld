import '../../assets/styles/Table/Table.css'
import { useTable, useSortBy, usePagination } from 'react-table'
import { columnsData } from './Columns'
import { useMemo } from 'react'

function CoinsTable(props: { data: any }) {
  const data = useMemo(() => props.data, [props.data])
  const columns = useMemo(() => columnsData, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
  } = useTable(
    {
      columns,
      data: data,
    },
    useSortBy,
    usePagination
  )
  const { pageIndex } = state
  return (
    <>
      <table {...getTableProps()}>
        <thead className="table-head">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')} </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <span style={{ color: 'white', margin: '15px' }}>
          Go To Page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
          ></input>
        </span>
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          style={{ margin: '15px' }}
        >
          {'<<'}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          style={{ margin: '15px' }}
        >
          {'<'}
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          style={{ margin: '15px' }}
        >
          {'>'}
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          style={{ margin: '15px' }}
        >
          {'>>'}
        </button>
        <span style={{ color: 'white', margin: '15px' }}>
          Page : {pageIndex + 1} / {pageOptions.length}
        </span>
      </div>
    </>
  )
}

export default CoinsTable
