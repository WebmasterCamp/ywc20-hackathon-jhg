import React, { useState } from 'react';
import CareerForm from '../forms/CareerForm';
import images from '../assets';
import Navbaruser from '@/components/Navbar/Navbaruser';
import { useNavigate } from 'react-router';

const FineJob: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const [careerData, setCareerData] = useState([
    { career: '', gender: '', peopleCount: 1 },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCareerChange = (data: { career: string; gender: string; peopleCount: number }[]) => {
    setCareerData(data);
  };

  // ตรวจสอบว่ากรอกครบหรือยัง
  const isFormValid = (): boolean => {
    const { title, description } = formData;
    if (!title.trim() || !description.trim()) return false;

    for (const entry of careerData) {
      if (!entry.career || !entry.gender || entry.peopleCount < 1) {
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!isFormValid()) {
    alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
    return;
  }

  const fullData = {
    ...formData,
    careers: careerData,
  };

  console.log('Form submitted:', fullData);

  // 👉 บันทึกลง localStorage (ทับ key เดิมถ้ามี)
  localStorage.setItem('filterConditions', JSON.stringify(fullData.careers));

  // นำทางไปหน้า /adminconfirm
  navigate('/adminconfirm');
};

  return (
    <div>
      <Navbaruser />

      <div className="w-full min-h-screen items-center justify-center bg-white px-4 md:px-32 mt-32">
        <div className="border-2 border-[#007AFF] rounded-[20px] py-12">
          <img src={images.status1} alt="status" className="w-full max-w-md mx-auto" />
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              ชื่อโปรเจกต์ / ตำแหน่งที่ต้องการ
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="เช่น หานักพัฒนา Frontend"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              รายละเอียดเพิ่มเติม
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="อธิบายความต้องการ เช่น ใช้ React, ทำงานแบบ Remote, ฯลฯ"
            ></textarea>
          </div>

          <CareerForm data={careerData} onChange={handleCareerChange} />

          <button
            type="submit"
            disabled={!isFormValid()}
            className={`px-6 py-3 rounded-md shadow transition text-white ${
              isFormValid()
                ? 'bg-primary hover:bg-primary/80'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            ส่งข้อมูล
          </button>
        </form>
      </div>
    </div>
  );
};

export default FineJob;
