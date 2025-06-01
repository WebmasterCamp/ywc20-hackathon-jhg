import {z} from 'zod';

export const jobRegisterSchema = z.object({
    fullName: z.string().min(1, 'กรุณากรอกชื่อ-นามสกุล'),
    phone: z
        .string()
        .regex(
            /^\d{10}$/,
            'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลักตัวเลขเท่านั้น)',
        ),
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        message: 'กรุณากรอกอีเมลให้ถูกต้อง',
    }),
    age: z
        .number({invalid_type_error: 'กรุณากรอกอายุเป็นตัวเลข'})
        .min(18, 'อายุต้องไม่น้อยกว่า 18 ปี')
        .max(100, 'อายุไม่สมเหตุสมผล'),
    address: z.string().min(1, 'กรุณากรอกที่อยู่'),
    workHistory: z.string().optional(),
    skills: z.array(z.string()).min(1, 'กรุณาเลือกความสามารถอย่างน้อย 1 อย่าง'),
});

export type JobRegisterFormValues = z.infer<typeof jobRegisterSchema>;
