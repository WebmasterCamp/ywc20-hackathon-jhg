import React from 'react';

interface Step {
    title: string;
    active: boolean;
}

interface StatusStepperProps {
    steps: Step[];
}

const StatusStepper: React.FC<StatusStepperProps> = ({ steps }) => {
    return (
        <div className="flex justify-center items-center space-x-6 mt-10">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center relative">
                    {/* Label */}
                    <span className="mb-2 text-sm font-medium text-gray-700">{step.title}</span>

                    {/* Circle */}
                    <div
                        className={`w-8 h-8 rounded-full border-4 flex items-center justify-center z-10
              ${step.active ? 'bg-black border-black text-white' : 'border-gray-400 bg-white'}`}
                    >
                        {step.active ? '✓' : ''}
                    </div>

                    {index !== steps.length - 1 && (
                        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-12 h-0.5 bg-gray-400 z-0"></div>
                    )}

                </div>
            ))}
        </div>
    );
};

export default StatusStepper;
