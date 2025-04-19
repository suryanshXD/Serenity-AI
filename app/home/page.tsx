import Link from "next/link";
import { InputBox } from "../components/InputBox";
import { SheetContnentComponent } from "../components/SheetContent";
import { Text } from "../components/Text";
import { auth } from "../utils/auth";
import { prisma } from "../utils/db";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";


export default async function Home() {
  const session = await auth();
  const usersPrompt = await prisma.response.findMany({
        where: {
          responseid : session?.user?.id
        },
        select : {
          Prompt : true,
          id: true
        }
      })  
  return (
    <>
      <Text/>    
      <div>
        <InputBox />
      </div>
    </>
  );
}
