"use client"
import { Badge } from "@/components/ui/badge";
import { Image1 } from "./Image1";
import { Image2 } from "./Image2";
import { Footer } from "./Footer";
   

export function Body() {
    return <>
    <div className="flex flex-col justify-center items-center mt-10 px-1 overflow-x-hidden">    
    <Badge  variant={"secondary"} className="px-2 py-1 text-stone-700 ring-1 ring-zinc-700 rounded-lg mt-2">SerenityAI v.0.0.1</Badge>
   
    <p className="mt-5 text-5xl font-semibold">Serenity <span className="text-pink-300">AI</span></p>
    <p className="px-40 text-zinc-700 mt-4"> Your personal companion for mood analysis, helping you gain deeper insight into your emotional patterns. Through intelligent, non-intrusive tracking and analysis.</p>
    <p className="text-zinc-700">Serenity AI empowers you to build emotional awareness, reduce stress, and improve your mental wellness — one insight at a time.</p>
   
    <Image1/>
    <div className="text-4xl text-zinc-800 font-semibold mt-40">Get response in detailed way</div>
    <Image2/>
    <Footer/>
    </div>
    </>
}