import { Badge } from "@/components/ui/badge";

export function Body() {
    return <>
    <div className="flex flex-col justify-center items-center min-w-screen mt-10">
        <Badge variant={"secondary"} className="px-2 py-1 text-stone-700 ring-1 ring-zinc-700 rounded-lg">SerenityAI v.0.0.1</Badge>
    </div>
    </>
}