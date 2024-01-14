import { createPost } from "~/lib/posts";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";

export default function CreateForm() {
  return (
    <form
      action={createPost}
      id="create-post-form"
      className="flex flex-col space-y-3"
    >
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="streetAddress">Address</Label>
        <Input
          type="text"
          id="streetAddress"
          placeholder="Your street address"
          name="streetAddress"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="city">City</Label>
        <Input type="text" id="city" placeholder="Your city" name="city" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="state">State</Label>
        <Input type="text" id="state" placeholder="Your state" name="state" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="postalCode">Zip Code</Label>
        <Input
          type="text"
          id="postalCode"
          placeholder="Your zip code"
          name="postalCode"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="The title of the post"
          name="title"
        />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Content</Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
          name="content"
        />
      </div>
    </form>
  );
}
