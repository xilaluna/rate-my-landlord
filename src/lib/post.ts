import { db } from "~/server/db";

export const getPosts = async () => {
  const posts = await db.post.findMany();
  return posts;
};