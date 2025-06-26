import { z } from 'zod';

export const registerSchema = z
  .object({
    full_name: z
      .string()
      .min(1, 'Full Name is required')
      .min(10, 'Full Name must be at least 10 characters')
      .max(100, 'Full Name can be max 100 characters'),
    email: z
      .string()
      .min(1, 'Email is required')
      .min(8, 'Email must be 8 character long')
      .max(100, 'Email cannot be more than 100 characters long')
      .email(),
    password: z
      .string()
      .min(1, 'Password required')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
        'Password must contain '
      ),
    confirm_password: z.string().min(1, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ['confirm_password'],
    message: 'Passwords do not match',
  });

export type RegisterFormInputs = z.infer<typeof registerSchema>;
