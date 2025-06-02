import React from 'react';
import {Link} from 'react-router';

const Navbaruser: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow-md">
            <Link
                to="/"
                className="text-xl font-bold text-blue-600"
            >
                ไว้ใจ
            </Link>

            <div className="flex gap-6">
                <Link
                    to="/landingpage"
                    className="text-gray-700 transition-colors hover:text-blue-600"
                >
                    หน้าหลัก
                </Link>
            </div>
        </nav>
    );
};

export default Navbaruser;
