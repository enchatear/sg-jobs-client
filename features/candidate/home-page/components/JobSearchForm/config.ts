import { number, z as zod } from 'zod';

export const jobSearchFormSchema = zod.object({
  title: zod.string(),
  location: zod.object({
    key: number(),
    value: zod.string(),
  }),
  type: zod.object({
    key: number(),
    value: zod.string(),
  }),
});

export type JobSearchFormFields = zod.infer<typeof jobSearchFormSchema>;
