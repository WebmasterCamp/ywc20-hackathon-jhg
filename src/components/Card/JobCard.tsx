import React from 'react';

interface JobCardProps {
    title: string;
    count: number;
}

const JobCard: React.FC<JobCardProps> = ({title, count}) => {
    return (
        <div className="flex h-40 w-64 flex-col items-center justify-center rounded-2xl bg-white p-6 shadow-md transition-transform hover:scale-105">
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            <p className="mt-2 text-4xl font-bold text-primary">{count}</p>
        </div>
    );
};

export default JobCard;
