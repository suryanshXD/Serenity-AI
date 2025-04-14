"use server";
import { redirect } from "next/navigation";
import { auth } from "./auth";
import { prisma } from "./db";

const generative_ai_1 = require("@google/generative-ai");
const ai = new generative_ai_1.GoogleGenerativeAI(
  "AIzaSyAXtmadbbnhJS1FSf87jWuH2UMc3tr5J24"
);

type MoodAnalysisTuple = [string, string, string, string, string];

const model = ai.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `You are an advanced AI model specializing in mood analysis. Your task is to analyze a person's mood based on provided text, speech, or other input and categorize it into one of several emotional states. Based on the analysis, generate four different output formats:

A short description of the detected mood in 1-2 sentences and  dont use pointing output like - The person

An in-depth breakdown of emotional indicators, sentiment polarity, and possible underlying causes.

A suitable response or recommendation tailored to the detected mood, which could include supportive words, coping strategies, or relevant content.

 A mood-based output in a creative form such as a short poem, metaphor, or symbolic representation.

  Give a one word summary for how the persons mood is according to POSITIVE OR NEGATIVE add this part at end of the array

Guidelines:
Ensure high accuracy in mood detection, considering nuances like tone, word choice, and context.

Avoid bias and ensure ethical considerations while interpreting emotional states.

Adapt responses to be empathetic and contextually appropriate.

If uncertainty exists, express it and provide a balanced interpretation.

Keep outputs structured and easy to understand and also dont use pointing output like - The person

Generate final answer in form of an array with no object only value in form of array value 
try giving ans less than 30 words
`,
});
export async function generateContent({ prompt }: { prompt: string }) {
  const result = await model.generateContent(prompt);
  const text = result.response.text();

  // Clean the response to strip Markdown code block
  const cleanedText = text
    .replace(/```(?:json)?\s*([\s\S]*?)\s*```/, "$1")
    .trim();
  const [summary, analysis, response, interpretation , mood]:MoodAnalysisTuple = JSON.parse(cleanedText)
  
  const session = await auth();
  const userId = session?.user?.id;
  const data = await prisma.response.create({
    data: {
      responseid: userId!,
      Prompt: prompt,
      Summary: summary,
      Analysis: analysis,
      Response: response,
      Interpretation: interpretation,
      Mood: mood,
    },
  });
  return redirect(`/home/${data.id}`);
}
