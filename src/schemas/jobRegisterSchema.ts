import {z} from 'zod';

export const jobRegisterSchema = z.object({
    firstName: z.string().min(1, 'กรุณากรอกชื่อ'),
    lastName: z.string().min(1, 'กรุณากรอกนามสกุล'),
    phone: z
        .string()
        .regex(
            /^\d{10}$/,
            'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลักตัวเลขเท่านั้น)',
        ),
    age: z
        .number({invalid_type_error: 'กรุณากรอกอายุเป็นตัวเลข'})
        .min(18, 'อายุต้องไม่น้อยกว่า 18 ปี')
        .max(100, 'อายุไม่สมเหตุสมผล'),
    address: z.string().min(1, 'กรุณากรอกที่อยู่'),
    workHistory: z.string().optional(),
    skills: z.array(z.string()).min(1, 'กรุณาเลือกความสามารถอย่างน้อย 1 อย่าง'),
    gender: z.enum(['ชาย', 'หญิง'], {
        required_error: 'กรุณาเลือกเพศ',
        invalid_type_error: 'กรุณาเลือกเพศให้ถูกต้อง',
    }),
    fileA: z
        .any()
        .refine((file) => file instanceof File || (file && file.length > 0), {
            message: 'กรุณาอัปโหลดไฟล์ A',
        }),
    fileB: z
        .any()
        .refine((file) => file instanceof File || (file && file.length > 0), {
            message: 'กรุณาอัปโหลดไฟล์ B',
        }),
    fileC: z
        .any()
        .refine((file) => file instanceof File || (file && file.length > 0), {
            message: 'กรุณาอัปโหลดไฟล์ C',
        }),
});

export type JobRegisterFormValues = z.infer<typeof jobRegisterSchema>;
