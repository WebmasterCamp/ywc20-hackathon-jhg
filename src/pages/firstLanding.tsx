import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export const Landing = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex min-h-screen w-full items-center justify-center bg-w">
                <div className="text-center w-full lg:w-auto flex flex-col lg:flex-row gap-[25px]">
                    <div className="w-full flex flex-col gap-[25px] md:items-start">
                        <div className="text-[64px] font-semibold text-center lg:text-left w-full lg:w-auto">WHO AM I</div>
                        <div className="w-full lg:w-auto flex justify-center items-center">
                            <div className="w-full lg:w-auto max-w-[400px] text-xl lg:text-left md:max-w-[600px] lg:max-w-[400px] xl:max-w-[800px]">สวัสดีLorem, ipsum dolor sit amet consectetur adipisicing elit. Harum blanditiis quos aliquid repellendus autem atque distinctio delectus, dolorem hic tempore saepe ipsam incidunt laboriosam rerum eos molestias. Perspiciatis, suscipit voluptatem?</div>
                        </div>
                        <div className="flex gap-[25px] justify-center lg:justify-start items-center lg:items-start w-full lg:w-auto">
                            <Button onClick={() => {
                                navigate('/company-login');
                            }} className="rounded-[40px] text-white bg-[#FB8A44] hover:bg-[#FB8A44]/90">
                                จ้างงาน
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <img src="/public/handshake.svg" alt="group of people" className="object-cover" />
                    </div>
                </div>
            </div>
            <hr className="border-black border" />
            <div className="bg-[#398466] h-[100px] sticky flex justify-around items-center">
                <div className="flex gap-2 items-center text-white">
                    <img src="/public/handshake.svg" alt="group of people" className="object-cover size-10" />
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
                        Gmail: ซัพพอร์ต@gmail.com
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