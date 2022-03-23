import { FormattedDate } from 'react-intl'

const DateColumn = (props: { date: string }) => {
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

export default DateColumn
