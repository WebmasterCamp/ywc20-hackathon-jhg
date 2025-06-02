import React from 'react';
import images from '../assets';
import Navbaruser from '@/components/Navbar/Navbaruser';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';

const Deposit: React.FC = () => {
    const navigate = useNavigate();

    const handleGoToWorkers = () => {
        navigate('/adminconfirm');
    };

    const onSubmit = () => {


        navigate('/adminconfirm');
    };

    return (
        <div>
            <Navbaruser />

            <div className="w-full min-h-screen items-center justify-center bg-white px-4 md:px-32 mt-32">
                <div className='border-2 border-primary rounded-[20px] py-12'>
                    <img src={images.status2_1} alt="status" className="w-full max-w-md mx-auto  " />

                </div>

                <div className="mt-10 space-y-6 bg-white p-6 border-2 border-primary rounded-[20px] ">
                    <div className='flex items-end mb-6 gap-2'>
                        <div className="text-start font-medium text-[20px] text-primary">
                            ชำระเงินค่ามัดจำ
                        </div>
                        <div className='bg-primary p-2.5 rounded-[40px] text-white px-4'>
                            6/6
                        </div>
                    </div>
                    <img
                        src={images.QR}
                        alt="status"
                        className="w-[180px] max-w-md mx-auto cursor-pointer hover:opacity-80 transition"
                        onClick={handleGoToWorkers}
                    />
                    <div className='text-xl w-full flex flex-col justify-center items-center'>
                        <div>
                            ค่ามัดจำ 180 บาท
                        </div>
                        <div className='text-base'>
                            หมายเหตุ: กรุณาชำระเงินค่ามัดจำภายใน 24 ชั่วโมง หลังจากนั้นระบบจะยกเลิกการจองอัตโนมัติ
                        </div>
                    </div>
                    <div>
                    </div>
                    < div className="flex items-center justify-center">
                        <Button
                            type="button"
                            onClick={onSubmit} // <== เพิ่มตรงนี้
                            className="w-[140px] item-center bg-[#FB8A44] text-white hover:bg-[#FB8A44]/80 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            ส่งข้อมูล
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Deposit;
