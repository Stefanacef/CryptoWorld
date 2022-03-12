// import { FormattedMessage } from 'react-intl'
// import { Link } from 'react-router-dom'
import '../../assets/styles/Table/Table.css'
import { useTable } from 'react-table'
import { columnsData } from './Columns'
import { useMemo } from 'react'

function Table(props: { data: any }) {
  const data = useMemo(() => props.data, [props.data])
  const columns = useMemo(() => columnsData, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: data,
    })

  return (
    <>
      <table {...getTableProps()}>
        <thead className="table-head">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getFooterProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
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
    </>
  )
}

export default Table
