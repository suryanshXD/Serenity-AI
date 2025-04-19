"use client"
import { useCallback, useState, MouseEvent } from "react";
import home from '@/public/Home.png'
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

export function Image1() {
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
    </>
}