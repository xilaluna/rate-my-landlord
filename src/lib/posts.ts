'use server';

import { db } from "~/lib/prisma";
import { z  } from "zod";

const PostSchema = z.object({
  streetAddress: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  title: z.string(),
  content: z.string(),
});

export async function getPosts() {
  const posts = await db.post.findMany();
  return posts;
};

export async function createPost(formData: FormData ){
  try {
    const validatedData = PostSchema.parse(Object.fromEntries(formData));
    // const rawFormData = {
    //   streetAddress: formData.get('streetAddress'),
    //   city: formData.get('city'),
    //   state: formData.get('state'),
    //   postalCode: formData.get('postalCode'),
    //   title: formData.get('title'),
    //   content: formData.get('content'),
    // };
    console.log(validatedData);
    
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}