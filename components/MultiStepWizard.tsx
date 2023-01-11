import { motion } from 'framer-motion'
import { useAtom, atom } from 'jotai'
import clsx from 'clsx'

export const stepAtom = atom(1)

function Step({ number }: { number: number }) {
  const [step, setStep] = useAtom(stepAtom)

  let status =
    step === number ? 'active' : step < number ? 'inactive' : 'complete'

  return (
    <motion.button
      initial={false}
      animate={status}
      transition={{ duration: 1 }}
      variants={{
        inactive: {
          backgroundColor: 'var(--white)',
          borderColor: 'var(--slate-200)',
          color: 'var(--slate-400)',
        },
        active: {
          backgroundColor: 'var(--white)',
          borderColor: 'var(--blue-500)',
          color: 'var(--blue-500)',
        },
        complete: {
          backgroundColor: 'var(--blue-500)',
          borderColor: 'var(--blue-500)',
          color: 'var(--blue-500)',
        },
      }}
      onClick={() => setStep(number + 1)}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold"
    >
      <span className="flex items-center justify-center">
        {status === 'complete' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-16 w-16 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <span>{number}</span>
        )}
      </span>
    </motion.button>
  )
}

export default function MultiStepWizard() {
  const [step, setStep] = useAtom(stepAtom)

  return (
    <div className="my-10 mx-auto w-full max-w-md rounded-2xl bg-tahiti-100 shadow-md">
      <div className="flex justify-between rounded p-8">
        <Step number={1} />
        <Step number={2} />
        <Step number={3} />
        <Step number={4} />
      </div>
      <div className="px-8 pb-8">
        <div>
          <div className="mt-2 h-6 w-40 rounded bg-slate-100" />
          <div className="mt-4 space-y-2">
            <div className="h-4 w-5/6 rounded bg-slate-100" />
            <div className="h-4 rounded bg-slate-100" />
            <div className="h-4 w-4/6 rounded bg-slate-100" />
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          <button
            onClick={() => setStep(step < 2 ? step : step - 1)}
            className="rounded px-2 py-1 text-slate-400 hover:text-slate-700"
          >
            Back
          </button>

          <button
            onClick={() => setStep(step > 4 ? step : step + 1)}
            className={clsx(
              'rounded-full bg-blue-600 px-3 py-2 text-slate-100',
              step > 4 && 'pointer-events-none opacity-50'
            )}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
