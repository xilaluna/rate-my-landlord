import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";

import { Button } from "~/components/ui/button";
import CreateForm from "~/components/CreateForm";

export default async function NewPost() {
  return (
    <main className="flex flex-col items-center space-y-5 py-5">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Create a Post</CardTitle>
          <CardDescription>Create a post to share.</CardDescription>
        </CardHeader>
        <CardContent>
          <CreateForm />
        </CardContent>
        <CardFooter>
          <Button form="create-post-form" type="submit">
            Submit Post
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
