import React from 'react';
import images from '../assets';
import Navbaruser from '@/components/Navbar/Navbaruser';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';


const Payment: React.FC = () => {
    const navigate = useNavigate();

    const handleGoToWorkers = () => {
        navigate('/receipt'); // ตรวจ spelling อีกครั้งนะครับว่า "/woerkers" ถูกต้องหรือไม่
    };

        const onSubmit = () => {


        navigate('/receipt');
    };

    return (
        <div>
            <Navbaruser />

            <div className="w-full min-h-screen items-center justify-center bg-white px-4 md:px-32 mt-32">
                <div className='border-2 border-primary rounded-[20px] py-12'>
                    <img src={images.statusfinal} alt="status" className="w-full max-w-md mx-auto  " />

                </div>

                <div className="mt-10 space-y-6 bg-white p-6 border-2 border-primary rounded-[20px] ">
                    <div className="text-start mb-6 font-medium text-[20px] text-primary">
                        ชำระเงิน                    </div>
                    <img
                        src={images.qr2}
                        alt="status"
                        className="w-[180px] max-w-md mx-auto cursor-pointer hover:opacity-80 transition"
                        onClick={handleGoToWorkers}
                    />
                    < div className="flex items-center justify-center">
                        <Button
                            type="button"
                            onClick={onSubmit} // <== เพิ่มตรงนี้
                            className="w-[140px] item-center bg-[#FB8A44] text-white hover:bg-[#FB8A44]/80 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            ยืนยัน
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;
