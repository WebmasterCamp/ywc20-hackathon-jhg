import {useEffect, useState} from 'react';
import {LaborInfoCard} from '@/components/laborInfoCard'; // adjust the path
import type {JobRegisterFormValues} from '@/schemas/jobRegisterSchema';

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
        // Example: remove user from localStorage
        const updatedUsers = users.filter((user) => user.email !== data.email);
        setUsers(updatedUsers);
        localStorage.setItem('jobRegisterData', JSON.stringify(updatedUsers));
    };

    const onAccept = (data: JobRegisterFormValues) => {
        // Example: handle accept logic, e.g., move to another storage or notify
        console.log('Accepted user:', data);
        // exits acceoted user in localStorage
        const existingAccepted = JSON.parse(
            localStorage.getItem('acceptedUser') || '[]',
        );
        const updatedData = [...existingAccepted, data];
        // Save the updated accepted users back to localStorage
        localStorage.setItem('acceptedUser', JSON.stringify(updatedData));
        onDecline(data); // Remove from pending list
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
