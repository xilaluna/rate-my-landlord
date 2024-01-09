'use server';

import { db } from "~/lib/prisma";
import { z  } from "zod";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


// Define the shape of the data for a new post
const PostSchema = z.object({
  streetAddress: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  title: z.string(),
  content: z.string(),
});


// Get all posts from the database
export async function getPosts() {
  const posts = await db.post.findMany();
  return posts;
};

// Create a new post in the database
export async function createPost(formData: FormData ){
  try {
    const { streetAddress, city, state, postalCode, title, content } = PostSchema.parse(Object.fromEntries(formData));
    const post = await db.post.create({
      data: {
        title,
        content,
        streetAddress,
        city,
        state,
        postalCode,
      }
    });
    console.log(post);
    revalidatePath('/');
    redirect('/');
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}