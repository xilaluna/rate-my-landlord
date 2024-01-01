import { getPosts } from "~/lib/post";

export default async function HomePage() {
  const posts = await getPosts();
  return (
    <main className=" flex flex-col items-center space-y-5	py-5">
      {posts.map((post) => (
        <div key={post.id} className="w-full max-w-xl border p-2 md:p-4">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-base">{post.content}</p>
        </div>
      ))}
    </main>
  );
}
