import { useAtom, atom } from 'jotai'

const atom1 = atom(false)

const Test = () => {
  const [isTrue, setIsTrue] = useAtom(atom1)
  return (
    <div className="flex items-center gap-3">
      <button
        className="button"
        onClick={() => setIsTrue((prevState) => !prevState)}
      >
        Toggle Local State!
      </button>
      <p className="text-lg lg:text-xl">state: {isTrue ? 'true' : 'false'}</p>
    </div>
  )
}

export default Test
