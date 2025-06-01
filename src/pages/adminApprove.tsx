import {useEffect, useState} from 'react';
import {LaborInfoCard} from '@/components/laborInfoCard'; // adjust the path
import type {JobRegisterFormValues} from '@/schemas/jobRegisterSchema';
import Swal from 'sweetalert2';

export const AdminApprovePage = () => {
    const [users, setUsers] = useState<JobRegisterFormValues[]>([]);

    useEffect(() => {
        // Example: get multiple users from localStorage stored as JSON stringified array
        const savedUsers = localStorage.getItem('jobRegisterData');
        if (savedUsers) {
            const temp = JSON.parse(savedUsers);
            setUsers(temp);
        }
    }, []);

    const onDecline = (data: JobRegisterFormValues) => {
        Swal.fire({
            title: 'ยืนยันการปฏิเสธ?',
            text: 'คุณแน่ใจหรือไม่ว่าต้องการปฏิเสธผู้สมัครนี้?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'ใช่, ปฏิเสธ',
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            if (result.isConfirmed) {
                // Proceed with removal
                const updatedUsers = users.filter(
                    (user) =>
                        user.firstName !== data.firstName ||
                        user.lastName !== data.lastName,
                );
                setUsers(updatedUsers);
                localStorage.setItem(
                    'jobRegisterData',
                    JSON.stringify(updatedUsers),
                );

                Swal.fire({
                    title: 'ปฏิเสธเรียบร้อยแล้ว',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });
    };

    const onAccept = (data: JobRegisterFormValues) => {
        Swal.fire({
            title: 'มั่นใจใช่ไหมว่าจะรับ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'ใช่, รับ',
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            if (result.isConfirmed) {
                // Add to accepted users
                const existingAccepted = JSON.parse(
                    localStorage.getItem('acceptedUser') || '[]',
                );
                const updatedData = [...existingAccepted, data];
                localStorage.setItem(
                    'acceptedUser',
                    JSON.stringify(updatedData),
                );

                // Remove from jobRegisterData
                const updatedUsers = users.filter(
                    (user) =>
                        user.firstName !== data.firstName ||
                        user.lastName !== data.lastName,
                );
                setUsers(updatedUsers);
                localStorage.setItem(
                    'jobRegisterData',
                    JSON.stringify(updatedUsers),
                );

                Swal.fire({
                    title: 'รับสมัครเรียบร้อยแล้ว',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });
    };

    if (users.length === 0)
        return <p className="mt-10 text-center">ยังไม่มีผู้สมัครงาน</p>;

    return (
        <div>
            <div className="my-6 text-center text-2xl font-semibold">
                ข้อมูลผู้สมัครงาน
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3">
                {users.map((user, index) => (
                    <LaborInfoCard
                        key={index}
                        data={user}
                        onDecline={onDecline}
                        onAccept={onAccept}
                    />
                ))}
            </div>
        </div>
    );
};

export default AdminApprovePage;
