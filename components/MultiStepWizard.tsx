import { useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

function Step({
  step,
  currentStep,
  setStep,
}: {
  step: number
  currentStep: number
  setStep: any
}) {
  let status =
    currentStep === step
      ? 'active'
      : currentStep < step
      ? 'inactive'
      : 'complete'

  return (
    <motion.button
      onClick={() => setStep(step + 1)}
      animate={{
        backgroundColor: status === 'complete' ? 'var(--blue-500)' : '#fff',
        borderColor:
          status === 'complete' || status === 'active'
            ? 'var(--blue-500)'
            : 'var(--slate-200)',
        color:
          status === 'complete' || status === 'active'
            ? 'var(--blue-500)'
            : 'var(--slate-400)',
      }}
      transition={{ duration: 1 }}
      className="flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold"
    >
      <div className="flex items-center justify-center">
        {status === 'complete' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-16 w-16 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21"
            />
          </svg>
        ) : (
          <span>{step}</span>
        )}
      </div>
    </motion.button>
  )
}

export default function MultiStepWizard() {
  const [step, setStep] = useState(1)

  return (
    <div className="my-10 mx-auto w-full max-w-md rounded-2xl bg-tahiti-100 shadow-md">
      <div className="flex justify-between rounded p-8">
        <Step step={1} setStep={setStep} currentStep={step} />
        <Step step={2} setStep={setStep} currentStep={step} />
        <Step step={3} setStep={setStep} currentStep={step} />
        <Step step={4} setStep={setStep} currentStep={step} />
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
