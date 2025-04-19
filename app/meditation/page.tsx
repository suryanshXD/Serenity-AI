import { redirect } from "next/navigation";
import { auth } from "../utils/auth"

export default async function Meditation() {
    const session = await auth();
    if(!session) {
        return redirect("/")
    }
    return <>
    <div>Hii from meditation</div>
    </>
}