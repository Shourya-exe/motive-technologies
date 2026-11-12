'use client';

import React, { useState } from 'react';
import { ArrowRight, Bot, Database, MessageSquare, ShieldCheck, Zap, CheckCircle2, RefreshCw, FileText } from 'lucide-react';

export const WorkflowSandbox: React.FC = () => {
  const [selectedFlow, setSelectedFlow] = useState<'whatsapp' | 'invoice' | 'web'>('whatsapp');
  const [activeStep, setActiveStep] = useState<number>(3); // all active or simulated

  const workflows = {
    whatsapp: {
      name: 'WhatsApp Business API Lead Qualification',
      trigger: 'Customer sends: "Need custom ERP and mobile app pricing"',
      step1: { title: 'Webhook Ingestion', detail: 'Instant HTTP POST captured with zero message drop' },
      step2: { title: 'LLM Intent & Entity Extraction', detail: 'Identifies budget: Enterprise, timeline: Q1, domain: Logistics' },
      step3: { title: 'Knowledge Base Retrieval (RAG)', detail: 'Pulls verified rate sheet & NDA policy from vector store' },
      step4: { title: 'Multi-Channel Dispatch', detail: 'Returns instant reply & syncs structured lead row into PostgreSQL CRM' },
      latency: '0.14s total latency',
    },
    invoice: {
      name: 'Automated Accounts & Invoice Reconciliation',
      trigger: 'Vendor emails multi-page PDF invoice to billing address',
      step1: { title: 'Document Parsing Engine', detail: 'OCR & layout model extracts line items, tax IDs, and totals' },
      step2: { title: 'ERP Purchase Order Matching', detail: 'Validates line items against approved purchase order PO-8821' },
      step3: { title: 'Automated Fraud & Policy Audit', detail: 'Checks bank routing and duplicate invoice checksum' },
      step4: { title: 'Accounting Ledger Entry', detail: 'Creates scheduled payment voucher with automated director approval alert' },
      latency: '1.2s total latency',
    },
    web: {
      name: 'High-Speed Web Portal Conversion & Telemetry',
      trigger: 'Enterprise prospect completes interactive architecture scope',
      step1: { title: 'Edge Function Execution', detail: 'Sub-second form verification with honeypot bot filtering' },
      step2: { title: 'Dynamic Scope Scoring', detail: 'Estimates engineering sprints and infrastructure requirements' },
      step3: { title: 'Instant Lead Enrichment', detail: 'Appends company domain data and traffic footprint' },
      step4: { title: 'Senior Architect Alert', detail: 'Dispatches priority Slack/WhatsApp brief to technical director' },
      latency: '0.22s total latency',
    },
  };

  const current = workflows[selectedFlow];

  return (
    <div className="bg-motive-offwhite border border-motive-border rounded-xl p-6 sm:p-10 shadow-subtle">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-motive-border gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-motive-red font-bold block mb-1">
            INTERACTIVE SYSTEM ARCHITECTURE
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-motive-black">
            Live Operational Pipeline Simulator
          </h3>
          <p className="text-xs text-motive-grey mt-0.5">
            Select a commercial workflow below to observe how Motive automated pipelines execute in production.
          </p>
        </div>

        {/* Workflow Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          <button
            type="button"
            onClick={() => setSelectedFlow('whatsapp')}
            className={`px-3 py-1.5 rounded transition-colors text-xs font-semibold flex items-center gap-1.5 ${
              selectedFlow === 'whatsapp'
                ? 'bg-motive-black text-white'
                : 'bg-white text-motive-grey border border-motive-border hover:text-motive-black'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-motive-red" />
            <span>WhatsApp Lead Flow</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedFlow('invoice')}
            className={`px-3 py-1.5 rounded transition-colors text-xs font-semibold flex items-center gap-1.5 ${
              selectedFlow === 'invoice'
                ? 'bg-motive-black text-white'
                : 'bg-white text-motive-grey border border-motive-border hover:text-motive-black'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-motive-red" />
            <span>PDF Invoice Sync</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedFlow('web')}
            className={`px-3 py-1.5 rounded transition-colors text-xs font-semibold flex items-center gap-1.5 ${
              selectedFlow === 'web'
                ? 'bg-motive-black text-white'
                : 'bg-white text-motive-grey border border-motive-border hover:text-motive-black'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-motive-red" />
            <span>Web Ingestion</span>
          </button>
        </div>
      </div>

      {/* Trigger Callout */}
      <div className="p-4 bg-white rounded-lg border border-motive-border mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-motive-red animate-pulse" />
          <div>
            <span className="text-[10px] font-mono text-motive-grey uppercase tracking-wider block">
              INBOUND EVENT TRIGGER
            </span>
            <p className="text-xs font-mono font-bold text-motive-black">
              &ldquo;{current.trigger}&rdquo;
            </p>
          </div>
        </div>
        <span className="text-[11px] font-mono text-emerald-700 font-semibold px-2 py-0.5 bg-emerald-50 rounded border border-emerald-200">
          {current.latency}
        </span>
      </div>

      {/* 4-Stage Horizontal Pipeline Graph */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {[current.step1, current.step2, current.step3, current.step4].map((step, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-lg border border-motive-border shadow-subtle hover:border-zinc-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-motive-border">
                <span className="font-mono text-xs font-bold text-motive-red">
                  STAGE 0{idx + 1}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-motive-black mb-1">
                {step.title}
              </h4>
              <p className="text-xs text-motive-grey leading-relaxed">
                {step.detail}
              </p>
            </div>

            <div className="mt-4 pt-2 border-t border-motive-border/60 flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span>STATUS</span>
              <span className="text-motive-black font-semibold">AUTOMATED</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
