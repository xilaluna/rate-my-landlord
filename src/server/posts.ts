'use server';

import { db } from "~/server/prisma";
import { z  } from "zod";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/server";


const filterUserInfo = (user: User) => {
  return {id: user.id, username: user.username, imageUrl: user.imageUrl, firstName: user.firstName, lastName: user.lastName}
}

// Define the shape of the data for a new post
const PostSchema = z.object({
  streetAddress: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1).max(2),
  postalCode: z.string().min(1),
  title: z.string().min(1),
  content: z.string().min(1),
});


// Get all posts from the database
export async function getPosts() {
  try {

    // Get the first 10 posts from the database
    const posts = await db.post.findMany({
      take: 10,
    });

    // Get the user info for the posts
    const users = (await clerkClient.users.getUserList({
      userId: posts.map((post) => post.userId),
      limit: 10,
    })).map(filterUserInfo);

    return posts.map((post) => ({
      post, 
      user: users.find((user) => user.id === post.userId)
    }));

  } catch (error) {
    console.error('Error getting posts:', error);
  }
};

// Get a single post from the database
export async function getPost(id: string) {
  try {
    const post = await db.post.findUnique({
      where: { id },
    });
    if (!post) throw new Error('Post not found');

    const user = await clerkClient.users.getUser(post.userId);
    if (!user) throw new Error('User not found');

    return { 
      post: post, 
      user: filterUserInfo(user) 
    };
  } catch (error) {
    console.error('Error getting post:', error);
  }
};

export type FormState = {
  message: string;
  errors: {
    streetAddress?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    title?: string;
    content?: string;
  };
};

// Create a new post in the database
export async function createPost(prevState: FormState, formData: FormData ){
  try {
    const {userId} = auth()
    if (!userId) throw new Error('Not logged in');
    
    const { streetAddress, city, state, postalCode, title, content } = PostSchema.parse({
      streetAddress: formData.get('streetAddress'),
      city: formData.get('city'),
      state: formData.get('state'),
      postalCode: formData.get('postalCode'),
      title: formData.get('title'),
      content: formData.get('content'),
    });

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
    if (error instanceof z.ZodError) {
      const errorMap = error.flatten().fieldErrors
      return {
        message: 'Failed', 
        errors: {
          streetAddress: errorMap.streetAddress?.[0], 
          city: errorMap.city?.[0], 
          state: errorMap.state?.[0], 
          postalCode: errorMap.postalCode?.[0], 
          title: errorMap.title?.[0], 
          content: errorMap.content?.[0]
        }
      };
    }
    
    return {message: 'Failed', errors: {}};
  }

  // Revalidate the cache for the home page
  revalidatePath('/');
  redirect('/');
}