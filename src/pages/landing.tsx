import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import JobCard from '../components/Card/JobCard';
import { useNavigate } from 'react-router';

const Landingpage: React.FC = () => {
  const navigate = useNavigate();

    const jobData = [
        { title: 'Frontend Developer', count: 12 },
        { title: 'Backend Developer', count: 8 },
        { title: 'UX/UI Designer', count: 5 },
    ];
    return (
        <div>
            <Navbar />
            <div className="w-full min-h-screen flex items-center justify-center bg-white px-4 md:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto py-20">
                    {/* ฝั่งข้อความ */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Website heading <br /> goes here
                        </h1>
                        <p className="text-gray-500 text-lg mb-8">
                            Occaecat est ipsum reprehenderit reprehenderit veniam anim laborum est esse duis occaecat reprehenderit pariatur.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('/finejob')}
                                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
                            >
                                Join us now
                            </button>
                            <button className="px-6 py-3 text-indigo-600 hover:underline font-medium">
                                Learn more
                            </button>
                        </div>
                    </div>

                    {/* ฝั่งขวา – กล่องสีเทาอ่อนมีวงกลมโหลด */}
                    <div className="w-full h-80 bg-gray-100 rounded-xl flex items-center justify-center">
                        <div className=" rounded-full border-4 border-gray-300 border-t-transparent"></div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center items-center gap-6 flex-wrap py-10">
                {jobData.map((job, index) => (
                    <JobCard key={index} title={job.title} count={job.count} />
                ))}
            </div>
        </div>
    );
};

export default Landingpage;
