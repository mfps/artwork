import { z } from 'zod';

export const profileSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional().default(''),
  bio: z.string().optional().default(''),
});

export type ProfileFormModel = z.infer<typeof profileSchema>;
