import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { stepAtom } from 'store'
import clsx from 'clsx'

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
          <CheckIcon className="h-6 w-6 text-white" />
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

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        // transition={{ duration: 2 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}
