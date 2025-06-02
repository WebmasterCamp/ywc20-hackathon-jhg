import React from 'react';

interface Step {
    title: string;
    active: boolean;
}

interface StatusStepperProps {
    steps: Step[];
}

const StatusStepper: React.FC<StatusStepperProps> = ({steps}) => {
    return (
        <div className="mt-10 flex items-center justify-center space-x-6">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className="relative flex flex-col items-center"
                >
                    {/* Label */}
                    <span className="mb-2 text-sm font-medium text-gray-700">
                        {step.title}
                    </span>

                    {/* Circle */}
                    <div
                        className={`z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 ${step.active ? 'border-black bg-black text-white' : 'border-gray-400 bg-white'}`}
                    >
                        {step.active ? '✓' : ''}
                    </div>

                    {index !== steps.length - 1 && (
                        <div className="absolute top-1/2 left-8 z-0 h-0.5 w-12 -translate-y-1/2 transform bg-gray-400"></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default StatusStepper;
