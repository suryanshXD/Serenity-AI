import Link from "next/link";

export function Footer() {
    return <>
    <div className="flex flex-row justify-around items-center py-10 border min-w-screen mt-40 bg-white">
        <div className="text-xl font-medium ">Serenity<span className="text-pink-600">AI</span></div>
        <Link href={'https://www.youtube.com/shorts/ub5_aJC5yU4'} target="_blank" className="text-zinc-800">Terms and Conditions</Link>
        <div  className="text-zinc-800 flex flex-col gap-1">
            <Link href={'https://github.com/suryanshXD'} target="_blank" className="cursor-pointer">Github</Link>
            <Link href={'https://x.com'} target="_blank"  className="cursor-pointer">Twitter</Link>
            <Link href={'https://www.instagram.com/suryanshvaish_45'} target="_blank"  className="cursor-pointer">Instagram</Link>
        </div>
    </div>
    </>
}