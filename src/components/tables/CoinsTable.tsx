import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import '../../assets/styles/Table/Table.css'
interface ITable {
  id: string
  name: string
  image: string
  price: string
  current_price: string
  market_cap: string
  total_volume: string
  low_24h: string
}
function CoinsTable(props: { data: any }) {
  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-head-row">
          <th>
            <FormattedMessage
              id="table.header.cell.name"
              defaultMessage="NAME "
            />
          </th>
          <th>
            <FormattedMessage
              id="table.header.cell.price"
              defaultMessage="PRICE "
            />
          </th>
          <th>
            <FormattedMessage
              id="table.header.cell.market.cap"
              defaultMessage="MARKET CAP "
            />
          </th>
          <th>
            <FormattedMessage
              id="table.header.cell.volume"
              defaultMessage="VOLUME 24H"
            />
          </th>
          <th>
            <FormattedMessage
              id="table.header.cell.low"
              defaultMessage="LOW 24H  "
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((crypto: ITable) => (
          <tr className="table-body-row" key={crypto.id} id={crypto.id}>
            <td className="table-body-name">
              <Link to={`/coins/${crypto.id}`} className="table-link">
                {' '}
                <img
                  className="table-body-symbol"
                  src={crypto.image}
                  alt="crypto symbol"
                />
                {crypto.name}
              </Link>
            </td>
            <td>{crypto.current_price}</td>
            <td>{crypto.market_cap}</td>
            <td>{crypto.total_volume}</td>
            <td>{crypto.low_24h}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CoinsTable