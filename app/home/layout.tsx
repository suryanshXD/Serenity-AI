import { redirect } from "next/navigation";
import { auth } from "../utils/auth";
import { Profile } from "../components/Profile";
import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <>
      <div className="flex flex-row justify-between px-20 py-7 shadow-md">
        <Link href={'/home'} className="text-3xl font-semibold pl-10 cursor-po">
          Serenity<span className="text-pink-500">AI</span>
        </Link>
        <div className="flex items-center gap-4">
          <Profile />
        </div>
      </div>
      <div className="ml-1">
      <Sheet>
        <SheetTrigger asChild className="ml-4 mt-4">
          <Button><Menu/></Button>
            </SheetTrigger>
              <SheetContent side="left" className="w-sm">
              <SheetTitle  className="text-3xl text-zinc-700 font-semibold flex flex-row justify-evenly pr-5 py-8 mb-10 shadow-lg ">Menu</SheetTitle>
             <SheetDescription className=""><Link href={'/home'} className="text-2xl ml-5 text-stone-600 font-medium">- Home</Link></SheetDescription>
             <SheetDescription className=""><Link href={'/home/recent'} className="text-2xl ml-5 text-stone-600 font-medium">- Recent</Link></SheetDescription>
             <SheetDescription className=""><Link href={'/meditation'} className="text-2xl ml-5 text-stone-600 font-medium">- Meditation</Link></SheetDescription>
        </SheetContent>
      </Sheet>
      </div>
      {children}
    </>
  );
}
