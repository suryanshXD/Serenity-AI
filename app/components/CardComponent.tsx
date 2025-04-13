"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

interface output {
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

export default function CardComponent({ title, description }: output) {
  return (
    <>
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
    >
      <Card className="p-4 bg-pink-200 w-xs">
        <CardHeader className="text-2xl text-stone-800 font-medium">
          {title}
        </CardHeader>
        <CardContent className=" text-zinc-800">{description}</CardContent>
      </Card>
      </motion.div>
    </>
  );
}
