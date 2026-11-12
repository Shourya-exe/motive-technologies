'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, Sparkles, TrendingUp, Clock, ShieldCheck, Zap } from 'lucide-react';

export const SystemImpactCalculator: React.FC = () => {
  const [teamSize, setTeamSize] = useState<number>(15);
  const [manualHours, setManualHours] = useState<number>(10);
  const [monthlyInquiries, setMonthlyInquiries] = useState<number>(1200);

  // Calculations
  const hoursSavedPerMonth = Math.round((teamSize * manualHours * 4.2 * 0.75));
  const estimatedAnnualReclaimedValue = Math.round(hoursSavedPerMonth * 12 * 750); // based on modest commercial INR per hour rate
  const responseTimeReduction = '98.5%';

  const recommendedTier =
    teamSize > 40 || monthlyInquiries > 5000
      ? 'Enterprise AI Agent Cluster + Custom Web Platform'
      : teamSize > 15 || monthlyInquiries > 1000
      ? 'Autonomous WhatsApp Engine + Bi-Directional CRM Sync'
      : 'Targeted Workflow Automation + High-Speed Corporate Web Presence';

  return (
    <div className="bg-white border border-motive-border rounded-xl p-6 sm:p-10 shadow-premium">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-motive-border gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-motive-red" />
            <span className="font-mono text-xs uppercase tracking-widest text-motive-grey font-bold">
              OPERATIONAL ROI CALCULATOR
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-motive-black mt-1">
            Simulate Your Operational Efficiency Gains
          </h3>
          <p className="text-xs sm:text-sm text-motive-grey mt-0.5">
            Adjust the sliders below to evaluate reclaimed hours, latency reduction, and recommended Motive architecture.
          </p>
        </div>

        <div className="px-3 py-1.5 bg-motive-offwhite rounded border border-motive-border font-mono text-xs text-motive-black flex items-center gap-2">
          <Calculator className="w-4 h-4 text-motive-red" />
          <span>Real-Time Estimation Engine</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Sliders (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Slider 1: Team Size */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-motive-black font-bold">
                Operational Team Size:
              </span>
              <span className="text-motive-red font-bold text-sm">
                {teamSize} People
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="100"
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-motive-red"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-400">
              <span>2</span>
              <span>25</span>
              <span>50</span>
              <span>100+</span>
            </div>
          </div>

          {/* Slider 2: Manual Hours */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-motive-black font-bold">
                Manual Repetitive Hours per Person / Week:
              </span>
              <span className="text-motive-red font-bold text-sm">
                {manualHours} Hours/wk
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="30"
              step="1"
              value={manualHours}
              onChange={(e) => setManualHours(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-motive-red"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-400">
              <span>2 hrs</span>
              <span>10 hrs</span>
              <span>20 hrs</span>
              <span>30 hrs</span>
            </div>
          </div>

          {/* Slider 3: Monthly Inquiries */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-motive-black font-bold">
                Monthly Customer / Lead Inquiries:
              </span>
              <span className="text-motive-red font-bold text-sm">
                {monthlyInquiries.toLocaleString()} Queries
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={monthlyInquiries}
              onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
              className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-motive-red"
            />
            <div className="flex justify-between text-[10px] font-mono text-zinc-400">
              <span>100</span>
              <span>2,500</span>
              <span>5,000</span>
              <span>10,000+</span>
            </div>
          </div>

          {/* Architectural Recommendation Note */}
          <div className="p-4 bg-motive-offwhite rounded-lg border border-motive-border font-mono text-xs space-y-1">
            <span className="text-[10px] text-motive-grey uppercase tracking-widest block">
              RECOMMENDED MOTIVE ARCHITECTURE
            </span>
            <p className="text-motive-black font-bold text-sm">
              {recommendedTier}
            </p>
          </div>

        </div>

        {/* Right Column: Calculated Results Card (5 cols on lg) */}
        <div className="lg:col-span-5 bg-motive-black text-white rounded-xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-zinc-800 pb-4">
            <span className="text-[10px] font-mono text-motive-red font-bold uppercase tracking-widest block">
              ESTIMATED OPERATIONAL PAYOFF
            </span>
            <h4 className="text-lg font-bold text-white mt-1">
              Projected Monthly Savings
            </h4>
          </div>

          <div className="space-y-4">
            <div className="p-3.5 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase block">
                  Reclaimed Hours / Month
                </span>
                <span className="text-2xl font-mono font-bold text-white">
                  ~{hoursSavedPerMonth.toLocaleString()} hrs
                </span>
              </div>
              <Clock className="w-6 h-6 text-motive-red" />
            </div>

            <div className="p-3.5 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase block">
                  Customer Latency Drop
                </span>
                <span className="text-2xl font-mono font-bold text-emerald-400">
                  {responseTimeReduction}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 block mt-0.5">
                  From ~4.2 hrs to &lt; 15 seconds
                </span>
              </div>
              <Zap className="w-6 h-6 text-emerald-400" />
            </div>

            <div className="p-3.5 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase block">
                  Est. Annual Productivity Value
                </span>
                <span className="text-2xl font-mono font-bold text-white">
                  ₹{estimatedAnnualReclaimedValue.toLocaleString()}
                </span>
              </div>
              <TrendingUp className="w-6 h-6 text-motive-red" />
            </div>
          </div>

          <div className="pt-2">
            <Link
              href={`/contact?service=ai-automation&budget=₹3,00,000+-+₹10,00,000`}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-motive-red text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-motive-red-hover transition-colors"
            >
              <span>Build This Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
