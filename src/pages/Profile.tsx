import Layout from "@/components/Layout";
import { useSession, signOut } from "next-auth/react";

const Profile = () => {
  const { data: session, status } = useSession();
  return (
    <Layout>
      {status === "authenticated" ? (
        <div>
          <img src={session?.user?.image?.toString()} /> <br />
          You are signed in as {session?.user?.name} <br />
          <button onClick={() => signOut()}>Log out</button>
        </div>
      ) : (
        <div>You are not signed in</div>
      )}
    </Layout>
  );
};

export default Profile;
