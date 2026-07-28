"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { useLenis } from '@/components/providers/lenis-provider';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const AiBotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: `Halo! Saya Bagus AI Assistant 🤖. Ada yang bisa saya bantu terkait latar belakang S1 UTY, pengalaman kerja, atau proyek web Bagus Supriyanto?`,
      timestamp: 'Baru saja',
    },
  ]);

  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => { lenis?.start(); };
  }, [messages, isOpen, lenis]);

  const quickPrompts = [
    "Apa spesialisasi Bagus Supriyanto?",
    "Bagaimana latar belakang pendidikan UTY?",
    "Apa saja riwayat pengalaman kerjanya?",
    "Bagaimana cara menghubungi Bagus?",
  ];

  const generateBotResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('spesialisasi') || q.includes('skill') || q.includes('keahlian')) {
      return `Bagus Supriyanto adalah AI-Assisted Frontend & Product Engineer yang berpengalaman membangun aplikasi web modern menggunakan Next.js 16, Supabase, TypeScript, dan Tailwind CSS. Beliau berfokus pada performa tinggi dan UX yang ramah pengguna.`;
    }
    if (q.includes('pendidikan') || q.includes('uty') || q.includes('kuliah') || q.includes('skripsi')) {
      return `Bagus adalah Lulusan S1 Teknologi Informatika dari Universitas Teknologi Yogyakarta (UTY) tahun 2024. Skripsinya berfokus pada "Enkripsi dan Deskripsi Data Metode DES". Beliau juga memegang Sertifikasi Resmi Microsoft Specialist dari Certiport!`;
    }
    if (q.includes('pengalaman') || q.includes('kerja') || q.includes('perusahaan') || q.includes('bintan') || q.includes('riwayat')) {
      return `Bagus memiliki urutan karir operasional yang kuat: 1) Operator Produksi WVC di PT Pertama Precision Indonesia (berhenti demi kuliah S1), 2) S1 UTY (Lulus 2024), 3) Freelance Washing Boats & Yacht di Sentosa Cove Singapura, 4) Training Instrument Control di PT BFCI (under PT Bintan Alumina Indonesia), serta 5) Terjun kembali ke dunia IT sebagai AI-Assisted Developer.`;
    }
    if (q.includes('kontak') || q.includes('hubungi') || q.includes('email') || q.includes('wa')) {
      return `Anda dapat menghubungi Bagus Supriyanto via Email di badus991@gmail.com atau WhatsApp di +62 85155227735. Domisili saat ini di Tanjung Uban, Kepulauan Riau dan siap untuk peran Fulltime & Remote!`;
    }
    return `Terima kasih pertanyaannya! Bagus Supriyanto adalah AI-Assisted Frontend & Product Engineer (S1 UTY, Certiport) yang siap membantu membangun produk web produksi yang cepat dan teruji. Silakan hubungi via email badus991@gmail.com!`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text || !text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: generateBotResponse(text),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 450);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-white/95 hover:bg-slate-100 dark:bg-[#141414]/95 dark:hover:bg-[#1C1C1C] text-slate-900 dark:text-slate-100 border-2 border-slate-200 dark:border-orange-500/30 shadow-[0_10px_30px_rgba(255,107,0,0.2)] backdrop-blur-xl transition-all hover:scale-105 active:scale-95 group focus:outline-none"
          aria-label="Toggle Bagus AI Assistant"
        >
          {/* Robot AI Badge Icon */}
          <div className="w-7 h-7 rounded-full bg-orange-500/20 border border-orange-400 flex items-center justify-center text-orange-500 dark:text-orange-400 shrink-0">
            <Bot className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
            Bagus AI Assistant
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
        </button>
      </div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'power2.out' }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] rounded-2xl bg-white dark:bg-[#141414]/95 border border-slate-200 dark:border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col overflow-hidden transition-colors duration-300"
            data-lenis-prevent
            style={{ overscrollBehavior: 'contain' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-[#111111]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-400 flex items-center justify-center text-orange-500 dark:text-orange-400 shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <span>Bagus AI Assistant</span>
                    <Sparkles className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                    <span>Online • S1 UTY Assistant</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-orange-600 text-white rounded-br-none font-medium shadow-sm'
                        : 'bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                    <div
                      className={`text-[9px] font-mono mt-1 ${
                        msg.sender === 'user' ? 'text-orange-100 text-right' : 'text-slate-400 dark:text-slate-400'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}

              <div ref={chatBottomRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="p-2.5 border-t border-slate-200 dark:border-white/[0.06] bg-slate-50 dark:bg-[#111111]/50 flex flex-wrap gap-1.5">
              {quickPrompts.map((prompt, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-slate-200/80 dark:bg-white/[0.06] hover:bg-orange-500/20 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/10 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="p-3 border-t border-slate-200 dark:border-white/[0.08] bg-slate-100 dark:bg-[#111111] flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Tanyakan sesuatu..."
                className="flex-1 px-3 py-2 rounded-lg bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white transition-colors focus:outline-none"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
