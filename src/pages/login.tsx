import {LoginForm} from '@/forms/loginForm';

export const LoginPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md">
                <h1 className="mb-6 text-2xl font-bold">เข้าสู่ระบบ</h1>
                <LoginForm />
                <p className="mt-4 text-sm text-gray-600">
                    เพิ่งพ้นโทษและกำลังมองหาโอกาสใหม่ใช่ไหม?{' '}
                    <a
                        href="/job-register"
                        className="text-blue-500 hover:underline"
                    >
                        สมัครงานที่นี่
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
