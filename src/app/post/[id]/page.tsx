import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { getPost } from "~/server/posts";

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  if (!post) {
    return <div>loading...</div>;
  }
  return (
    <main className="flex flex-col items-center space-y-5 py-5">
      <Card className="max-w-xl" key={post.id}>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>
            {post.streetAddress}, {post.city}, {post.state}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{post.content}</p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}
