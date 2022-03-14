import '../../assets/styles/Table/Table.css'
import { useTable, useSortBy, usePagination, useFilters } from 'react-table'
import { columnsData } from './Columns'
import { useMemo } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Button, Grid, TextField, Tooltip, Box } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'

function CoinsTable(props: { data: any }) {
  const data = useMemo(() => props.data, [props.data])
  const columns = useMemo(() => columnsData, [])
  const intl = useIntl()
  const defaultColumn = useMemo(
    () => ({
      Filter: '',
    }),
    []
  )
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
      defaultColumn,
      columns,
      data: data,
    },
    useFilters,
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
                  <span style={{ marginLeft: '10px' }}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDownwardIcon sx={{ fontSize: '17px' }} />
                      ) : (
                        <ArrowUpwardIcon sx={{ fontSize: '17px' }} />
                      )
                    ) : (
                      ''
                    )}
                  </span>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
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
      <Box>
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-end"
          height="80px"
        >
          <Grid item textAlign="left">
            <TextField
              size="small"
              id="filled-basic"
              label={intl.formatMessage({ id: 'table.search.page' })}
              variant="filled"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0
                gotoPage(pageNumber)
              }}
            />
          </Grid>
          <Grid item>
            <Box>
              <Tooltip
                title={intl.formatMessage({ id: 'table.button.first.page' })}
                arrow
              >
                <Button
                  variant="outlined"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  <NavigateBeforeIcon />
                  <NavigateBeforeIcon />
                </Button>
              </Tooltip>
              <Tooltip
                title={intl.formatMessage({ id: 'table.button.previous.page' })}
                arrow
              >
                <Button
                  variant="outlined"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                  sx={{ margin: '0 10px' }}
                >
                  <NavigateBeforeIcon />
                </Button>
              </Tooltip>
              <Tooltip
                title={intl.formatMessage({ id: 'table.button.next.page' })}
                arrow
              >
                <Button
                  variant="outlined"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                  sx={{ margin: '0 10px' }}
                >
                  <NavigateNextIcon />
                </Button>
              </Tooltip>
              <Tooltip
                title={intl.formatMessage({ id: 'table.button.last.page' })}
                arrow
              >
                <Button
                  variant="outlined"
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  <NavigateNextIcon />
                  <NavigateNextIcon />
                </Button>
              </Tooltip>
            </Box>
          </Grid>
          <Grid item alignSelf="flex-start">
            <Box color="white">
              <FormattedMessage id="table.page" defaultMessage="Page" /> :
              {pageIndex + 1} / {pageOptions.length}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default CoinsTable
