import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function EditPost() {
  const { userId } = auth().protect();

  if (!userId) {
    redirect("/");
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">EditPost</h1>
    </div>
  );
}
