import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import employees from '@/data/dataworker';

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
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import images from '../assets';
import Navbaruser from '@/components/Navbar/Navbaruser';
import { Input } from '@/components/ui/input';
import { JusticeHiringTip } from '@/components/่justiceHiringTip';

// ✅ Schema
const formSchema = z.object({
    career: z.string().min(1, { message: 'กรุณาเลือกประเภทงาน' }),
    gender: z.string().min(1, { message: 'กรุณาเลือกเพศ' }),
    ageRange: z.string().min(1, { message: 'กรุณาเลือกช่วงอายุ' }),
    peopleCount: z.string().min(1, { message: 'กรุณาเลือกจำนวนคน' }),
    description: z.string().optional(),
});

const careers = Array.from(new Set(employees.map((emp) => emp.career)));

function isAgeInRange(age: number, range: string): boolean {
    switch (range) {
        case '18-25':
            return age >= 18 && age <= 25;
        case '26-35':
            return age >= 26 && age <= 35;
        case '36-45':
            return age >= 36 && age <= 45;
        case '46-55':
            return age >= 46 && age <= 55;
        case '56+':
            return age >= 56;
        default:
            return false;
    }
}

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

    const watchCareer = form.watch('career');
    const watchGender = form.watch('gender');
    const watchAgeRange = form.watch('ageRange');
    const watchPeopleCount = form.watch('peopleCount');

    const peopleCountNum = Number(watchPeopleCount);
    const matchedCount = useMemo(() => {
        return employees.filter((emp) => {
            if (!watchCareer || !watchGender || !watchAgeRange) return false;
            return (
                emp.career === watchCareer &&
                emp.gender === watchGender &&
                isAgeInRange(emp.age, watchAgeRange)
            );
        }).length;
    }, [watchCareer, watchGender, watchAgeRange]);


    const onSubmit = (data: FormValues) => {
        const filtered = employees.filter((emp) => {
            return (
                emp.career === data.career &&
                emp.gender === data.gender &&
                isAgeInRange(emp.age, data.ageRange)
            );
        });

        const selected = filtered.slice(0, Number(data.peopleCount)); // จำกัดจำนวนคน

        console.log('Matched:', selected);

        // เก็บลง localStorage
        localStorage.setItem('selectedEmployees', JSON.stringify(selected));

        // นำไปหน้า deposit
        navigate('/deposit');
    };


    return (
        <>
            <JusticeHiringTip />
            <div className="min-h-screen">
                <Navbaruser />
                <div className="mt-32 w-full items-center justify-center bg-white px-4 md:px-46">
                    <div className="rounded-[20px] border-2 border-[#1E1E1E] py-12">
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
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-primary">
                                                    ประเภทงาน
                                                </FormLabel>
                                                <FormControl>
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        value={field.value}
                                                    >
                                                        <SelectTrigger className="w-[150px] rounded-[40px] border-primary">
                                                            <SelectValue placeholder="เลือกประเภทงาน" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {careers.map((career) => (
                                                                <SelectItem key={career} value={career}>
                                                                    {career}
                                                                </SelectItem>
                                                            ))}
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
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-primary">
                                                    เพศ
                                                </FormLabel>
                                                <FormControl>
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        value={field.value}
                                                    >
                                                        <SelectTrigger className="w-[150px] rounded-[40px] border-primary">
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
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-primary">
                                                    ช่วงอายุ
                                                </FormLabel>
                                                <FormControl>
                                                    <Select
                                                        onValueChange={
                                                            field.onChange
                                                        }
                                                        value={field.value}
                                                    >
                                                        <SelectTrigger className="w-[150px] rounded-[40px] border-primary">
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
                                    render={({ field }) => {
                                        const maxCount = matchedCount;

                                        // ตั้งค่า peopleCount เมื่อ matchedCount เปลี่ยน
                                        useEffect(() => {
                                            if (maxCount === 0 && field.value !== '0') {
                                                field.onChange('0');
                                            } else if (maxCount > 0) {
                                                const val = Number(field.value);
                                                if (val < 1 || val > maxCount) {
                                                    field.onChange('1');
                                                }
                                            }
                                        }, [maxCount, field]);

                                        let value = Number(field.value);
                                        if (isNaN(value)) value = maxCount === 0 ? 0 : 1;

                                        const handleIncrease = () => {
                                            if (value < maxCount) {
                                                field.onChange(String(value + 1));
                                            }
                                        };
                                        const handleDecrease = () => {
                                            if (value > 0) {
                                                field.onChange(String(value - 1));
                                            }
                                        };

                                        return (
                                            <FormItem>
                                                <FormLabel className="text-primary">
                                                    จำนวนคน
                                                </FormLabel>
                                                <FormControl>
                                                    <div className="flex w-24 items-center rounded-[40px] border border-primary ">
                                                        <button
                                                            type="button"
                                                            onClick={handleDecrease}
                                                            disabled={value <= 0}
                                                            className={`px-1 text-2xl font-bold text-primary select-none ${value <= 0 ? 'cursor-not-allowed opacity-50' : ''
                                                                }`}
                                                            tabIndex={-1}
                                                        >
                                                            -
                                                        </button>

                                                        <Input
                                                            {...field}
                                                            type="number"
                                                            min={0}
                                                            max={maxCount}
                                                            className="rounded-[40px] border-none text-center focus:ring-0 focus:outline-none"
                                                            value={value}
                                                            onChange={(e) => {
                                                                const val = e.target.value;
                                                                const num = Number(val);
                                                                if (val === '') {
                                                                    field.onChange(maxCount === 0 ? '0' : '1');
                                                                } else if (!isNaN(num) && num >= 0 && num <= maxCount) {
                                                                    field.onChange(val);
                                                                }
                                                            }}
                                                            disabled={maxCount === 0}
                                                        />

                                                        <button
                                                            type="button"
                                                            onClick={handleIncrease}
                                                            disabled={value >= maxCount || maxCount === 0}
                                                            className={`rounded-[40px] px-1 text-2xl font-bold text-primary select-none ${value >= maxCount || maxCount === 0 ? 'cursor-not-allowed opacity-50' : ''
                                                                }`}
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

                            {watchCareer && watchGender && watchAgeRange && (
                                <p className="text-sm text-gray-600">
                                    ในสายงานนี้มีคนที่ตรงกับเงื่อนไข {matchedCount} คน
                                </p>
                            )}
                            {/* รายละเอียดเพิ่มเติม */}
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-primary">
                                            รายละเอียดเพิ่มเติม
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="ความต้องการเพิ่มเติม"
                                                className="min-h-[120px] resize-none border-primary"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {peopleCountNum === 0 && watchCareer && watchGender && watchAgeRange && (
                                <p className="text-center text-red-600 mb-2">ขออภัยค่ะ บุคลากรตอนนี้ไม่เพียงพอ</p>
                            )}

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 p-4 rounded-xl shadow-sm flex items-start space-x-3">
                                <div className="text-2xl">💰</div>
                                <div className="text-sm leading-relaxed">
                                    <p>
                                        แค่จ้างผู้ผ่านกระบวนการยุติธรรมที่ผ่านกระบวนการมาแล้ว 1 ปี ด้วยเงินเดือน <strong>15,000 บาท</strong> เป็นเวลา <strong>6 เดือน</strong><br />
                                        👉 คุณสามารถ <strong className="text-green-600">ลดหย่อนภาษีได้ถึง 45,000 บาท</strong> ต่อปี!
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button
                                    type="submit"
                                    disabled={peopleCountNum === 0 || form.formState.isSubmitting}
                                    className="w-[140px] item-center bg-[#FB8A44] text-white hover:bg-[#FB8A44]/80 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    ส่งข้อมูล
                                </Button>
                            </div>

                        </form>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default FindJob;