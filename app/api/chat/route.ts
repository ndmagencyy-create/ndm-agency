import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content:
              "Tu es l'assistant officiel de NDM Agency, une agence marketing digitale premium. Tu réponds de manière professionnelle, claire et persuasive.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();

    console.log("GROQ DATA:", data);

    const reply =
      data.choices?.[0]?.message?.content ||
      "Désolé, aucune réponse générée.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("GROQ ERROR:", error);
    return NextResponse.json({ reply: "Erreur serveur." });
  }
}
