import {JobRegisterForm} from '@/forms/jobRegisterForm'; // Adjust path accordingly
import Navbar from '../components/Navbar/Navbar'; // Adjust path accordingly

export const JobRegisterPage = () => {
    return (
        <div>
            <Navbar />

            <div className="flex min-h-screen flex-col items-center bg-gray-50 p-6">
                <header className="mb-8 w-full max-w-2xl text-center">
                    <h1 className="mb-2 text-3xl font-bold">
                        ลงทะเบียนสมัครงาน
                    </h1>
                    <p className="text-gray-700">
                        สำหรับผู้ที่เพิ่งพ้นโทษและกำลังมองหาโอกาสใหม่ๆ
                        กรุณากรอกข้อมูลด้านล่างเพื่อสมัครงานกับเรา
                    </p>
                </header>

                <main className="w-full max-w-lg rounded-lg bg-white p-6 shadow-md">
                    <JobRegisterForm />
                </main>
            </div>
        </div>
    );
};

export default JobRegisterPage;
