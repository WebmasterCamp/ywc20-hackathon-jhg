import React from 'react';
import { Link } from 'react-router';

const Navbar: React.FC = () => {
    return (
        <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 z-50">
            <Link to="/" className="text-xl font-bold text-blue-600">
                ไว้ใจ
            </Link>

            <div className="flex gap-6">
                <Link
                    to="/landingpage"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                    หน้าหลัก
                </Link>
                <Link
                    to="/company-login"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                    เข้าสู่ระบบ
                </Link>
                <Link
                    to="/company-register"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                    สมัครสมาชิก
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
