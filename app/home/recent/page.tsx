import { SheetContnentComponent } from "@/app/components/SheetContent";
import { auth } from "@/app/utils/auth";
import { prisma } from "@/app/utils/db";
import { Badge } from "@/components/ui/badge";
import { redirect } from "next/navigation";

export default async function Recent() {
    const session = await auth();
    if(!session) {
        return redirect('/');
    }
    
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
    <div>
        <div className="flex flex-col justify-center items-center">
            <Badge variant={"secondary"} className="text-xl text-stone-700 mb-4 px-4 py-1.5 ring-1 ring-zinc-500 rounded-xl">Your Recent Analysis</Badge>
        </div>
        <div className="w-full px-20 mt-4">
            {usersPrompt.map((content) => (
                <SheetContnentComponent id={content.id} prompt={content.Prompt}/>
            ))}
        </div>
    </div>
    </>
}