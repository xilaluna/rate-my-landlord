'use server';

import { db } from "~/lib/prisma";

export async function getPosts() {
  const posts = await db.post.findMany();
  return posts;
};

export async function createPost(data: { title: string, content: string }){
  const post = await db.post.create({ data });
  return post;
}