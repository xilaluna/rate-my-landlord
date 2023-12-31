import { getPosts } from "~/lib/post";

export default async function HomePage() {
  const posts = await getPosts();
  return (
    <main>
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-base">{post.content}</p>
        </div>
      ))}
    </main>
  );
}
