import { generateText } from 'ai';
import { createGroq } from '@ai-sdk/groq';

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userInput, systemPrompt, temperature = 0.1 } = await req.json();

    if (!userInput || !userInput.trim()) {
      return Response.json(
        { error: 'Veuillez saisir du texte.' },
        { status: 400 }
      );
    }

    const { text } = await generateText({
      model: groq('openai/gpt-oss-120b'),
      system: systemPrompt,
      messages: [{ role: 'user', content: userInput }],
      maxTokens: 2048,
      temperature,
      reasoningEffort: 'high',
    });

    return Response.json({ text });
  } catch (error: any) {
    console.error('[v0] Groq API error:', error?.message || error);
    return Response.json(
      {
        error: error?.message || 'Une erreur est survenue lors du traitement de votre requete.',
      },
      { status: 500 }
    );
  }
}
