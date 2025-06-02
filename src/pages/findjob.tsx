import React from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigate} from 'react-router';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import images from '../assets';
import Navbaruser from '@/components/Navbar/Navbaruser';
import {Input} from '@/components/ui/input';

// ✅ Schema
const formSchema = z.object({
    career: z.string().min(1, {message: 'กรุณาเลือกประเภทงาน'}),
    gender: z.string().min(1, {message: 'กรุณาเลือกเพศ'}),
    ageRange: z.string().min(1, {message: 'กรุณาเลือกช่วงอายุ'}),
    peopleCount: z.string().min(1, {message: 'กรุณาเลือกจำนวนคน'}),
    description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const FindJob: React.FC = () => {
    const navigate = useNavigate();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            career: '',
            gender: '',
            ageRange: '',
            peopleCount: '1',
            description: '',
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
        navigate('/adminconfirm');
    };

    return (
        <div className="min-h-screen">
            <Navbaruser />
            <div className="mt-32 w-full items-center justify-center bg-white px-4 md:px-16">
                <div className="rounded-[20px] border-2 border-[#007AFF] py-12">
                    <img
                        src={images.status1}
                        alt="status"
                        className="mx-auto w-full max-w-md"
                    />
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex w-full flex-col space-y-6 pt-8"
                    >
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="flex flex-wrap gap-4">
                                {/* ประเภทงาน */}
                                <FormField
                                    control={form.control}
                                    name="career"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-[#007AFF]">
                                                เลือกประเภทงาน
                                            </FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    value={field.value}
                                                >
                                                    <SelectTrigger className="w-full rounded-[40px] border-[#007AFF]">
                                                        <SelectValue placeholder="เลือกประเภทงาน" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="ก่อสร้าง">
                                                            ก่อสร้าง
                                                        </SelectItem>
                                                        <SelectItem value="โรงงาน">
                                                            โรงงาน
                                                        </SelectItem>
                                                        <SelectItem value="แรงงานทั่วไป">
                                                            แรงงานทั่วไป
                                                        </SelectItem>
                                                        <SelectItem value="ทำความสะอาด">
                                                            ทำความสะอาด
                                                        </SelectItem>
                                                        <SelectItem value="ส่งของ/ขนส่ง">
                                                            ส่งของ/ขนส่ง
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* เพศ */}
                                <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-[#007AFF]">
                                                เพศ
                                            </FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    value={field.value}
                                                >
                                                    <SelectTrigger className="w-full rounded-[40px] border-[#007AFF]">
                                                        <SelectValue placeholder="เลือกเพศ" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="male">
                                                            ชาย
                                                        </SelectItem>
                                                        <SelectItem value="female">
                                                            หญิง
                                                        </SelectItem>
                                                        <SelectItem value="other">
                                                            ไม่ระบุ
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* ช่วงอายุ */}
                                <FormField
                                    control={form.control}
                                    name="ageRange"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className="text-[#007AFF]">
                                                ช่วงอายุ
                                            </FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    value={field.value}
                                                >
                                                    <SelectTrigger className="w-full rounded-[40px] border-[#007AFF]">
                                                        <SelectValue placeholder="เลือกช่วงอายุ" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="18-25">
                                                            18-25
                                                        </SelectItem>
                                                        <SelectItem value="26-35">
                                                            26-35
                                                        </SelectItem>
                                                        <SelectItem value="36-45">
                                                            36-45
                                                        </SelectItem>
                                                        <SelectItem value="46-55">
                                                            46-55
                                                        </SelectItem>
                                                        <SelectItem value="56+">
                                                            56+
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* จำนวนคน */}
                            <FormField
                                control={form.control}
                                name="peopleCount"
                                render={({field}) => {
                                    // Convert string to number (default to 1)
                                    const value = Number(field.value) || 1;

                                    // Handlers for plus and minus
                                    const handleIncrease = () => {
                                        if (value < 50)
                                            field.onChange(String(value + 1));
                                    };
                                    const handleDecrease = () => {
                                        if (value > 1)
                                            field.onChange(String(value - 1));
                                    };

                                    return (
                                        <FormItem>
                                            <FormLabel className="text-[#007AFF]">
                                                จำนวนคน
                                            </FormLabel>
                                            <FormControl>
                                                <div className="flex w-24 items-center rounded-[40px] border border-[#007AFF]">
                                                    <button
                                                        type="button"
                                                        onClick={handleDecrease}
                                                        className="px-1 text-2xl font-bold text-[#007AFF] select-none"
                                                        tabIndex={-1}
                                                    >
                                                        -
                                                    </button>

                                                    <Input
                                                        {...field}
                                                        type="number"
                                                        min={1}
                                                        max={50}
                                                        className="rounded-[40px] border-none text-center focus:ring-0 focus:outline-none"
                                                        value={value}
                                                        onChange={(e) => {
                                                            const val =
                                                                e.target.value;
                                                            if (val === '') {
                                                                field.onChange(
                                                                    '1',
                                                                );
                                                            } else {
                                                                const num =
                                                                    Number(val);
                                                                if (
                                                                    num >= 1 &&
                                                                    num <= 50
                                                                ) {
                                                                    field.onChange(
                                                                        val,
                                                                    );
                                                                }
                                                            }
                                                        }}
                                                    />

                                                    <button
                                                        type="button"
                                                        onClick={handleIncrease}
                                                        className="rounded-[40px] px-1 text-2xl font-bold text-[#007AFF] select-none"
                                                        tabIndex={-1}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    );
                                }}
                            />
                        </div>

                        {/* รายละเอียดเพิ่มเติม */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="text-[#007AFF]">
                                        รายละเอียดเพิ่มเติม
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="ความต้องการเพิ่มเติม"
                                            className="min-h-[120px] resize-none border-[#007AFF]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-blue-500 text-white hover:bg-blue-600"
                        >
                            ส่งข้อมูล
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default FindJob;
