"use client";

import React, { useEffect, useRef } from 'react';

export const CodeVideoBackdrop: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    // Code snippets & characters for realistic IDE typing stream
    const codeSnippets = [
      'const supabase = createClient();',
      'async function dispatchOrder(cart) {',
      '  return await db.orders.create();',
      '}',
      'import { OpenAI } from "openai";',
      'const ai = new OpenAI({ model: "gpt-4o" });',
      'export async function hireBagus() {',
      '  return await candidate.hire();',
      '}',
      'interface Product { id: string; price: number; }',
      'const [state, setState] = useState(true);',
      'await fetch("/api/v1/checkout", { method: "POST" });',
      '// S1 IT UTY 2024 - Sarjana Komputer',
      'const status = "AVAILABLE_FOR_HIRING";'
    ];

    const fontSize = 13;
    const columns = Math.floor(canvas.width / 240);
    const drops: { x: number; y: number; text: string; speed: number; opacity: number }[] = [];

    for (let i = 0; i < 20; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        speed: 0.8 + Math.random() * 1.2,
        opacity: 0.2 + Math.random() * 0.4
      });
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(22, 22, 22, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      drops.forEach((drop) => {
        ctx.fillStyle = `rgba(197, 160, 89, ${drop.opacity})`; // Gold syntax highlight
        ctx.fillText(drop.text, drop.x, drop.y);

        drop.y += drop.speed;
        if (drop.y > canvas.height + 20) {
          drop.y = -20;
          drop.x = Math.random() * canvas.width;
          drop.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* HTML5 Live Video Background Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        poster="/assets/code-editor-backdrop.jpg"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-code-running-on-a-computer-screen-40439-large.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.coverr.co/videos/coverr-typing-code-on-computer-5231/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Code Stream Canvas Overlay */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
};
