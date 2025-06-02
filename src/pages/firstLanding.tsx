import BenefitCards from "@/components/BenefitCards";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import images from '../assets';

export const Landing = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex min-h-screen w-full items-center justify-center bg-w">
                <div className="text-center w-full lg:w-auto flex flex-col lg:flex-row gap-[25px]">
                    <div className="w-full flex flex-col gap-[25px] md:items-start">
                        <div className="text-[64px] font-semibold text-center lg:text-left w-full lg:w-auto">คุณบ่นว่า <br />“หาคนทำงานไม่ได้”</div>
                        <div className="w-full lg:w-auto flex justify-center items-center">
                            <div className="w-full lg:w-auto max-w-[400px] text-xl lg:text-left md:max-w-[600px] lg:max-w-[400px] xl:max-w-[800px]">คุณบ่นว่า “หาคนทำงานไม่ได้” แต่คุณไม่เคยมองอดีตผู้ต้องขังยาเสพติดที่พร้อมพิสูจน์ตัวเอง เราไม่ได้แค่ส่งแรงงาน — เราส่งคนที่ทำให้องค์กรคุณ “กลับมาเชื่อในคน” อีกครั้ง</div>
                        </div>
                        <div className="flex gap-[25px] justify-center lg:justify-start items-center lg:items-start w-full lg:w-auto">
                            <Button onClick={() => {
                                navigate('/company-login');
                            }} className="rounded-[40px] text-[18px] px-7 text-white bg-[#FB8A44] hover:bg-[#FB8A44]/90">
                                หาแรงงานที่พร้อมเริ่มใหม่
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <img src={images.handshake} alt="group of people" className="object-cover" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center ">
                <img
                    src={images.rr}
                    className="w-auto mb-10 cursor-pointer transition"
                />

            </div><div className="text-center text-[20px] font-semibold mt-4">
                <div className="text-white bg-primary mx-64 px-2 py-4 rounded-lg">แพลตฟอร์มที่เชื่อมต่ออดีตผู้ต้องขังยาเสพติดกับนายจ้าง</div>
            </div>
            <div className=" mx-64 mb-12">
                            <BenefitCards />

            </div>

            <hr className="border-black border" />
            <div className="bg-[#398466] h-[100px] sticky flex justify-around items-center">
                <div className="flex gap-2 items-center text-white">
                    <img src={images.handshake} alt="group of people" className="object-cover size-10" />
                    <div>ไว้ใจ.in.th</div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className="text-white">
                    <div>
                        Contact
                    </div>
                    <div>
                        Gmail: Support@waijai.in.th
                    </div>
                    <div>
                        เบอร์โทร: 063-556-5555
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;