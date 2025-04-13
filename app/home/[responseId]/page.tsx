import  CardComponent  from "@/app/components/CardComponent";
import { auth } from "@/app/utils/auth";
import { prisma } from "@/app/utils/db";
import { redirect } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SheetContnentComponent } from "@/app/components/SheetContent";

export default async function ResponseContent({
  params,
}: {
  params: Promise<{ responseId: string }>;
}) {
  const { responseId } = await params;

  const session = await auth();
  if (!session) redirect("/");

  const reponse = await prisma.response.findFirst({
    where: {
      id: responseId,
    },
    select: {
      Summary: true,
      Analysis: true,
      Response: true,
      Interpretation: true,
    },
  });

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
     <div>
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
    </div>
      <div className="flex flex-row justify-center items-center pt-40">
        <div className="grid grid-cols-4 gap-4 ml-10">
          <CardComponent title="Summary" description={reponse?.Summary!} />
          <CardComponent title="Analysis" description={reponse?.Analysis!} />
          <CardComponent title="Response" description={reponse?.Response!} />
          <CardComponent title="Interpretation" description={reponse?.Interpretation!}
          />
        </div>
      </div>
    </>
  );
}
