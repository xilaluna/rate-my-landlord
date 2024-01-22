import { z } from "zod";

const postFormSchema = z.object({
    streetAddress: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1).max(2),
    postalCode: z.string().min(1),
    title: z.string().min(2),
    content: z.string().min(10),
});

export default postFormSchema;
