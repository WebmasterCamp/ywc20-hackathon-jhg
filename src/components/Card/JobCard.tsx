import React from 'react';

interface JobCardProps {
  title: string;
  count: number;
}

const JobCard: React.FC<JobCardProps> = ({ title, count }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center w-64 h-40 transition-transform hover:scale-105">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <p className="text-4xl font-bold text-blue-600 mt-2">{count}</p>
    </div>
  );
};

export default JobCard;
