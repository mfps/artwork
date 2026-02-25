import { z } from 'zod';

export const artworkFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  year: z.string().min(1, 'Year is required').regex(/^\d{4}$/, 'Enter a 4-digit year'),
  medium: z.string().min(1, 'Medium is required'),
  dimensions: z.string().optional().default(''),
  price: z
    .string()
    .min(1, 'Price is required')
    .regex(/^\d+(\.\d{1,2})?$/, 'Enter a valid price'),
  description: z.string().optional().default(''),
  collection: z.string().optional().default(''),
  status: z.enum(['Available', 'Sold', 'Reserved']),
  category: z.string().optional().default(''),
  location: z.string().optional().default(''),
});

export type ArtworkFormModel = z.infer<typeof artworkFormSchema>;
