"use client"
import { Badge } from "@/components/ui/badge";
import { useCallback, useState, MouseEvent } from "react";
import home from '@/public/Home.webp'
import Image from "next/image";

function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return func(...args);
    };
  }

export function Body() {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
          const card = e.currentTarget;
          const box = card.getBoundingClientRect();
          const x = e.clientX - box.left;
          const y = e.clientY - box.top;
          const centerX = box.width / 2;
          const centerY = box.height / 2;
          const rotateX = (y - centerY) / 7;
          const rotateY = (centerX - x) / 7;
    
          setRotate({ x: rotateX, y: rotateY });
        }, 100),
        []
      );
    
      const onMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
      };


    return <>
    <div className="flex flex-col justify-center items-center mt-10 px-1">    
    <Badge  variant={"secondary"} className="px-2 py-1 text-stone-700 ring-1 ring-zinc-700 rounded-lg">SerenityAI v.0.0.1</Badge>
   
    <p className="mt-5 text-5xl font-semibold">Serenity <span className="text-pink-300">AI</span></p>
    <p className="px-40 text-zinc-700 mt-4"> Your personal companion for mood analysis, helping you gain deeper insight into your emotional patterns. Through intelligent, non-intrusive tracking and analysis.</p>
    <p className="text-zinc-700">Serenity AI empowers you to build emotional awareness, reduce stress, and improve your mental wellness — one insight at a time.</p>
   
        <div
        className=" transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform mt-10"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          transition: "all 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        }}
      >
        <Image src={home} alt="" className="size-90 min-w-2xl ring-2 ring-zinc-300 shadow-2xl"/>
    </div>

    <div className="text-2xl text-zinc-800 font-semibold mt-20">Get response in detailed way</div>
    <div className="grid grid-cols-4 gap-4">
        <Image src={} alt="summary img"/>
        <Image src={} alt="summary img"/>
        <Image src={} alt="summary img"/>
        <Image src={} alt="summary img"/>
    </div>
    </div>
    </>
}