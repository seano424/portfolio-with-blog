import Image from 'next/image'
import Link from 'next/link'

export default function Avatar() {
  return (
    <Link
      href="/"
      className="button relative hidden h-12 w-12 rounded-full bg-fuchsia-50 lg:block"
      aria-label="Link back to homepage"
    >
      <Image
        className="rounded-full object-cover"
        src="/images/wave.png"
        alt="Back to homepage image link"
        priority
        fill
      />
    </Link>
  )
}
