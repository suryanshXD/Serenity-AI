import { Card } from "@/components/ui/card";
import { Delete, DeleteIcon, Trash } from "lucide-react";
import Link from "next/link";
import { prisma } from "../utils/db";
import { auth } from "../utils/auth";
import { redirect } from "next/navigation";

interface props {
    prompt : string | null,
    id : string
}

export async function SheetContnentComponent ({prompt , id} : props) {
    const session = await auth();
    const deletePrompt = async() => {
        "use server"
        await prisma.response.delete({
            where : {
                id : id,
                responseid : session?.user?.id
            }
        })
        return redirect("/home/recent");
    }
    return <>
   
    <Card className="mb-10 mx-2 bg-gradient-to-r from-pink-300 to-pink-200 px-6 flex flex-row justify-between">
    <Link href={`/home/response/${id}`}>
    <p className="text-zinc-800 cursor-pointer">{prompt}</p>
    </Link>
    <Trash onClick={deletePrompt} className="text-red-400 cursor-pointer size-5"/>
    </Card>
    </>
}