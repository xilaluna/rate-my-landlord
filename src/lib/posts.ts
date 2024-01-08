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
    const { streetAddress, city, state, postalCode, title, content } = PostSchema.parse(Object.fromEntries(formData));

    const address = await db.address.create({
      data: {
        streetAddress,
        city,
        state,
        postalCode,
      }
    });
    const post = await db.post.create({
      data: {
        title,
        content,
        address: {
          connect: {
            id: address.id
          }
        }
      }
    });

    
    console.log(post);
    
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}