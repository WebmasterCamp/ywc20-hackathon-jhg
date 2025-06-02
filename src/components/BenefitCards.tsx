import React from 'react';
import { ShieldCheck, Users, PiggyBank, BarChart2, Star, Heart } from 'lucide-react';

const BenefitCards: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: '✅ ได้คนที่พร้อมลุยงานทันที',
      description: 'แรงงานทุกคนผ่านการอบรมและคัดกรองด้านวินัย ทัศนคติ และความสามารถ พร้อมเริ่มงานได้เลยโดยไม่ต้องเทรนนาน',
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-white" />,
      title: '💰 ลดหย่อนภาษีได้สูงสุด 50% จากรายจ่ายค่าจ้างแรงงานพ้นโทษ',
      description: 'หักลดหย่อนได้ ร้อยละ 50 ของค่าใช้จ่าย หากจ้างผู้พ้นโทษที่พ้นไม่เกิน 3 ปี และจัดทำรายงานการรับเข้าทำงานตามที่กำหนด',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: '🛡️ มีกองทุนป้องกันความเสี่ยงสำหรับนายจ้าง',
      description: 'ในกรณีที่แรงงานกระทำผิดซ้ำในคดีเดิมหลังเข้าทำงาน องค์กรของคุณจะได้รับการดูแลจากกองทุน เพื่อลดผลกระทบและความเสียหายที่อาจเกิดขึ้น',
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: '📊 เรามีระบบติดตามแบบมืออาชีพ',
      description: 'เราประเมินผลการทำงานรายเดือน พร้อมให้คำแนะนำทั้งนายจ้างและแรงงาน เพื่อให้ทุกอย่างเดินหน้าอย่างมั่นใจ',
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: '🌟 องค์กรของคุณจะกลายเป็นแบบอย่าง',
      description: 'แบรนด์ของคุณจะถูกจดจำในฐานะผู้นำด้านการให้โอกาสและสร้างคุณค่าใหม่ให้สังคม',
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: '❤️ คุณอาจเปลี่ยนแค่ชีวิตเดียว…แต่มันเปลี่ยนทั้งครอบครัวเขา',
      description: 'แค่เปิดประตูบานเดียว องค์กรคุณก็กลายเป็นจุดเริ่มต้นของการกลับมาใช้ชีวิตอย่างมีความหมาย',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="flex items-start gap-4 border border-primary rounded-xl p-6 bg-white shadow-md"
        >
          <div className="bg-primary rounded-full p-3">
            {benefit.icon}
          </div>
          <div>
            <h3 className="text-base font-semibold text-primary">{benefit.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitCards;
