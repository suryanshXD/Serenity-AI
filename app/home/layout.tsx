import { redirect } from "next/navigation";
import { auth, signOut } from "../utils/auth";
import { Profile } from "../components/Profile";
import React from "react";

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
      <div className="flex flex-row justify-between px-20 py-7">
        <div className="text-3xl font-semibold pl-10">
          Serenity<span className="text-pink-500">AI</span>
        </div>
        <div className="flex items-center gap-4">
          <Profile />
        </div>
      </div>
      {children}
    </>
  );
}
