// components/JusticeHiringTip.tsx
import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const JusticeHiringTip = () => {
    useEffect(() => {
        MySwal.fire({
            title: "💡 รู้หรือไม่?",
            html: (
                <div className="text-left text-sm leading-relaxed">
                    <p className="mb-2">
                        ✅ หากบริษัทของคุณจ้างงานผู้ที่ผ่านกระบวนการยุติธรรม บริษัทจะได้รับประโยชน์ในด้าน
                        <strong>ความรับผิดชอบต่อสังคม (CSR)</strong>
                    </p>
                    <p>
                        💰 และถ้าจ้างผู้ผ่านกระบวนการยุติธรรมที่ผ่านกระบวนการมาแล้วไม่เกิน 3 ปี
                        บริษัทสามารถ<strong>ลดหย่อนภาษีเงินได้จำนวนร้อยละ 50 </strong>
                        ของค่าใช้จ่ายในการจ้างงาน!
                    </p>
                </div>
            ),
            confirmButtonText: "รับทราบแล้ว",
            customClass: {
                popup: "rounded-xl p-6",
                confirmButton: "bg-primary text-white px-4 py-2 rounded-md",
            },
            buttonsStyling: false,
        });
    }, []);

    return null;
};

export default JusticeHiringTip;