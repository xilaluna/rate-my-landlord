import { getPost } from "~/lib/posts";

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  if (!post) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}
