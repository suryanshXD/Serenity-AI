import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface output {
  title: string;
  response: string;
}

export function CardComponent() {
  return (
    <>
      <Card className="p-4 bg-pink-200 w-xs">
        <CardHeader className="text-2xl">Hii</CardHeader>
        <CardContent className="text">
          Suryansh vaish here with the amazing mood with jolly nature
        </CardContent>
      </Card>
    </>
  );
}
