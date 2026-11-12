'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS } from '@/data/siteData';
import { CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const OurApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-motive-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-motive-red" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-grey">
              HOW WE WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-motive-black leading-tight">
            From business challenges to intelligent solutions.
          </h2>
          <p className="text-base sm:text-lg text-motive-grey leading-relaxed">
            Our delivery methodology is disciplined, iterative, and transparent. Every phase builds upon verified requirements to eliminate guesswork and risk.
          </p>
        </div>

        {/* Process Timeline Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pb-8 mb-8 border-b border-motive-border">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-4 rounded transition-all duration-200 border ${
                activeStep === idx
                  ? 'bg-motive-black text-white border-motive-black shadow-sm'
                  : 'bg-motive-offwhite text-motive-black border-motive-border hover:bg-zinc-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`font-mono text-xs font-bold ${
                    activeStep === idx ? 'text-motive-red' : 'text-motive-grey'
                  }`}
                >
                  PHASE {step.number}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    activeStep === idx ? 'bg-motive-red' : 'bg-zinc-300'
                  }`}
                />
              </div>
              <p className="text-sm sm:text-base font-bold tracking-tight">
                {step.name}
              </p>
            </button>
          ))}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="bg-motive-offwhite border border-motive-border rounded-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-motive-red">
                  STAGE {PROCESS_STEPS[activeStep].number} // {PROCESS_STEPS[activeStep].name.toUpperCase()}
                </span>
                <span className="text-zinc-300">&bull;</span>
                <span className="text-xs text-motive-grey font-medium">
                  {PROCESS_STEPS[activeStep].tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-motive-black tracking-tight">
                {PROCESS_STEPS[activeStep].name}: {PROCESS_STEPS[activeStep].tagline}
              </h3>

              <p className="text-base text-motive-grey leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="pt-4 border-t border-motive-border">
                <p className="text-xs font-mono uppercase tracking-widest text-motive-black font-bold mb-3">
                  Key Deliverables &amp; Artifacts
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PROCESS_STEPS[activeStep].deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-3 rounded border border-motive-border text-xs font-medium text-motive-black flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-motive-red shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Architectural Telemetry View */}
            <div className="lg:col-span-5 bg-white border border-motive-border rounded-lg p-6 shadow-subtle font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-motive-border text-zinc-500 text-[10px]">
                <span>METHODOLOGY PIPELINE</span>
                <span className="text-motive-black font-bold">STAGE {activeStep + 1} OF 5</span>
              </div>

              <div className="space-y-3">
                {PROCESS_STEPS.map((s, idx) => (
                  <div
                    key={s.number}
                    className={`p-2.5 rounded border transition-colors flex items-center justify-between ${
                      idx === activeStep
                        ? 'bg-motive-offwhite border-motive-black font-bold text-motive-black'
                        : idx < activeStep
                        ? 'bg-zinc-50 border-zinc-200 text-zinc-400 line-through'
                        : 'bg-white border-zinc-100 text-zinc-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-motive-red">{s.number}</span>
                      <span>{s.name}</span>
                    </div>
                    <span className="text-[10px]">
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
