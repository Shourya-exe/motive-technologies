'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Bot, PhoneCall, MessageSquare, Check, Sparkles, RotateCcw, Calendar, ArrowRight, Send } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'CALLER' | 'PROSPECT' | 'AI';
  text: string;
  actionDetail?: string;
}

interface Scenario {
  id: string;
  label: string;
  headerLeft: string;
  headerRight: string;
  messages: ChatMessage[];
  typingNotes: string[];
  telemetry: {
    latency: string;
    action: string;
    crmStatus: string;
  };
}

const SCENARIOS: Scenario[] = [
  {
    id: 'voice-call',
    label: 'AI Voice & Inbound Call',
    headerLeft: 'A CALL WITH MOTIVE AI',
    headerRight: 'HOW IT WORKS',
    typingNotes: [
      'Motive AI answering call & evaluating audio stream...',
      'Checking calendar slots & provisioning CRM record...',
    ],
    messages: [
      {
        id: 'm1',
        sender: 'CALLER',
        text: 'A new lead calls your business number after hours.',
      },
      {
        id: 'm2',
        sender: 'AI',
        text: 'Motive AI answers instantly, asks your qualifying questions and records the answers.',
        actionDetail: 'Low-latency dialogue engine (< 400ms)',
      },
      {
        id: 'm3',
        sender: 'CALLER',
        text: 'The caller picks a time that suits them.',
      },
      {
        id: 'm4',
        sender: 'AI',
        text: 'The appointment goes into your calendar and the CRM is updated with a call summary.',
        actionDetail: 'Google Calendar API & CRM audio log verified',
      },
    ],
    telemetry: {
      latency: '< 400ms turnaround',
      action: 'Calendar Event Confirmed',
      crmStatus: 'Audio Log & Notes Synced',
    },
  },
  {
    id: 'whatsapp-chat',
    label: '24/7 WhatsApp Inbound',
    headerLeft: 'WHATSAPP CONVERSATION // MOTIVE AI',
    headerRight: 'AUTONOMOUS QUALIFICATION',
    typingNotes: [
      'Motive AI analyzing prospect requirements & budget...',
      'Tagging lead in HubSpot & dispatching founder ping...',
    ],
    messages: [
      {
        id: 'w1',
        sender: 'PROSPECT',
        text: 'Hi, we receive 200+ inbound leads weekly and need an autonomous booking pipeline.',
      },
      {
        id: 'w2',
        sender: 'AI',
        text: 'Motive AI replies in under 10 seconds, verifies requirements, timeline, and budget.',
        actionDetail: 'WhatsApp Cloud API & intent extraction',
      },
      {
        id: 'w3',
        sender: 'PROSPECT',
        text: 'Budget is approved for $25k. We want to start next week with a discovery sprint.',
      },
      {
        id: 'w4',
        sender: 'AI',
        text: 'Lead tagged as High Priority in CRM, contract draft generated, and founder notified on Slack.',
        actionDetail: 'HubSpot pipeline synchronized & Slack alert sent',
      },
    ],
    telemetry: {
      latency: '< 8s first response',
      action: 'Qualified Lead Dispatched',
      crmStatus: 'HubSpot & WhatsApp Connected',
    },
  },
];

