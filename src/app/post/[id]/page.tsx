import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getPost } from "~/server/posts";

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  if (!post) {
    return <div>loading...</div>;
  }
  console.log(post.user.username);
  return (
    <main className="flex flex-col items-center space-y-5 py-5">
      <Card className="max-w-xl" key={post.post.id}>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={post.user?.imageUrl} />
              <AvatarFallback>
                {post.user?.username?.slice(0, 1)}
              </AvatarFallback>
            </Avatar>
            <p className="">{post.user.username}</p>
          </div>
          <CardTitle>{post.post.title}</CardTitle>
          <CardDescription>
            {post.post.streetAddress}, {post.post.city}, {post.post.state}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{post.post.content}</p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}
