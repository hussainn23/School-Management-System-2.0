interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function Stepper({ steps, currentStep, onStepClick }: StepperProps) {
  return (
    <ol className="flex items-center w-full text-xs text-gray-900 font-medium sm:text-base mb-3 px-10">
      {steps.map((step, index) => (
        <li
          key={step}
          className={`flex w-full relative ${
            index <= currentStep ? 'text-indigo-600' : 'text-gray-900'
          } ${
            index < steps.length - 1
              ? "after:content-[''] after:w-full after:h-0.5 after:inline-block after:absolute lg:after:top-5 after:top-3 after:left-10"
              : ''
          } ${
            index < currentStep ? 'after:bg-indigo-600' : 'after:bg-gray-200'
          }`}
        >
          <div
            className="block whitespace-nowrap z-10 cursor-pointer text-xs"
            onClick={() => onStepClick(index)}
          >
            <span
              className={`w-6 h-6 border-2 rounded-full flex justify-center items-center mx-auto mb-3 text-sm lg:w-10 lg:h-10 ${
                index < currentStep
                  ? 'bg-indigo-600 border-transparent text-white'
                  : index === currentStep
                    ? 'bg-indigo-600 border-transparent text-white'
                    : 'bg-gray-50 border-gray-200 text-indigo-600'
              }`}
            >
              {index + 1}
            </span>
            {step}
          </div>
        </li>
      ))}
    </ol>
  );
}
