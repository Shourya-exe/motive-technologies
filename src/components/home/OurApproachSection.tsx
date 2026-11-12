'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS } from '@/data/siteData';
import { CheckCircle2 } from 'lucide-react';

export const OurApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 lg:py-36 bg-motive-offwhite/30 border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-motive-border">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-motive-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
                HOW WE WORK // DELIVERY METHODOLOGY
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-motive-black leading-tight">
              From business challenges<br />
              <span className="text-motive-red">to intelligent solutions.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-sm sm:text-base text-motive-grey leading-relaxed">
              Our delivery methodology is disciplined, iterative, and transparent. Every phase builds upon verified requirements to eliminate guesswork and risk.
            </p>
          </div>
        </div>

        {/* Minimal Timeline Phase Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-12 pb-8 border-b border-motive-border">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`text-left pb-4 border-b-2 transition-all duration-200 ${
                activeStep === idx
                  ? 'border-motive-red text-motive-black'
                  : 'border-transparent text-motive-grey hover:text-motive-black'
              }`}
            >
              <span className="font-mono text-xs font-bold block mb-1">
                PHASE {step.number}
              </span>
              <span className="text-base font-bold tracking-tight block">
                {step.name}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Breakdown (Clean luxury editorial display) */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-motive-red font-bold uppercase tracking-widest">
                  STAGE {PROCESS_STEPS[activeStep].number} &bull; {PROCESS_STEPS[activeStep].name.toUpperCase()}
                </span>
                <span className="text-zinc-300">|</span>
                <span className="text-xs text-motive-grey font-mono">
                  {PROCESS_STEPS[activeStep].tagline}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-motive-black tracking-tight leading-tight">
                {PROCESS_STEPS[activeStep].name}: {PROCESS_STEPS[activeStep].tagline}
              </h3>

              <p className="text-base text-motive-grey leading-relaxed max-w-2xl">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="pt-6 border-t border-motive-border">
                <span className="text-xs font-mono uppercase tracking-widest text-motive-black font-bold block mb-4">
                  Verified Phase Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {PROCESS_STEPS[activeStep].deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-white border border-motive-border rounded text-xs font-medium text-motive-black flex items-start gap-2 shadow-subtle"
                    >
                      <CheckCircle2 className="w-4 h-4 text-motive-red shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Summary Index */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded border border-motive-border shadow-subtle space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block border-b border-motive-border pb-3">
                METHODOLOGY STAGES // 0{activeStep + 1} OF 05
              </span>

              <div className="space-y-3 font-mono text-xs">
                {PROCESS_STEPS.map((s, idx) => (
                  <div
                    key={s.number}
                    className={`py-2 px-3 rounded flex items-center justify-between transition-colors ${
                      idx === activeStep
                        ? 'bg-motive-black text-white font-bold'
                        : idx < activeStep
                        ? 'text-zinc-400 line-through'
                        : 'text-zinc-500 hover:text-motive-black'
                    }`}
                  >
                    <span>{s.number}. {s.name}</span>
                    <span className="text-[10px] text-motive-red font-normal">
                      {idx === activeStep ? 'IN FOCUS' : idx < activeStep ? 'PASSED' : 'QUEUED'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
