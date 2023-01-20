import clsx from 'clsx'
import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
  card?: boolean
}

const Date = ({ dateString, card = false }: Props) => {
  const date = parseISO(dateString)

  return (
    <time
      className={clsx(
        'tracking-tighter font-black',
        card ? 'dark:text-dark' : 'dark:text-primary-100'
      )}
      dateTime={dateString}
    >
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

export default Date
