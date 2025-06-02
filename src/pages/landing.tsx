import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import JobCard from '../components/Card/JobCard';
import {useNavigate} from 'react-router';

const Landingpage: React.FC = () => {
    const navigate = useNavigate();

    const jobData = [
        {title: 'Frontend Developer', count: 12},
        {title: 'Backend Developer', count: 8},
        {title: 'UX/UI Designer', count: 5},
    ];
    return (
        <div>
            <Navbar />
            <div className="w-full min-h-screen flex items-center justify-center bg-white px-4 md:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto py-20">
                    {/* ฝั่งข้อความ */}
                    <div>
                        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                            Website heading <br /> goes here
                        </h1>
                        <p className="mb-8 text-lg text-gray-500">
                            Occaecat est ipsum reprehenderit reprehenderit
                            veniam anim laborum est esse duis occaecat
                            reprehenderit pariatur.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('/findjob')}
                                className="rounded-md bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
                            >
                                Join us now
                            </button>
                            <button className="px-6 py-3 font-medium text-indigo-600 hover:underline">
                                Learn more
                            </button>
                        </div>
                    </div>

                    {/* ฝั่งขวา – กล่องสีเทาอ่อนมีวงกลมโหลด */}
                    <div className="flex h-80 w-full items-center justify-center rounded-xl bg-gray-100">
                        <div className="rounded-full border-4 border-gray-300 border-t-transparent"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 py-10">
                {jobData.map((job, index) => (
                    <JobCard
                        key={index}
                        title={job.title}
                        count={job.count}
                    />
                ))}
            </div>
        </div>
    );
};

export default Landingpage;
