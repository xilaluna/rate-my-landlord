import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getPost } from "~/server/posts";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { deletePost } from "~/server/posts";

export default async function Post({ params }: { params: { id: string } }) {
  const data = await getPost(params.id);
  if (!data) {
    return <div>loading...</div>;
  }

  const deletePostHandler = deletePost.bind(null, data.post.id);

  return (
    <main className="flex flex-col items-center space-y-5 py-5">
      <Card className="w-full max-w-xl" key={data.post.id}>
        <CardHeader>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={data.user?.imageUrl} />
                <AvatarFallback>
                  {data.user?.username?.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
              <UserName
                username={data.user?.username}
                firstName={data.user?.firstName}
                lastName={data.user?.lastName}
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <form action={deletePostHandler}>
                    <button className="text-destructive">Delete Post</button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <CardTitle>{data.post.title}</CardTitle>
          <CardDescription>
            {data.post.streetAddress}, {data.post.city}, {data.post.state}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{data.post.content}</p>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </main>
  );
}

function UserName({
  username,
  firstName,
  lastName,
}: {
  username: string | null;
  firstName: string | null;
  lastName: string | null;
}) {
  if (!username) {
    return (
      <p>
        {firstName} {lastName}
      </p>
    );
  }
  return <p>{username}</p>;
}
