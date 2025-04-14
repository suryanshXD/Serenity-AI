import { redirect } from "next/navigation";
import { auth } from "../utils/auth";
import { Profile } from "../components/Profile";
import React from "react";
import Link from "next/link";

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
      {children}
    </>
  );
}
