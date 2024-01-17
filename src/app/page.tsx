import { getPosts } from "~/server/posts";
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
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar";

export default async function HomePage() {
  const posts = await getPosts();
  if (!posts) {
    return <div>loading...</div>;
  }
  return (
    <main className="flex flex-col items-center space-y-5 py-5">
      {posts.map(({ post, user }) => (
        <Card className="w-full max-w-xl" key={post.id}>
          <CardHeader className="flex-row items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>{user?.username?.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                {post.streetAddress}, {post.city}, {post.state}
              </CardDescription>
            </div>
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
