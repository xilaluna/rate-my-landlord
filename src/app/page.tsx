import { getPosts } from "~/lib/post";

export default async function HomePage() {
  const posts = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">{post.name}</h1>
        </div>
      ))}
    </main>
  );
}
