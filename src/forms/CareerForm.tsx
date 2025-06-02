import React, { useState, useEffect } from 'react';

interface CareerEntry {
    career: string;
    gender: string;
    peopleCount: number;
}

interface CareerFormProps {
    data: CareerEntry[];
    onChange: (data: CareerEntry[]) => void;
}

const CareerForm: React.FC<CareerFormProps> = ({ data, onChange }) => {
  const careers = ['นักเรียน', 'นักศึกษา', 'พนักงานบริษัท'];

    const [selectedCareer, setSelectedCareer] = useState(data[0]?.career || '');
    const [gender, setGender] = useState(data[0]?.gender || '');
    const [peopleCount, setPeopleCount] = useState(data[0]?.peopleCount || 1);

  // ใช้ useEffect เช็คก่อนส่งข้อมูลกลับแค่เมื่อข้อมูลเปลี่ยนจริง
  useEffect(() => {
    // สร้าง obj ใหม่
    const newData = [{ career: selectedCareer, gender, peopleCount }];

    // เปรียบเทียบกับ data ที่ได้มาจาก props
    const isSame =
      data.length === newData.length &&
      data.every((d, i) =>
        d.career === newData[i].career &&
        d.gender === newData[i].gender &&
        d.peopleCount === newData[i].peopleCount
      );

        if (!isSame) {
            onChange(newData);
        }
    }, [selectedCareer, gender, peopleCount, data, onChange]);

    return (
        <div className="space-y-4">
            <div className="flex items-end space-x-4">
                {/* สายอาชีพ */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        สายอาชีพ
                    </label>
                    <select
                        className="rounded border px-2 py-1"
                        value={selectedCareer}
                        onChange={(e) => setSelectedCareer(e.target.value)}
                    >
                        <option value="">เลือกสายอาชีพ</option>
                        {careers.map((career, index) => (
                            <option
                                key={index}
                                value={career}
                            >
                                {career}
                            </option>
                        ))}
                    </select>
                </div>

                {/* เพศ */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        เพศ
                    </label>
                    <select
                        className="rounded border px-2 py-1"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">เลือกเพศ</option>
                        <option value="male">ชาย</option>
                        <option value="female">หญิง</option>
                        <option value="other">ไม่ระบุ</option>
                    </select>
                </div>

                {/* จำนวนคน */}
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-medium text-gray-700">
                        จำนวนคน
                    </label>
                    <select
                        className="rounded border px-2 py-1"
                        value={peopleCount}
                        onChange={(e) => setPeopleCount(Number(e.target.value))}
                    >
                        {Array.from({length: 10}, (_, i) => i + 1).map(
                            (num) => (
                                <option
                                    key={num}
                                    value={num}
                                >
                                    {num} คน
                                </option>
                            ),
                        )}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CareerForm;
