'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Check, ArrowRight, CornerDownLeft } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

interface LogLine {
  id: string;
  type: 'command' | 'system' | 'success' | 'warn' | 'dim';
  text: string;
  time: string;
}

export const InteractiveTerminal: React.FC = () => {
  const [logs, setLogs] = useState<LogLine[]>([
    {
      id: '1',
      type: 'system',
      text: 'MOTIVE CORE KERNEL v2.4.1 // INITIALIZED',
      time: '00:00:01',
    },
    {
      id: '2',
      type: 'dim',
      text: 'Type a command or click a quick action below to simulate live system executions.',
      time: '00:00:02',
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const getTimestamp = () => {
    const d = new Date();
    return d.toTimeString().split(' ')[0];
  };

  const executeCommand = async (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    const time = getTimestamp();

    setLogs((prev) => [
      ...prev,
      { id: Math.random().toString(), type: 'command', text: `$ motive ${cmd}`, time },
    ]);

    setIsExecuting(true);

    if (cleanCmd === 'clear') {
      setLogs([]);
      setIsExecuting(false);
      return;
    }

    if (cleanCmd === 'status') {
      await new Promise((r) => setTimeout(r, 300));
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), type: 'success', text: '✓ Core Runtimes: Online (Next.js 15 + Node.js)', time },
        { id: Math.random().toString(), type: 'system', text: '• AI Reasoning Pipeline: Deterministic & Active', time },
        { id: Math.random().toString(), type: 'system', text: '• Edge Network: 285 PoPs with 0.12s TTFB', time },
        { id: Math.random().toString(), type: 'dim', text: `• Telephony: ${COMPANY_INFO.primaryPhone}, ${COMPANY_INFO.secondaryPhone} | WhatsApp: ${COMPANY_INFO.whatsappNumber}`, time },
      ]);
      setIsExecuting(false);
      return;
    }

    if (cleanCmd === 'simulate-ai' || cleanCmd === 'ai' || cleanCmd === 'agent') {
      await new Promise((r) => setTimeout(r, 200));
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), type: 'dim', text: '→ Ingesting Inbound Lead via WhatsApp Cloud Webhook...', time },
      ]);
      await new Promise((r) => setTimeout(r, 400));
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), type: 'system', text: '→ Parsing user intent: "Requesting API specification for ERP sync"', time },
        { id: Math.random().toString(), type: 'system', text: '→ Retrieving enterprise documentation via pgvector (cosine sim: 0.94)...', time },
      ]);
      await new Promise((r) => setTimeout(r, 400));
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), type: 'success', text: '✓ Policy Check Passed: Zero PII violations detected', time },
        { id: Math.random().toString(), type: 'success', text: '✓ Response Dispatched to WhatsApp (Latency: 0.14s)', time },
        { id: Math.random().toString(), type: 'success', text: '✓ Lead Record Synchronized with Database (Status: Qualified)', time },
      ]);
      setIsExecuting(false);
      return;
    }

    if (cleanCmd === 'tech-stack' || cleanCmd === 'stack') {
      await new Promise((r) => setTimeout(r, 300));
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), type: 'system', text: 'FRONTEND: Next.js 15 (App Router), React 19, TypeScript, Tailwind', time },
        { id: Math.random().toString(), type: 'system', text: 'BACKEND: Node.js, Python (FastAPI/Django), REST, GraphQL', time },
        { id: Math.random().toString(), type: 'system', text: 'DATA & STORAGE: PostgreSQL, Redis, pgvector, Docker', time },
        { id: Math.random().toString(), type: 'system', text: 'INTELLIGENCE: OpenAI APIs, LangChain, WhatsApp Cloud API', time },
      ]);
      setIsExecuting(false);
      return;
    }

    if (cleanCmd === 'calc-roi' || cleanCmd === 'roi') {
      await new Promise((r) => setTimeout(r, 300));
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), type: 'system', text: 'ESTIMATING COMMERCIAL IMPACT FOR 25-MEMBER TEAM:', time },
        { id: Math.random().toString(), type: 'success', text: '• Estimated Hours Reclaimed: ~120 hrs/month', time },
        { id: Math.random().toString(), type: 'success', text: '• Average First-Response Latency: 4.2 hrs → 12 seconds', time },
        { id: Math.random().toString(), type: 'dim', text: '• Implementation Timeline: 2 to 4 project sprints', time },
      ]);
      setIsExecuting(false);
      return;
    }

    if (cleanCmd === 'contact' || cleanCmd === 'talk') {
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), type: 'success', text: `Official Website: ${COMPANY_INFO.url}`, time },
        { id: Math.random().toString(), type: 'success', text: `Primary Telephone: ${COMPANY_INFO.primaryPhone}`, time },
        { id: Math.random().toString(), type: 'dim', text: 'Navigating to /contact for full project scoping...', time },
      ]);
      setIsExecuting(false);
      return;
    }

    // Default unknown command
    await new Promise((r) => setTimeout(r, 150));
    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        type: 'warn',
        text: `Command not recognized: "${cmd}". Available: status, simulate-ai, tech-stack, calc-roi, contact, clear`,
        time,
      },
    ]);
    setIsExecuting(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = inputVal;
      setInputVal('');
      executeCommand(val);
    }
  };

  return (
    <div className="bg-motive-dark text-white rounded-xl border border-motive-darkborder overflow-hidden shadow-darkcard font-mono">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="text-xs text-zinc-400 font-semibold ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-motive-red" />
            <span>motive-cli // interactive system simulator</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-zinc-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>CONNECTED (PORT 443)</span>
        </div>
      </div>

      {/* Terminal Output Logs */}
      <div
        ref={scrollRef}
        className="p-5 h-64 overflow-y-auto space-y-2 text-xs text-zinc-300 select-text scrollbar-thin"
      >
        {logs.map((log) => (
          <div key={log.id} className="flex items-start gap-2.5 leading-relaxed">
            <span className="text-[10px] text-zinc-600 shrink-0 select-none">
              [{log.time}]
            </span>
            <span
              className={
                log.type === 'command'
                  ? 'text-white font-bold'
                  : log.type === 'success'
                  ? 'text-emerald-400'
                  : log.type === 'warn'
                  ? 'text-amber-400'
                  : log.type === 'dim'
                  ? 'text-zinc-500'
                  : 'text-zinc-300'
              }
            >
              {log.text}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Action Chips */}
      <div className="px-4 py-2.5 bg-zinc-950/80 border-t border-zinc-800/80 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest shrink-0">
          CLICK TO RUN:
        </span>
        {[
          { label: 'simulate-ai', icon: Play },
          { label: 'status', icon: TerminalIcon },
          { label: 'tech-stack', icon: TerminalIcon },
          { label: 'calc-roi', icon: TerminalIcon },
          { label: 'clear', icon: RotateCcw },
        ].map((btn) => (
          <button
            key={btn.label}
            type="button"
            disabled={isExecuting}
            onClick={() => executeCommand(btn.label)}
            className="px-2.5 py-1 bg-zinc-900 border border-zinc-700/80 hover:border-motive-red hover:text-white text-zinc-300 text-[11px] rounded transition-colors flex items-center gap-1.5"
          >
            <btn.icon className="w-2.5 h-2.5 text-motive-red" />
            <span>{btn.label}</span>
          </button>
        ))}
      </div>

      {/* Interactive Input Prompt */}
      <div className="px-4 py-3 bg-black border-t border-zinc-800 flex items-center gap-2">
        <span className="text-motive-red font-bold text-xs select-none">$</span>
        <span className="text-zinc-500 text-xs select-none">motive</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command (e.g. simulate-ai, status, tech-stack)..."
          className="flex-1 bg-transparent text-xs text-white placeholder-zinc-600 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => {
            const val = inputVal;
            setInputVal('');
            executeCommand(val);
          }}
          className="p-1 bg-zinc-800 hover:bg-motive-red text-white rounded transition-colors"
          title="Execute"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
