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

  useEffect(() => {
    const raw = localStorage.getItem('selectedEmployees');
    if (!raw) return;

    const selected = JSON.parse(raw);
    const safeSelected: Employee[] = selected.map((emp: any) => ({
      ...emp,
      gender: isValidGender(emp.gender) ? emp.gender : 'male', // fallback gender
    }));

    setSelectedEmployees(safeSelected);
  }, []);

  return (
    <div>
      <Navbaruser />

      <div className="w-full min-h-screen items-center justify-center bg-white px-4 md:px-32 mt-32">

        <h2 className="text-2xl font-bold text-start text-primary mb-8">
          สรุปรายการว่าจ้าง </h2>
        <div className="mt-10 space-y-6 bg-white p-6 border-2 border-primary rounded-[20px]">
          <h2 className="text-lg font-semibold text-primary mb-4 mb-2">
            รายชื่อพนักงาน
            <span className="text-sm text-gray-500 ml-2  bg-primary text-white py-2 px-4 rounded-full">
              ทั้งหมด {selectedEmployees.length} คน
            </span>
          </h2>

          {selectedEmployees.length > 0 ? (
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

              <div className="flex justify-center mt-6 mx-4">
                <button
                  onClick={() => navigate('/payment')}
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
