import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <>
      <div className="flex flex-row justify-between px-20 py-7">
        <div className="text-3xl font-semibold pl-10">
          Serenity<span className="text-pink-500">AI</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/profile"} className={buttonVariants()}>
            Get started
          </Link>
        </div>
      </div>
    </>
  );
}
