import { parseISO, format } from 'date-fns'
import { Inter } from '@next/font/google'
import clsx from 'clsx'

const inter = Inter({})

type Props = {
  dateString: string
}

const Date = ({ dateString }: Props) => {
  const date = parseISO(dateString)

  return (
    <time
      className={clsx(
        inter.className,
        'font-light text-dark dark:text-primary-100'
      )}
      dateTime={dateString}
    >
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

export default Date
