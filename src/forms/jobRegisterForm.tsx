import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import Swal from 'sweetalert2';
import {
    jobRegisterSchema,
    type JobRegisterFormValues,
} from '@/schemas/jobRegisterSchema'; // ปรับ path ตามโปรเจกต์คุณ
import {useNavigate} from 'react-router';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const skillOptions = [
    {label: 'ช่างไม้', value: 'ช่างไม้'},
    {label: 'ช่างเชื่อม', value: 'ช่างเชื่อม'},
    {label: 'ช่างไฟฟ้า', value: 'ช่างไฟฟ้า'},
    {label: 'ช่างซ่อมรถ', value: 'ช่างซ่อมรถ'},
    {label: 'พนักงานคลังสินค้า', value: 'พนักงานคลังสินค้า'},
    {label: 'IT Support', value: 'IT Support'},
];

export const JobRegisterForm = () => {
    const navigate = useNavigate();
    const form = useForm<JobRegisterFormValues>({
        resolver: zodResolver(jobRegisterSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            age: undefined,
            address: '',
            workHistory: '',
            skills: [],
            gender: undefined,
        },
    });

    const onSubmit = (data: JobRegisterFormValues) => {
        console.log(data);

        // Get existing data from localStorage
        const existingData = JSON.parse(
            localStorage.getItem('jobRegisterData') || '[]',
        );

        // Append new data to the array
        const updatedData = [...existingData, data];

        // Save back to localStorage
        localStorage.setItem('jobRegisterData', JSON.stringify(updatedData));

        Swal.fire({
            title: 'สมัครงานสำเร็จ!',
            text: 'ไฟล์ข้อมูลถูกดาวน์โหลดไปยังเครื่องของคุณแล้ว',
            icon: 'success',
            confirmButtonText: 'ตกลง',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/'); // เปลี่ยนเส้นทางไปยังหน้าแรก
            }
        });
        // ส่งข้อมูลไป backend หรือจัดการต่อได้เลย
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto max-w-md space-y-6"
            >
                {/* ชื่อ-นามสกุล */}
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>ชื่อ</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="กรอกชื่อ"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* นามสกุล */}
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>นามสกุล</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="กรอกสกุล"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* เบอร์โทร */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>เบอร์โทรศัพท์</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="0812345678"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* อีเมล */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>อีเมล</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="กรอกอีเมล"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* อายุ */}
                <FormField
                    control={form.control}
                    name="age"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>อายุ</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="กรอกอายุ"
                                    {...field}
                                    onChange={(e) =>
                                        field.onChange(Number(e.target.value))
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ที่อยู่ */}
                <FormField
                    control={form.control}
                    name="address"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>ที่อยู่</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="กรอกที่อยู่"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ประวัติการทำงาน (optional) */}
                <FormField
                    control={form.control}
                    name="workHistory"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>ประวัติการทำงาน (ถ้ามี)</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="เล่าประสบการณ์การทำงานของคุณ"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ความสามารถพิเศษ (badge multi-select) */}
                <FormField
                    control={form.control}
                    name="skills"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>ความสามารถพิเศษ</FormLabel>
                            <FormControl>
                                <div className="flex flex-wrap gap-2">
                                    {skillOptions.map((skill) => {
                                        const isSelected =
                                            field.value?.includes(
                                                skill.value,
                                            ) ?? false;
                                        return (
                                            <Badge
                                                key={skill.value}
                                                variant={
                                                    isSelected
                                                        ? 'default'
                                                        : 'outline'
                                                }
                                                className={`cursor-pointer px-3 py-1 text-sm transition-colors ${
                                                    isSelected
                                                        ? 'bg-primary text-white'
                                                        : 'hover:bg-muted hover:text-foreground'
                                                }`}
                                                onClick={() => {
                                                    if (isSelected) {
                                                        field.onChange(
                                                            field.value?.filter(
                                                                (v) =>
                                                                    v !==
                                                                    skill.value,
                                                            ),
                                                        );
                                                    } else {
                                                        field.onChange([
                                                            ...(field.value ??
                                                                []),
                                                            skill.value,
                                                        ]);
                                                    }
                                                }}
                                            >
                                                {skill.label}
                                            </Badge>
                                        );
                                    })}
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="gender"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>เพศ</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                value={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="เลือกเพศ" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="ชาย">ชาย</SelectItem>
                                    <SelectItem value="หญิง">หญิง</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ไฟล์ A */}
                <FormField
                    control={form.control}
                    name="fileA"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>ไฟล์ A</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    placeholder="ไฟล์ A"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* ไฟล์ B */}
                <FormField
                    control={form.control}
                    name="fileB"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>ไฟล์ A</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    placeholder="ไฟล์ B"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* ไฟล์ C */}
                <FormField
                    control={form.control}
                    name="fileC"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>ไฟล์ C</FormLabel>
                            <FormControl>
                                <Input
                                    type="file"
                                    placeholder="ไฟล์ C"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full"
                >
                    สมัครงาน
                </Button>
            </form>
        </Form>
    );
};
