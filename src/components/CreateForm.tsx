"use client";

import { useFormState } from "react-dom";
import { Button } from "~/components/ui/button";
import { createPost } from "~/server/posts";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";

export default function CreateForm() {
  const [formState, formAction] = useFormState(createPost, {
    message: "",
    errors: {
      streetAddress: "",
      city: "",
      state: "",
      postalCode: "",
      title: "",
      content: "",
    },
  });
  return (
    <form
      action={formAction}
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
          required
          hasError={!!formState.errors.streetAddress}
        />
        {formState.errors.streetAddress && (
          <span className="text-red-500">{formState.errors.streetAddress}</span>
        )}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="city">City</Label>
        <Input
          type="text"
          id="city"
          placeholder="Your city"
          name="city"
          required
          hasError={!!formState.errors.city}
        />
        {formState.errors.city && (
          <span className="text-red-500">{formState.errors.city}</span>
        )}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="state">State</Label>
        <Input
          type="text"
          id="state"
          placeholder="Your state"
          name="state"
          required
          hasError={!!formState.errors.state}
        />
        {formState.errors.state && (
          <span className="text-red-500">{formState.errors.state}</span>
        )}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="postalCode">Zip Code</Label>
        <Input
          type="text"
          id="postalCode"
          placeholder="Your zip code"
          name="postalCode"
          required
          hasError={!!formState.errors.postalCode}
        />
        {formState.errors.postalCode && (
          <span className="text-red-500">{formState.errors.postalCode}</span>
        )}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="The title of the post"
          name="title"
          required
          hasError={!!formState.errors.title}
        />
        {formState.errors.title && (
          <span className="text-red-500">{formState.errors.title}</span>
        )}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="message">Content</Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
          name="content"
          required
          hasError={!!formState.errors.content}
        />
        {formState.errors.content && (
          <span className="text-red-500">{formState.errors.content}</span>
        )}
      </div>
      <span className="text-red-500">{formState?.message}</span>
      <Button type="submit">Submit Post</Button>
    </form>
  );
}
