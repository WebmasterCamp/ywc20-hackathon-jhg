import React from 'react';
import { Link } from 'react-router';
import images from '../../assets'; // ปรับ path ตามจริง

const Navbaruser: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-primary px-6 py-4 shadow-md ">
            <Link
                to="/landingpage"
                className="text-xl font-bold text-blue-600"
            >
                <img
                    src={images.logonavbar}
                    alt="โลโก้"
                    className="w-full h-[40px] object-contain"
                />
            </Link>

            <div className="flex gap-6">
                <Link
                    to="/landingpage"
                    className="text-white transition-colors hover:text-blue-600"
                >
                    หน้าหลัก
                </Link>
            </div>
        </nav>
    );
};

export default Navbaruser;
