'use server';

import { db } from "~/lib/prisma";
import { z  } from "zod";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth } from "@clerk/nextjs";

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
  try {
    const posts = await db.post.findMany();
    return posts;
  } catch (error) {
    console.error('Error getting posts:', error);
  }
};

// Create a new post in the database
export async function createPost(formData: FormData ){
  try {
    // Parse the form data into the expected shape
    const { streetAddress, city, state, postalCode, title, content } = PostSchema.parse(Object.fromEntries(formData));
    
    // Get the current user's ID and check that they are logged in
    const {userId} = auth()
    if (!userId) throw new Error('Not logged in');
    
    // Create the post
    await db.post.create({
      data: {
        title,
        content,
        userId,
        streetAddress,
        city,
        state,
        postalCode,
      }
    });
    
  } catch (error) {
    return error;
  }

  // Revalidate the cache for the home page
  revalidatePath('/');
  redirect('/');
}