import  CardComponent  from "@/app/components/CardComponent";
import { auth } from "@/app/utils/auth";
import { prisma } from "@/app/utils/db";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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

  

  return (
    <>
     <div>
     <Sheet>
      <SheetTrigger asChild className="ml-4 mt-4">
        <Button><Menu/></Button>
      </SheetTrigger>
      <SheetContent side="left" className="text-3xl text-zinc-800 font-medium flex flex-row justify-evenly pr-5 pt-6">Recent</SheetContent>
     </Sheet>
    </div>
      <div className="flex flex-row justify-center items-center pt-40">
        <div className="grid grid-cols-4 gap-4 ml-10">
          <CardComponent title="Summary" description={reponse?.Summary!} />
          <CardComponent title="Analysis" description={reponse?.Analysis!} />
          <CardComponent title="Response" description={reponse?.Response!} />
          <CardComponent
            title="Interpretation"
            description={reponse?.Interpretation!}
          />
        </div>
      </div>
    </>
  );
}
