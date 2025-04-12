"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { generateContent } from "../utils/gemini";

export function InputBox() {
  const [prompt, setPrompt] = useState("");
  return (
    <>
      <div className="sticky flex flex-col justify-center items-center mt-auto ">
        <form
          action={async () => {
            await generateContent({ prompt });
          }}
        >
          <Card className=" w-2xl flex flex-row gap-2 px-4 shadow-lg">
            <Input
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
              placeholder="Enter your prompt here"
            />
            <Button>
              <ArrowUp />
            </Button>
          </Card>
        </form>
      </div>
    </>
  );
}
