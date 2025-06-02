import React from 'react';
import images from '../assets';
import Navbaruser from '@/components/Navbar/Navbaruser';
import { useNavigate } from 'react-router';

const Adminconfirm: React.FC = () => {
    const navigate = useNavigate();

    const handleGoToWorkers = () => {
        navigate('/workers'); 
    };

    return (
        <div>
            <Navbaruser />

            <div className="w-full min-h-screen items-center justify-center bg-white px-4 md:px-32 mt-32">
                <div className='border-2 border-primary rounded-[20px] py-12'>
                    <img src={images.status3} alt="status" className="w-full max-w-md mx-auto  " />

                </div>

                <div className="mt-10 space-y-6 bg-white p-6 border-2 border-primary rounded-[20px] ">
                    <img
                        src={images.adminconfirm}
                        alt="status"
                        className="w-[180px] max-w-md mx-auto cursor-pointer hover:opacity-80 transition"
                        onClick={handleGoToWorkers}
                    />
                </div>
            </div>
        </div>
    );
};

export default Adminconfirm;
