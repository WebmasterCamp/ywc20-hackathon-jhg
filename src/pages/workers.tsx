import React, { useEffect, useState } from 'react';
import images from '../assets';
import Navbaruser from '@/components/Navbar/Navbaruser';
import EmployeeCard from '../components/Card/EmployeeCard';
import { useNavigate } from 'react-router';

type Gender = 'male' | 'female';

type Employee = {
    name: string;
    age: number;
    gender: Gender; // ใช้ enum แบบเฉพาะเจาะจง
    career: string;
};

const WorkersPage: React.FC = () => {
    const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);
    const [totalRequestedCount, setTotalRequestedCount] = useState(0); // ✅ เพิ่ม state นี้
    const [isChanged, setIsChanged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const raw = localStorage.getItem('selectedEmployees');
        if (!raw) return;

        const selected: Employee[] = JSON.parse(raw);

        // ⚠️ ตรวจสอบเพศให้เป็น 'male' | 'female' ถ้าเผื่อมีข้อมูลที่ไม่ตรง
        const safeSelected = selected.map(emp => ({
            ...emp,
            gender: emp.gender === 'male' || emp.gender === 'female' ? emp.gender : 'male'
        }));

        setSelectedEmployees(safeSelected);
        setTotalRequestedCount(safeSelected.length); // ✅ ตั้งค่าจำนวนรวม
    }, []);

    const handleDelete = (nameToDelete: string) => {
        const confirmed = window.confirm('คุณแน่ใจหรือไม่ว่าต้องการลบพนักงานคนนี้?');
        if (confirmed) {
            setSelectedEmployees(prev => {
                const updated = prev.filter(emp => emp.name !== nameToDelete);
                setIsChanged(true);
                return updated;
            });
        }
    };

    return (
        <div>
            <Navbaruser />

            <div className="w-full min-h-screen items-center justify-center bg-white px-4 md:px-32 mt-32">
                <div className='border-2 border-primary rounded-[20px] py-12'>
                    <img src={images.status4} alt="status" className="w-full max-w-md mx-auto" />
                </div>

                <div className="mt-10 space-y-6 bg-white p-6 border-2 border-primary rounded-[20px]">
                    <h2 className="text-lg font-semibold text-primary mb-4">
                        รายชื่อพนักงาน
                        <span className="text-sm text-gray-500 ml-2">
                            ทั้งหมด {selectedEmployees.length} / {totalRequestedCount} คน
                        </span>
                    </h2>

                    {selectedEmployees.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
                                {selectedEmployees.map((emp) => (
                                    <EmployeeCard
                                        key={emp.name}
                                        name={emp.name}
                                        age={emp.age}
                                        gender={emp.gender}
                                        career={emp.career}
                                        onDelete={() => handleDelete(emp.name)}
                                    />
                                ))}
                            </div>

                            {isChanged && (
                                <div className="flex justify-end gap-4 mt-6 mx-4">
                                    <button
                                        onClick={() => {
                                            localStorage.setItem('selectedEmployees', JSON.stringify(selectedEmployees));
                                            setIsChanged(false);
                                        }}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                    >
                                        บันทึก
                                    </button>
                                    <button
                                        onClick={() => {
                                            const raw = localStorage.getItem('selectedEmployees');
                                            if (raw) {
                                                setSelectedEmployees(JSON.parse(raw));
                                            }
                                            setIsChanged(false);
                                        }}
                                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                                    >
                                        ยกเลิก
                                    </button>
                                </div>
                            )}

                            {!isChanged && (
                                <div className="flex justify-center mt-6 mx-4">
                                    <button
                                        onClick={() => navigate('/receipt')}
                                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                    >
                                        ยืนยัน
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <p className="text-center text-gray-500">ไม่มีพนักงานที่ถูกเลือกไว้</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkersPage;
