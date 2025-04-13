import Image from "next/image";
import { Header } from "./components/Header";
import { auth } from "./utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if(session) redirect("/home")
  return (
    <>
      <div>
        <Header/>
      </div>
    </>
  );
}
