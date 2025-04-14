import { Card } from "@/components/ui/card";
import Link from "next/link";

interface props {
    prompt : string,
    id : string
}


export async function SheetContnentComponent ({prompt , id} : props) {
    
    return <>
    <Link href={`/home/response/${id}`}>
    <Card className=" mb-10 mx-2 bg-gradient-to-r from-pink-300 to-pink-200 cursor-pointer">
    <p className="text-zinc-800 px-1.5">{prompt}</p>
    </Card>
    </Link>
    </>
}