import React from 'react';
import Navbar from '../components/Navbar/Navbar';
const Homepage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="relative w-full h-screen">
                {/* ภาพพื้นหลังเต็มจอ */}
                <img
                    src="https://source.unsplash.com/1600x900/?technology,abstract" // เปลี่ยนลิงก์ได้ตามต้องการ
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay สีเข้มบางๆ */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* ข้อความต้อนรับ */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to YourApp</h1>
                    <p className="text-lg md:text-2xl">Build something amazing with us</p>
                </div>
            </div>
        </div>

    );
};

export default Homepage;
