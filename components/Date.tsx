import { parseISO, format } from 'date-fns'
import { Inter } from '@next/font/google'

const inter = Inter()

type Props = {
  dateString: string
}

const Date = ({ dateString }: Props) => {
  const date = parseISO(dateString)

  return (
    <time className={inter.className} dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}

export default Date
