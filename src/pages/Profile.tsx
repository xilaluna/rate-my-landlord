import Layout from "@/components/Layout";
import { useSession, signOut } from "next-auth/react";
import Button from "@/components/Button";
const Profile = () => {
  const { data: session, status } = useSession();
  return (
    <Layout>
      {status === "authenticated" ? (
        <div>
          <img src={session?.user?.image?.toString()} /> <br />
          You are signed in as {session?.user?.name} <br />
          <Button text="Log Out" clickHandler={() => signOut()} />
        </div>
      ) : (
        <div>You are not signed in</div>
      )}
    </Layout>
  );
};

export default Profile;
