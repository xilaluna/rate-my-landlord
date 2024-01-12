import { createPost } from "~/lib/posts";

export default async function NewPost() {
  return (
    <main className="flex flex-col items-center space-y-5 py-5">
      <form
        action={createPost}
        className="w-full max-w-2xl space-y-5 border p-4"
      >
        <h2 className="text-2xl">Create a Post</h2>
        <div className="grid grid-cols-6 gap-2">
          <h3 className="col-span-6 pl-1">Address</h3>
          <input
            type="text"
            placeholder="Street Address"
            name="streetAddress"
          />
          <input type="text" placeholder="City" name="city" />
          <input type="text" placeholder="State" name="state" />
          <input type="text" placeholder="Zip Code" name="postalCode" />
        </div>
        <div className="grid grid-cols-6 gap-2">
          <h3 className="col-span-6">Title</h3>
          <input type="text" placeholder="Title" name="title" />
        </div>
        <div className="grid grid-cols-6 gap-2">
          <h3 className="col-span-6">Content</h3>
          <textarea placeholder="Content" name="content"></textarea>
        </div>
        <button type="submit">Submit Post</button>
      </form>
    </main>
  );
}
