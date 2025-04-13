import { Badge } from "@/components/ui/badge";
import { auth } from "../utils/auth"

export async function Text() {
    const session = await auth();
    return <>
    <div className="flex flex-col justify-center items-center">
        <Badge variant={"secondary"} className="text-lg text-zinc-600 rounded-lg px-4 py-2 bg-pink-200">Hey, {session?.user?.name}</Badge>
        <div className=" text-3xl mt-8 text-stone-600">Wanna get detailed analysis of your <span className="text-pink-300">Mood!</span></div>
        <div className=" text-xl mt-2 text-stone-400">Type below to get analysied by our AI</div>
       
    </div>
    </> 
}