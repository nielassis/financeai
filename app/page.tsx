import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import NavBar from "./_components/navBar";

const Home = async () => {
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

export default Home;
