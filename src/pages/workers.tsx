import React, { useEffect, useState } from 'react';
import images from '../assets';
import Navbaruser from '@/components/Navbar/Navbaruser';
import employees from '@/data/dataworker';
import EmployeeCard from '../components/Card/EmployeeCard';
import { useNavigate } from 'react-router';
type FilterCondition = {
    career: string;
    gender: 'male' | 'female';
    peopleCount: number;
};


const WorkersPage: React.FC = () => {
    const [matchedEmployees, setMatchedEmployees] = useState<typeof employees>([]);
    const [filteredEmployees, setFilteredEmployees] = useState<typeof employees>([]);
    const [isChanged, setIsChanged] = useState(false);
    const [totalRequestedCount, setTotalRequestedCount] = useState(0);

    const navigate = useNavigate();
    useEffect(() => {
    const raw = localStorage.getItem('filterConditions');
    if (!raw) {
        setMatchedEmployees([]);
        setFilteredEmployees([]);
        setTotalRequestedCount(0);
        return;
    }

    const filters: FilterCondition[] = JSON.parse(raw);
    const totalCount = filters.reduce((sum, condition) => sum + condition.peopleCount, 0);
    setTotalRequestedCount(totalCount);

    let result: typeof employees = [];
    filters.forEach(condition => {
        const matched = employees.filter(e => e.career === condition.career && e.gender === condition.gender);
        result = [...result, ...matched.slice(0, condition.peopleCount)];
    });

    setMatchedEmployees(result);
    setFilteredEmployees(result);
}, []);

    const handleDelete = (nameToDelete: string) => {
        const confirmed = window.confirm('คุณแน่ใจหรือไม่ว่าต้องการลบพนักงานคนนี้?');
        if (confirmed) {
            setFilteredEmployees(prev => {
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
                    <img src={images.status2} alt="status" className="w-full max-w-md mx-auto" />
                </div>

                <div className="mt-10 space-y-6 bg-white p-6 border-2 border-primary rounded-[20px]">
                    <h2 className="text-lg font-semibold text-primary mb-4">
                        รายชื่อพนักงาน
                        <span className="text-sm text-gray-500 ml-2">
                            จำนวน {filteredEmployees.length} / {totalRequestedCount} คน
                        </span>
                    </h2>

                    {filteredEmployees.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
                                {filteredEmployees.map((emp) => (
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

                            {/* แสดงปุ่มเมื่อมีการลบพนักงาน */}
                            {isChanged && (
                                <div className="flex justify-end gap-4 mt-6 mx-4">
                                    <button
                                        onClick={() => {
                                            localStorage.setItem('filteredEmployees', JSON.stringify(filteredEmployees));
                                            setMatchedEmployees(filteredEmployees);
                                            setIsChanged(false);
                                        }}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                    >
                                        บันทึก
                                    </button>
                                    <button
                                        onClick={() => {
                                            setFilteredEmployees(matchedEmployees);
                                            setIsChanged(false);
                                        }}
                                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                                    >
                                        ยกเลิก
                                    </button>
                                </div>
                            )}

                            {/* แสดงปุ่มเมื่อไม่ลบใครเลย */}
                            {!isChanged && filteredEmployees.length === matchedEmployees.length && (
                                <div className="flex justify-end mt-6 mx-4">
                                    <button
                                        onClick={() => {
                                            localStorage.setItem('filteredEmployees', JSON.stringify(filteredEmployees));
                                            navigate('/payment'); // เปลี่ยนหน้า
                                        }}
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                    >
                                        ยืนยัน
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <p className="text-center text-gray-500">ไม่พบข้อมูลพนักงานตามเงื่อนไข</p>
                    )}


                </div>
            </div>
        </div>
    );
};


export default WorkersPage;
