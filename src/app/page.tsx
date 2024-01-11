import { getPosts } from "~/lib/posts";
import Link from "next/link";

export default async function HomePage() {
  const posts = await getPosts();
  if (!posts) {
    return <div>loading...</div>;
  }
  return (
    <main className="flex flex-col items-center space-y-5 py-5">
      {posts.map((post) => (
        <Link
          href={`/post/${post.id}`}
          key={post.id}
          className="w-full max-w-xl border p-4"
        >
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="text-base">{post.content}</p>
        </Link>
      ))}
    </main>
  );
}
