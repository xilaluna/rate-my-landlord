import { auth } from "@clerk/nextjs";

export default function EditPost() {
  auth().protect();

  return (
    <div>
      <h1 className="text-2xl font-bold">EditPost</h1>
    </div>
  );
}
