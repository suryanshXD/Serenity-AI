import { auth, signIn, signOut } from "@/app/utils/auth";
import { Button, buttonVariants } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function SignIn() {
  const session = await auth();
  if (session) {
    redirect("/home");
  }
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <div className="flex flex-col justify-center items-center h-screen">
        <Card className="px-10 shadow-2xl">
          <div className="font-semibold  text-2xl mb-4">
            Continue with Google to get started.
          </div>
          <Button variant={"outline"} className="py-5 text-md">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/948/549/non_2x/google-logo-on-transparent-white-background-free-vector.jpg"
              alt="google logo"
              className="size-6 rounded-lg"
            />
            Continue with Google
          </Button>
          <Link href={'/'} className={buttonVariants()}><ArrowLeft/>Return</Link>
        </Card>
      </div>
    </form>
  );
}
