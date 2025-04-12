import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { lazy } from "react";

interface output {
  title: string;
  description: string;
}

export function CardComponent({ title, description }: output) {
  return (
    <>
      <Card className="p-4 bg-pink-200 w-xs">
        <CardHeader className="text-2xl text-stone-800 font-medium">
          {title}
        </CardHeader>
        <CardContent className=" text-zinc-800">{description}</CardContent>
      </Card>
    </>
  );
}
