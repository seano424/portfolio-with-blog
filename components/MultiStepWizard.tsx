import { useState } from 'react'
import clsx from 'clsx'

function Step({ step, currentStep }: { step: number; currentStep: number }) {
  let status =
    currentStep === step
      ? 'active'
      : currentStep < step
      ? 'inactive'
      : 'complete'

  return (
    <div
      className={clsx(
        'flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold',
        status === 'active'
          ? 'border-blue-500 bg-white text-blue-500'
          : status === 'complete'
          ? 'border-blue-500 bg-blue-500'
          : 'border-slate-200 bg-white text-slate-400'
      )}
    >
      <div className="flex items-center justify-center">
        {status === 'complete' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-10 w-10 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <span>{step}</span>
        )}
      </div>
    </div>
  )
}

export default function MultiStepWizard() {
  const [step, setStep] = useState(1)
  
  return (
    <div className="my-10 mx-auto w-full max-w-md rounded-2xl bg-white shadow-md">
      <div className="flex justify-between rounded p-8">
        <Step step={1} currentStep={step} />
        <Step step={2} currentStep={step} />
        <Step step={3} currentStep={step} />
        <Step step={4} currentStep={step} />
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
