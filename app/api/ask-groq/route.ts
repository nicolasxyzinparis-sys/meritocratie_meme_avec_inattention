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
        { error: 'Please enter some text.' },
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
        error: error?.message || 'An error occurred while processing your request.',
      },
      { status: 500 }
    );
  }
}
