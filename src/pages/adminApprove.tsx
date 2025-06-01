import {useEffect, useState} from 'react';
import type {JobRegisterFormValues} from '@/schemas/jobRegisterSchema';
import Swal from 'sweetalert2';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {Button} from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import {MoreHorizontal} from 'lucide-react';

export const AdminApprovePage = () => {
    const [users, setUsers] = useState<JobRegisterFormValues[]>([]);
    const [selectedUser, setSelectedUser] =
        useState<JobRegisterFormValues | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const savedUsers = localStorage.getItem('jobRegisterData');
        if (savedUsers) {
            setUsers(JSON.parse(savedUsers));
        }
    }, []);

    const handleDecline = (data: JobRegisterFormValues) => {
        setIsDialogOpen(false);
        setTimeout(() => {
            Swal.fire({
                title: 'ยืนยันการปฏิเสธ?',
                text: 'คุณแน่ใจหรือไม่ว่าต้องการปฏิเสธผู้สมัครนี้?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'ใช่, ปฏิเสธ',
                cancelButtonText: 'ยกเลิก',
                customClass: {
                    popup: 'z-[40]',
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    // Here, ideally filter by unique identifier, but fallback to name
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
                    setSelectedUser(null);

                    Swal.fire({
                        title: 'ปฏิเสธเรียบร้อยแล้ว',
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false,
                    });
                }
            });
        }, 250);
    };

    const handleAccept = (data: JobRegisterFormValues) => {
        setIsDialogOpen(false);
        setTimeout(() => {
            Swal.fire({
                title: 'มั่นใจใช่ไหมว่าจะรับ?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'ใช่, รับ',
                cancelButtonText: 'ยกเลิก',
                customClass: {
                    popup: 'z-[40]',
                },
            }).then((result) => {
                if (result.isConfirmed) {
                    const existingAccepted = JSON.parse(
                        localStorage.getItem('acceptedUser') || '[]',
                    );
                    const updatedData = [...existingAccepted, data];
                    localStorage.setItem(
                        'acceptedUser',
                        JSON.stringify(updatedData),
                    );

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
                    setSelectedUser(null);

                    Swal.fire({
                        title: 'รับสมัครเรียบร้อยแล้ว',
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false,
                    });
                }
            });
        }, 250);
    };

    if (users.length === 0) {
        return <p className="mt-10 text-center">ยังไม่มีผู้สมัครงาน</p>;
    }

    return (
        <div className="p-6">
            <h2 className="mb-4 text-center text-2xl font-semibold">
                ข้อมูลผู้สมัครงาน
            </h2>
            <div className="flex flex-col items-start justify-center gap-4 sm:flex-row">
                <div className="overflow-auto rounded-lg border shadow-md sm:w-1/2">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-100">
                                <TableHead className="px-4 py-2 text-sm font-semibold text-gray-700">
                                    ชื่อ
                                </TableHead>
                                <TableHead className="px-4 py-2 text-sm font-semibold text-gray-700">
                                    นามสกุล
                                </TableHead>
                                <TableHead className="px-4 py-2 text-sm font-semibold text-gray-700">
                                    ความถนัด
                                </TableHead>
                                <TableHead className="w-[50px] px-4 py-2 text-sm"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user, index) => (
                                <TableRow
                                    key={index}
                                    className={`cursor-pointer transition hover:bg-blue-50 ${
                                        index % 2 === 0
                                            ? 'bg-white'
                                            : 'bg-gray-50'
                                    }`}
                                    onClick={() => {
                                        setSelectedUser(user);
                                        setIsDialogOpen(true);
                                    }}
                                >
                                    <TableCell className="px-4 py-2 text-sm">
                                        {user.firstName}
                                    </TableCell>
                                    <TableCell className="px-4 py-2 text-sm">
                                        {user.lastName}
                                    </TableCell>
                                    <TableCell className="px-4 py-2 text-sm">
                                        {user.skills}
                                    </TableCell>
                                    <TableCell className="px-4 py-2 text-right text-sm">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedUser(user);
                                                setIsDialogOpen(true);
                                            }}
                                        >
                                            <MoreHorizontal className="h-4 w-4 text-gray-600" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Single Dialog outside map */}
            {selectedUser && (
                <Dialog
                    open={isDialogOpen}
                    onOpenChange={setIsDialogOpen}
                >
                    <DialogContent className="max-w-md p-6">
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl font-bold">
                                รายละเอียดผู้สมัคร
                            </DialogTitle>
                        </DialogHeader>

                        <div className="mt-4 grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm text-gray-800">
                            <span className="font-semibold">ชื่อ-นามสกุล:</span>
                            <span>
                                {selectedUser.firstName} {selectedUser.lastName}
                            </span>

                            <span className="font-semibold">เพศ:</span>
                            <span>{selectedUser.gender}</span>

                            <span className="font-semibold">เบอร์โทร:</span>
                            <span>{selectedUser.phone}</span>

                            <span className="font-semibold">ความถนัด:</span>
                            <span>{selectedUser.skills}</span>

                            <span className="font-semibold">ที่อยู่:</span>
                            <span>{selectedUser.address}</span>

                            <span className="font-semibold">
                                ประวัติการทำงาน:
                            </span>
                            <span>{selectedUser.workHistory || '-'}</span>
                        </div>

                        <DialogFooter className="mt-6 flex justify-end gap-2">
                            <Button
                                variant="destructive"
                                onClick={() => handleDecline(selectedUser)}
                            >
                                ปฏิเสธ
                            </Button>
                            <Button onClick={() => handleAccept(selectedUser)}>
                                รับ
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default AdminApprovePage;
