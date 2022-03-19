import { FormattedDate } from 'react-intl'

const DateColumnHeader = (props: { date: string }) => {
  const date = new Date(props.date)
  return (
    <div>
      <FormattedDate
        value={date}
        year="numeric"
        month="numeric"
        day="numeric"
      />
    </div>
  )
}

export default DateColumnHeader
