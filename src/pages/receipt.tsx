import React, { useEffect, useState } from 'react';
import Navbaruser from '@/components/Navbar/Navbaruser';
import { useNavigate } from 'react-router';
import ReceiptEmployeeCard from '@/components/Card/receiptEmployeeCard';

type Gender = 'male' | 'female';

type Employee = {
    name: string;
    age: number;
    gender: Gender;
    career: string;
};

const isValidGender = (gender: any): gender is Gender =>
    gender === 'male' || gender === 'female';

const Receipt: React.FC = () => {
    const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);
    const navigate = useNavigate();

    const employeeCost = 300;
    const depositRate = 0.1;

    useEffect(() => {
        const raw = localStorage.getItem('selectedEmployees');
        if (!raw) return;

        const selected = JSON.parse(raw);
        const safeSelected: Employee[] = selected.map((emp: any) => ({
            ...emp,
            gender: isValidGender(emp.gender) ? emp.gender : 'male',
        }));

        setSelectedEmployees(safeSelected);
    }, []);

    const totalEmployees = selectedEmployees.length;
    const totalCost = employeeCost * totalEmployees;
    const deposit = totalCost * depositRate;
    const finalCost = totalCost - deposit;

    return (
        <div>
            <Navbaruser />
            <div className="w-full min-h-screen items-center justify-center bg-white  md:px-32 mt-28">

                <h2 className="text-2xl font-bold text-start text-primary mb-2">
                    สรุปรายการว่าจ้าง
                </h2>

                <div className="mt-10 space-y-6 bg-white p-6 border-2 border-primary rounded-[20px]">
                    <h2 className="text-lg font-semibold text-primary mb-4">
                        รายชื่อพนักงาน
                        <span className="text-sm text-white ml-2 bg-primary py-1 px-4 rounded-full">
                            ทั้งหมด {totalEmployees} คน
                        </span>
                    </h2>

                    {totalEmployees > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
                                {selectedEmployees.map((emp) => (
                                    <ReceiptEmployeeCard
                                        key={emp.name}
                                        name={emp.name}
                                        age={emp.age}
                                        gender={emp.gender}
                                        career={emp.career}
                                    />
                                ))}
                            </div>

                            {/* ✅ สรุปค่าใช้จ่าย */}
                            <div className="mt-10 border-t border-b py-6 text-sm text-primary space-y-2 px-4 ">
                                <h3 className="text-[18px] font-semibold text-primary mb-4">สรุปค่าใช้จ่าย</h3>
                                <div className='mx-16'>
                                    <div className="flex justify-between mb-2">
                                        <span>ค่าจ้างพนักงาน ({employeeCost} บาท × {totalEmployees} คน)</span>
                                        <span>{totalCost.toLocaleString()} บาท</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>ค่ามัดจำ ({depositRate * 100}%)</span>
                                        <span>{deposit.toLocaleString()} บาท</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-green-600">
                                        <span>ค่าใช้จ่ายสุทธิ (หักมัดจำแล้ว)</span>
                                        <span>{finalCost.toLocaleString()} บาท</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">*หมายเหตุ: หักจากค่ามัดจำที่จ่ายไว้</p>
                                </div>
                            </div>

                            <p className="text-center text-gray-500 mt-8">
                                ขอบคุณที่เลือกไว้ใจ
                            </p>

                            <div className="flex justify-center mt-6">
                                <button
                                    onClick={() => navigate('/')}
                                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                >
                                    หน้าหลัก
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-gray-500">ไม่มีพนักงานที่ถูกเลือกไว้</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Receipt;
