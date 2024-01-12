import { getPosts } from "~/lib/posts";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

export default async function HomePage() {
  const posts = await getPosts();
  if (!posts) {
    return <div>loading...</div>;
  }
  return (
    <main className="flex flex-col items-center space-y-5 py-5">
      {posts.map((post) => (
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
          <CardFooter>
            <Link href={`/post/${post.id}`}>
              <Button>View Post</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
}
