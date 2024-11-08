import { redirect } from "next/navigation";
import NavBar from "../_components/navBar";
import { auth } from "@clerk/nextjs/server";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <>
      <NavBar />
    </>
  );
};

export default SubscriptionPage;
<>
  <NavBar />
</>;
