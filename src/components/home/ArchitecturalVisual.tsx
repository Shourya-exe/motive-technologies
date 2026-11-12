'use client';

import React, { useState, useEffect } from 'react';
import { Bot, Cpu, Network, Zap, ShieldCheck, Activity } from 'lucide-react';

export const ArchitecturalVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);
  const [pulsePos, setPulsePos] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setPulsePos((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(pulseTimer);
  }, []);

  const nodes = [
    { title: 'AI Reasoning Core', status: 'Online (0.012s)', icon: Bot, tag: 'AGENT_NODE_01' },
    { title: 'Workflow Orchestrator', status: 'Active (24 Streams)', icon: Cpu, tag: 'PIPELINE_02' },
    { title: 'Distributed Web Mesh', status: 'Synced (99.99%)', icon: Network, tag: 'RUNTIME_03' },
    { title: 'Semantic Search Engine', status: 'Indexed (Real-Time)', icon: Zap, tag: 'SEARCH_04' },
  ];

  return (
    <div className="relative w-full aspect-[4/3] max-w-xl mx-auto bg-white border border-motive-border rounded-lg shadow-premium p-6 overflow-hidden select-none">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 grid-bg-subtle opacity-70 pointer-events-none" />

      {/* Subtle corner crosshairs */}
      <div className="absolute top-2 left-2 font-mono text-[9px] text-motive-lightgrey">
        + 00.24.11
      </div>
      <div className="absolute top-2 right-2 font-mono text-[9px] text-motive-lightgrey">
        SYS_GRID_v4.2 +
      </div>
      <div className="absolute bottom-2 left-2 font-mono text-[9px] text-motive-lightgrey">
        LAT_P99: 12ms
      </div>
      <div className="absolute bottom-2 right-2 font-mono text-[9px] text-motive-red font-semibold">
        MOTIVE_ENG // LIVE
      </div>

      {/* Header telemetry bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 mb-6 border-b border-motive-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-motive-red animate-ping" />
          <span className="w-2 h-2 rounded-full bg-motive-red -ml-3" />
          <span className="text-xs font-mono uppercase tracking-wider text-motive-black font-bold">
            INTELLIGENT SYSTEM ARCHITECTURE
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono text-motive-grey">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>ZERO BOTTLENECK VERIFIED</span>
        </div>
      </div>

      {/* Central SVG Network Graph */}
      <div className="relative z-10 h-44 sm:h-52 w-full flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 400 220" fill="none">
          {/* Subtle connection pathways */}
          <path
            d="M 60 50 L 200 110 L 340 50"
            stroke="#E8E8E8"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 60 170 L 200 110 L 340 170"
            stroke="#E8E8E8"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 200 20 L 200 200"
            stroke="#E8E8E8"
            strokeWidth="1.5"
          />

          {/* Active Red Energy Pulse traveling across the hub */}
          <circle
            cx={200 + Math.sin(pulsePos * 0.0628) * 120}
            cy={110 + Math.cos(pulsePos * 0.0628) * 50}
            r="3"
            fill="#ED1C2E"
            opacity="0.8"
          />

          {/* Central Hub Node */}
          <circle cx="200" cy="110" r="32" fill="#090909" />
          <circle cx="200" cy="110" r="38" stroke="#ED1C2E" strokeWidth="1" strokeDasharray="3 3" />
          <text
            x="200"
            y="107"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="9"
            fontFamily="monospace"
            fontWeight="bold"
          >
            MOTIVE
          </text>
          <text
            x="200"
            y="119"
            textAnchor="middle"
            fill="#ED1C2E"
            fontSize="8"
            fontFamily="monospace"
          >
            CORE
          </text>

          {/* Node 1: AI (Top Left) */}
          <g className="cursor-pointer" onClick={() => setActiveNode(0)}>
            <rect
              x="20"
              y="25"
              width="80"
              height="50"
              rx="4"
              fill={activeNode === 0 ? '#111111' : '#FFFFFF'}
              stroke={activeNode === 0 ? '#ED1C2E' : '#E8E8E8'}
              strokeWidth="1.5"
            />
            <text
              x="60"
              y="45"
              textAnchor="middle"
              fill={activeNode === 0 ? '#FFFFFF' : '#111111'}
              fontSize="9"
              fontFamily="sans-serif"
              fontWeight="600"
            >
              AI Agents
            </text>
            <text
              x="60"
              y="60"
              textAnchor="middle"
              fill={activeNode === 0 ? '#ED1C2E' : '#777777'}
              fontSize="7.5"
              fontFamily="monospace"
            >
              Autonomous
            </text>
          </g>

          {/* Node 2: Web & App Engine (Top Right) */}
          <g className="cursor-pointer" onClick={() => setActiveNode(1)}>
            <rect
              x="300"
              y="25"
              width="80"
              height="50"
              rx="4"
              fill={activeNode === 1 ? '#111111' : '#FFFFFF'}
              stroke={activeNode === 1 ? '#ED1C2E' : '#E8E8E8'}
              strokeWidth="1.5"
            />
            <text
              x="340"
              y="45"
              textAnchor="middle"
              fill={activeNode === 1 ? '#FFFFFF' : '#111111'}
              fontSize="9"
              fontFamily="sans-serif"
              fontWeight="600"
            >
              Web & Apps
            </text>
            <text
              x="340"
              y="60"
              textAnchor="middle"
              fill={activeNode === 1 ? '#ED1C2E' : '#777777'}
              fontSize="7.5"
              fontFamily="monospace"
            >
              Ultra-Fast
            </text>
          </g>

          {/* Node 3: Integrations & Workflows (Bottom Left) */}
          <g className="cursor-pointer" onClick={() => setActiveNode(2)}>
            <rect
              x="20"
              y="145"
              width="80"
              height="50"
              rx="4"
              fill={activeNode === 2 ? '#111111' : '#FFFFFF'}
              stroke={activeNode === 2 ? '#ED1C2E' : '#E8E8E8'}
              strokeWidth="1.5"
            />
            <text
              x="60"
              y="165"
              textAnchor="middle"
              fill={activeNode === 2 ? '#FFFFFF' : '#111111'}
              fontSize="9"
              fontFamily="sans-serif"
              fontWeight="600"
            >
              Automation
            </text>
            <text
              x="60"
              y="180"
              textAnchor="middle"
              fill={activeNode === 2 ? '#ED1C2E' : '#777777'}
              fontSize="7.5"
              fontFamily="monospace"
            >
              WhatsApp/APIs
            </text>
          </g>

          {/* Node 4: SEO & Growth (Bottom Right) */}
          <g className="cursor-pointer" onClick={() => setActiveNode(3)}>
            <rect
              x="300"
              y="145"
              width="80"
              height="50"
              rx="4"
              fill={activeNode === 3 ? '#111111' : '#FFFFFF'}
              stroke={activeNode === 3 ? '#ED1C2E' : '#E8E8E8'}
              strokeWidth="1.5"
            />
            <text
              x="340"
              y="165"
              textAnchor="middle"
              fill={activeNode === 3 ? '#FFFFFF' : '#111111'}
              fontSize="9"
              fontFamily="sans-serif"
              fontWeight="600"
            >
              SEO & Growth
            </text>
            <text
              x="340"
              y="180"
              textAnchor="middle"
              fill={activeNode === 3 ? '#ED1C2E' : '#777777'}
              fontSize="7.5"
              fontFamily="monospace"
            >
              Organic Rank
            </text>
          </g>
        </svg>
      </div>

      {/* Active telemetry readout footer */}
      <div className="relative z-10 mt-4 p-3 bg-motive-offwhite rounded border border-motive-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Activity className="w-4 h-4 text-motive-red" />
          <div>
            <p className="text-xs font-semibold text-motive-black font-sans">
              {nodes[activeNode].title}
            </p>
            <p className="text-[10px] font-mono text-motive-grey">
              Tag: {nodes[activeNode].tag}
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-block px-2 py-0.5 bg-white border border-motive-border text-[10px] font-mono text-emerald-700 font-semibold rounded">
            {nodes[activeNode].status}
          </span>
        </div>
      </div>
    </div>
  );
};
