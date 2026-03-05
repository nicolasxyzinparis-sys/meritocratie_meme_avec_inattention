'use client';

import { useState } from "react"

import React from "react";
import Markdown from 'react-markdown';

interface InteractiveBlockProps {
  text: string;
  placeholder?: string;
  isDreamy?: boolean;
  systemPrompt: string;
  temperature?: number;
}

function renderMarkdown(text: string) {
  return <Markdown>{text}</Markdown>;
}

export function InteractiveBlock({
  text,
  placeholder = 'Type here...',
  isDreamy = false,
  systemPrompt,
  temperature = 0.1,
}: InteractiveBlockProps) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/ask-groq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          userInput: input, 
          systemPrompt,
          temperature 
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to get response');
      setResponse(data.text);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`my-10 rounded-2xl p-6 sm:p-8 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md ${
      isDreamy 
        ? 'bg-[hsl(280,30%,96%)] border border-[hsl(280,40%,82%)]' 
        : 'bg-card border border-border/60'
    }`}>
      <div className={`leading-relaxed mb-6 text-base ${
        isDreamy 
          ? 'font-cursive text-base text-accent-foreground' 
          : 'font-sans text-foreground'
      } prose prose-sm prose-neutral max-w-none [&_strong]:font-bold [&_em]:italic [&_p]:mb-2 [&_p:last-child]:mb-0`}>
        <Markdown
          components={{
            em: ({node, ...props}) => <em {...props} />,
            strong: ({node, ...props}) => <strong {...props} />,
          }}
        >
          {text}
        </Markdown>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className={`flex-1 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 ${
              isDreamy
                ? 'bg-white/80 border border-[hsl(280,30%,78%)]'
                : 'bg-white border border-border'
            }`}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="rounded-xl bg-primary px-5 py-2.5 font-sans text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-40 transition-all shrink-0"
          >
            {isLoading ? 'Thinking...' : 'Ask'}
          </button>
        </div>
      </form>

      {error && <p className="mt-3 text-red-600 font-sans text-sm">{error}</p>}

      {response && (
        <div className="mt-4 rounded-xl bg-secondary/50 p-5 border border-border/40">
          <div className="font-sans text-sm leading-relaxed text-foreground prose prose-sm prose-neutral max-w-none [&_strong]:font-bold [&_em]:italic [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-2 [&_p:last-child]:mb-0">
            <Markdown>{response}</Markdown>
          </div>
        </div>
      )}
    </div>
  );
}
