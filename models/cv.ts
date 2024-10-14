import { z } from 'zod';

export const CVDataSchema = z.object({
  name: z.string(),
  contact: z.object({
    phone: z.string(),
    email: z.string(),
    github: z.string(),
    linkedin: z.string(),
  }),
  summary: z.string(),
  experience: z.array(
    z.object({
      title: z.string(),
      company: z.string(),
      location: z.string(),
      period: z.string(),
      responsibilities: z.array(z.string()),
    })
  ),
  skills: z.array(z.string()),
  education: z.array(
    z.object({
      institution: z.string(),
      degree: z.string(),
      details: z.string(),
    })
  ),
});

// Derive TypeScript type from Zod schema
export type CVData = z.infer<typeof CVDataSchema>;
