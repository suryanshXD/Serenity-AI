"use server"
import CardComponent from "@/app/components/CardComponent"
import { SheetContnentComponent } from "@/app/components/SheetContent";
import { auth } from "@/app/utils/auth";
import { prisma } from "@/app/utils/db"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";


export default async function Response({params} : {params : Promise<{promptId: string}>}) {
    const {promptId} = await params
    console.log(promptId);
    
    const session = await auth();
    
    const repsonse = await prisma.response.findUnique({
        where : {
            id: promptId
        },
        select : {
            Summary: true,
            Analysis: true,
            Response: true,
            Interpretation: true
        }
    })

    const usersPrompt = await prisma.response.findMany({
            where: {
              responseid : session?.user?.id
            },
            select : {
              Prompt : true,
              id: true
            }
          })  
    return <>
          <div className="flex flex-row justify-center items-center pt-40">
            <div className="grid grid-cols-4 gap-4 ml-10">
              <CardComponent title="Summary" description={repsonse?.Summary!} />
              <CardComponent title="Analysis" description={repsonse?.Analysis!} />
              <CardComponent title="Response" description={repsonse?.Response!} />
              <CardComponent title="Interpretation" description={repsonse?.Interpretation!}
              />
            </div>
          </div>
    </>
}