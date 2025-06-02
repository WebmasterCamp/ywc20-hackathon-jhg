import React from 'react';

type Props = {
  name: string;
  age: number;
  gender: 'male' | 'female'; 
  career: string;
  onDelete: () => void;
};

const EmployeeCard: React.FC<Props> = ({ name, age, gender, career, onDelete }) => {
  return (
    <div className="relative flex items-center gap-4 border border-primary rounded-xl p-4 text-primary w-full">
      {/* ปุ่ม X */}
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl"
        onClick={onDelete}
        aria-label="ลบ"
      >
        ×
      </button>

      {/* ไอคอน */}
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* รายละเอียด */}
      <div className="text-sm text-primary">
        <div className="font-medium ">ชื่อ - สกุล: {name}</div>
        <div>เพศ: {gender}</div>
        <div>อายุ: {age}</div>
        <div className="text-xs text-gray-500">อาชีพ: {career}</div>
      </div>
    </div>
  );
};

export default EmployeeCard;