export const AiChatInteractionDemo: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0); // 0 = empty, 1 = msg1 sent, etc.
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scenario = SCENARIOS[selectedScenarioIndex];

  // Pause background sequence and scrolling when user scrolls away from this section
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const resetSequence = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisibleCount(0);
    setIsTyping(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  // Auto-scroll inside internal chat box ONLY (strictly isolated to container, never touches window scroll)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isInView) return;

    if (visibleCount === 0) {
      container.scrollTop = 0;
      return;
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }, [visibleCount, isTyping, isInView]);

  // Sequential message timer
  useEffect(() => {
    if (isPaused || !isInView) return;

    if (visibleCount === 0) {
      // Send first message after 500ms
      timerRef.current = setTimeout(() => {
        setVisibleCount(1);
      }, 500);
    } else if (visibleCount === 1) {
      // Caller message 1 sent. After 700ms, start AI typing
      timerRef.current = setTimeout(() => {
        setIsTyping(true);
        setTypingText(scenario.typingNotes[0] || 'Motive AI is reasoning...');
        // After 1.2s typing, send AI message 2
        timerRef.current = setTimeout(() => {
          setIsTyping(false);
          setVisibleCount(2);
        }, 1200);
      }, 700);
    } else if (visibleCount === 2) {
      // AI message 2 sent. After 1.4s, send caller message 3
      timerRef.current = setTimeout(() => {
        setVisibleCount(3);
      }, 1400);
    } else if (visibleCount === 3) {
      // Caller message 3 sent. After 700ms, start AI typing
      timerRef.current = setTimeout(() => {
        setIsTyping(true);
        setTypingText(scenario.typingNotes[1] || 'Syncing calendar and CRM...');
        // After 1.2s typing, send AI message 4
        timerRef.current = setTimeout(() => {
          setIsTyping(false);
          setVisibleCount(4);
        }, 1200);
      }, 700);
    } else if (visibleCount === 4) {
      // All 4 messages sent. Hold for 5 seconds to let user read, then restart loop
      timerRef.current = setTimeout(() => {
        setVisibleCount(0);
      }, 5000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [visibleCount, isPaused, isInView, scenario, selectedScenarioIndex]);

  return (
    <div
      ref={rootRef}
      className="w-full h-[520px] max-h-[520px] bg-[#0d0f12] text-white rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col font-sans transition-none"
    >
      {/* Top Controls / Scenario Selector Bar - Constant Height */}
      <div className="px-5 py-3 bg-[#13161c] border-b border-zinc-800/80 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-1.5">
          {SCENARIOS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setSelectedScenarioIndex(idx);
                resetSequence();
              }}
              className={`px-3 py-1.5 rounded-md font-mono text-[11px] transition-all cursor-pointer ${
                selectedScenarioIndex === idx
                  ? 'bg-zinc-800 text-white font-bold border border-zinc-700 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => resetSequence()}
            title="Replay sequence from start"
            className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-900 border border-zinc-800 transition-colors"
          >
            <RotateCcw className="w-2.5 h-2.5 text-motive-red" />
            <span>REPLAY</span>
          </button>

          <button
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? 'Resume sequence' : 'Pause sequence'}
            className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-900 border border-zinc-800 transition-colors"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${!isPaused && isInView ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <span>{!isPaused && isInView ? 'LIVE' : 'PAUSED'}</span>
          </button>
        </div>
      </div>

      {/* Main Chat Animation Body - Constant Height */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between overflow-hidden">
        
        {/* Monospace Header Row - Constant Height */}
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-zinc-400 border-b border-zinc-800/60 pb-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
            <span className="font-semibold">{scenario.headerLeft}</span>
          </div>
          <span className="text-zinc-500">{scenario.headerRight}</span>
        </div>

        {/* Message Thread Area - Strictly scrolls inside container */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto space-y-3 py-3 pr-1 scrollbar-none flex flex-col justify-start scroll-smooth"
        >
          {scenario.messages.slice(0, visibleCount).map((msg, idx) => {
            const isCaller = msg.sender === 'CALLER' || msg.sender === 'PROSPECT';
            const isLatest = idx === visibleCount - 1;
            const isAi = msg.sender === 'AI';

            return (
              <div
                key={msg.id}
                className={`flex transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-1 shrink-0 ${
                  isCaller ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`w-[88%] sm:w-[84%] rounded-xl p-3.5 sm:p-4 transition-all duration-300 shadow-md ${
                    isAi && isLatest
                      ? 'bg-white text-black scale-[1.01] shadow-xl ring-2 ring-white/20'
                      : isAi
                      ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
                      : 'bg-[#1e2229] text-zinc-200 border border-zinc-800/80'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {/* Sender Tag */}
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider font-bold shrink-0 pt-0.5 ${
                        isAi && isLatest
                          ? 'text-zinc-500'
                          : isAi
                          ? 'text-zinc-600'
                          : 'text-zinc-400'
                      }`}
                    >
                      {msg.sender}
                    </span>

                    {/* Message Body */}
                    <p
                      className={`text-xs leading-relaxed font-medium ${
                        isAi && isLatest ? 'text-black font-semibold' : isAi ? 'text-zinc-900 font-medium' : 'text-zinc-200'
                      }`}
                    >
                      {msg.text}
                    </p>
                  </div>

                  {/* Execution detail badge for AI messages */}
                  {isAi && msg.actionDetail && (
                    <div className={`mt-2 pt-1.5 border-t flex items-center justify-between text-[10px] font-mono ${
                      isLatest ? 'border-zinc-200' : 'border-zinc-200/60'
                    }`}>
                      <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                        <Check className="w-3 h-3" />
                        <span>{msg.actionDetail}</span>
                      </span>
                      <span className="text-zinc-400">TURN {idx + 1} OF 4</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Real-Time AI Typing / Reasoning Indicator */}
          {isTyping && (
            <div className="flex justify-start animate-in fade-in duration-200 shrink-0">
              <div className="bg-[#181c24] border border-zinc-700/80 rounded-xl px-4 py-2.5 text-xs text-zinc-300 flex items-center gap-2.5 shadow-sm">
                <span className="font-mono text-[10px] text-motive-red font-bold">AI</span>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-motive-red animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-motive-red animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-motive-red animate-bounce [animation-delay:0.4s]" />
                </div>
                <span className="text-[11px] font-mono text-zinc-400">{typingText}</span>
              </div>
            </div>
          )}

          {/* Bottom padding inside message list */}
          <div className="h-2 shrink-0" />

          {/* Initial State Prompt when sequence starts */}
          {visibleCount === 0 && !isTyping && (
            <div className="py-20 text-center space-y-2 text-zinc-500 font-mono text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2" />
              <span>Awaiting inbound lead event...</span>
            </div>
          )}
        </div>

        {/* Bottom Real-time Telemetry Bar - Constant Position */}
        <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-zinc-400 shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{scenario.telemetry.latency}</span>
            </span>
            <span className="text-zinc-600">&bull;</span>
            <span className="text-zinc-300">{scenario.telemetry.action}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-500">PIPELINE:</span>
            <span className="text-white font-semibold">{scenario.telemetry.crmStatus}</span>
          </div>
        </div>

      </div>

    </div>
  );
};
