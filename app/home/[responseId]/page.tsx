import { CardComponent } from "@/app/components/CardComponent";
import { auth } from "@/app/utils/auth";
import { prisma } from "@/app/utils/db";
import { redirect } from "next/navigation";

export default async function ResponseContent({
  params,
}: {
  params: Promise<{ responseId: string }>;
}) {
  const { responseId } = await params;

  const session = await auth();
  if (!session) redirect("/");

  const reponse = await prisma.response.findFirst({
    where: {
      id: responseId,
    },
    select: {
      Summary: true,
      Analysis: true,
      Response: true,
      Interpretation: true,
    },
  });
  return (
    <>
      <div className="flex justify-center items-center h-3/4">
        <div className="grid grid-cols-4 gap-4 ml-10">
          <CardComponent title="Summary" description={reponse?.Summary!} />
          <CardComponent title="Analysis" description={reponse?.Analysis!} />
          <CardComponent title="Response" description={reponse?.Response!} />
          <CardComponent
            title="Interpretation"
            description={reponse?.Interpretation!}
          />
        </div>
      </div>
    </>
  );
}
