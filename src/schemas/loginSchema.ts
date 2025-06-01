import {z} from 'zod';

export const loginSchema = z.object({
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        message: 'กรุณากรอกอีเมลให้ถูกต้อง',
    }),
    password: z.string().min(1, {message: 'กรุณากรอกรหัสผ่าน'}),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
