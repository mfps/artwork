import { z } from 'zod';

export const registerSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    displayName: z
      .string()
      .min(2, 'Display name must be at least 2 characters')
      .max(30, 'Display name cannot exceed 30 characters'),
    age: z
      .number({ message: 'Age is required' })
      .min(13, 'Must be at least 13 years old'),
    email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterModel = z.infer<typeof registerSchema>;
