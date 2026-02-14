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
            content: `Tu es l'intelligence artificielle officielle de NDM Agency. 
            
            SERVICES :
            - SEO & Marketing, Design & Branding, Développement Web, Photographie & Vidéo, Social Ads & SEA.

            INFOS DE CONTACT & LOCALISATION :
            - Email : ndmagencyy@gmail.com
            - Téléphone : +212 6 39 58 10 20
            - Ville : Basée à Rabat, Maroc.
            - Clients : Nous travaillons au Maroc et à l'international.

            FOIRE AUX QUESTIONS (FAQ) :
            - Prix : Le coût dépend de la complexité. Réponse type : "Le prix dépend de la complexité de votre projet ; contactez-nous pour un devis personnalisé."
            - Délais : En moyenne entre 2 et 21 jours selon le projet.
            
            RÈGLES STRICTES :
            1. IDENTITÉ : Tu es une IA. Réponds de façon professionnelle et concise.
            2. CONCISION : 1 à 2 phrases maximum.
            3. SOURCE : Utilise uniquement les données ci-dessus. 
            4. ACTION : Pour toute demande précise, invite l'utilisateur à utiliser le formulaire de contact ou les coordonnées fournies.`,
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    const data = await response.json();

    const reply =
      data.choices?.[0]?.message?.content ||
      "Désolé, je ne parviens pas à traiter votre demande. Veuillez nous contacter directement par email.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("GROQ ERROR:", error);
    return NextResponse.json({ reply: "Erreur serveur." });
  }
}