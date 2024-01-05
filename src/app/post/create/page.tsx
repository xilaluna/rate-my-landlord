export default async function NewPost() {
  async function createPost() {
    "use server";
    console.log("create post");
  }
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
            className="input input-bordered col-span-6"
          />
          <input
            type="text"
            placeholder="City"
            className="input input-bordered col-span-2"
          />
          <input
            type="text"
            placeholder="State"
            className="input input-bordered col-span-2"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="input input-bordered col-span-2"
          />
        </div>
        <div className="grid grid-cols-6 gap-2">
          <h3 className="col-span-6">Title</h3>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered col-span-6"
          />
        </div>
        <div className="grid grid-cols-6 gap-2">
          <h3 className="col-span-6">Content</h3>
          <textarea
            className="textarea textarea-bordered col-span-6"
            placeholder="Content"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Submit Post
        </button>
      </form>
    </main>
  );
}
