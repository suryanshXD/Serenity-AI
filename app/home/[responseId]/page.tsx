import  CardComponent  from "@/app/components/CardComponent";
import { auth } from "@/app/utils/auth";
import { prisma } from "@/app/utils/db";
import { redirect } from "next/navigation";
import { ArrowLeft, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { SheetContnentComponent } from "@/app/components/SheetContent";
import Link from "next/link";

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
      <div className="flex justify-end mt-16 mr-2">
        <Link href={'/home'} target="_self" className={buttonVariants()}><ArrowLeft/>Back</Link>
      </div>
    </>
  );
}
