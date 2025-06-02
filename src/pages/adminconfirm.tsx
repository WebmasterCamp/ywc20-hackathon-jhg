import React from 'react';
import images from '../assets';
import Navbaruser from '@/components/Navbar/Navbaruser';

const Adminconfirm: React.FC = () => {
    return (
        <div>
            <Navbaruser />

            <div className="mt-32 min-h-screen w-full items-center justify-center bg-white px-4 md:px-16">
                <div className="rounded-[20px] border-2 border-[#007AFF] py-12">
                    <img
                        src={images.status2}
                        alt="status"
                        className="mx-auto w-full max-w-md"
                    />
                </div>

                <div className="mt-10 space-y-6 rounded-[20px] border-2 border-[#007AFF] bg-white p-6">
                    <img
                        src={images.adminconfirm}
                        alt="status"
                        className="mx-auto w-[180px] max-w-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Adminconfirm;
