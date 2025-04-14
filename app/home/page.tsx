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
      <Sheet>
        <SheetTrigger asChild className="ml-4 mt-4">
          <Button><Menu/></Button>
            </SheetTrigger>
              <SheetContent side="left">
              <SheetTitle  className="text-3xl text-zinc-700 font-medium flex flex-row justify-evenly pr-5 py-8 mb-10 shadow-lg ">Recent Analysis</SheetTitle>
              <SheetDescription  className="antialiased  bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">{usersPrompt.map((content) => (
            <SheetContnentComponent prompt={content.Prompt} id={content.id}/>
          ))}</SheetDescription>
        </SheetContent>
      </Sheet>
      <Text/>    
      <div>
        <InputBox />
      </div>
    </>
  );
}
