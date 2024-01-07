'use server';

import { db } from "~/lib/prisma";
// import { z  } from "zod";

// const PostSchema = z.object({
//   id: z.string(),
//   customerId: z.string(),
//   amount: z.coerce.number(),
//   status: z.enum(['pending', 'paid']),
//   date: z.string(),
// });

export async function getPosts() {
  const posts = await db.post.findMany();
  return posts;
};

export async function createPost(formData: FormData ){
  const rawFormData = {
    streetAddress: formData.get('streetAddress'),
    city: formData.get('city'),
    state: formData.get('state'),
    postalCode: formData.get('postalCode'),
    title: formData.get('title'),
    content: formData.get('content'),
  };
  console.log(rawFormData);
}