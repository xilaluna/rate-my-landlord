import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";

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
      </Card>
    </main>
  );
}
