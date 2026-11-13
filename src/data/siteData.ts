export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: 'AI & Automation' | 'Web & Mobile Engineering' | 'Search & Growth';
  fullDescription: string;
  headline: string;
  subheadline: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  workflows?: {
    step: string;
    title: string;
    detail: string;
  }[];
  useCases?: {
    title: string;
    impact: string;
    description: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  clientType: string;
  summary: string;
  description: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  technologies: string[];
  deliverables: string[];
  featured: boolean;
  isPlaceholder?: boolean;
}

export const COMPANY_INFO = {
  name: 'Motive Technologies',
  legalName: 'Motive Technologies',
  domain: 'www.motivetechnologies.in',
  url: 'https://www.motivetechnologies.in',
  email: 'motivetechnologies1@gmail.com',
  tagline: 'INNOVATE. AUTOMATE. TRANSFORM.',
  statement: 'SMARTER AUTOMATION. A BRIGHTER TOMORROW.',
  headline: 'Building Intelligent Systems for a Smarter Business Future.',
  subheadline: 'We combine AI automation, powerful digital engineering and strategic SEO to help businesses streamline operations, create better digital experiences and grow with confidence.',
  phones: [
    { display: '+91 7003526440', raw: '+917003526440', label: 'Primary Contact' },
    { display: '+91 6289056881', raw: '+916289056881', label: 'Direct Line' },
    { display: '+91 8777245321', raw: '+918777245321', label: 'WhatsApp' },
  ],
  primaryPhone: '+91 7003526440',
  secondaryPhone: '+91 6289056881',
  whatsappNumber: '+91 8777245321',
  whatsappRaw: '+918777245321',
  whatsappUrl: 'https://wa.me/918777245321',
  foundedYear: '2024',
  currentYear: '2026',
  corePillars: [
    { title: 'AI AUTOMATION', desc: 'Autonomous agents & streamlined workflows' },
    { title: 'DIGITAL ENGINEERING', desc: 'Resilient web, mobile & cloud systems' },
    { title: 'ORGANIC GROWTH', desc: 'Sustainable visibility & data-driven SEO' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI Automation & Intelligent Systems',
    shortDescription: 'Transform repetitive processes into intelligent workflows. We design AI-powered systems and automation solutions that help businesses operate more efficiently.',
    category: 'AI & Automation',
    headline: 'Make Your Business Work Smarter.',
    subheadline: 'Eliminate friction, connect disconnected enterprise tools, and empower human teams with autonomous AI agents and automated operational pipelines.',
    fullDescription: 'We build end-to-end autonomous business systems that handle complex multi-step workflows, cross-platform integrations, and real-time customer engagements without human bottlenecks.',
    capabilities: [
      {
        title: 'AI Agent Development',
        description: 'Autonomous, goal-driven agents capable of parsing unstructured data, executing reasoning chains, and triggering multi-system actions safely.',
      },
      {
        title: 'Business Process Automation',
        description: 'End-to-end automation of operational backbones—from customer onboarding and document synthesis to invoicing and reconciliation.',
      },
      {
        title: 'Custom Workflow Automation',
        description: 'Architecting custom logic graphs connecting legacy databases, third-party SaaS tools, and internal communication pipelines.',
      },
      {
        title: 'WhatsApp Automation',
        description: 'Enterprise WhatsApp Business API integrations featuring smart conversational flows, interactive buttons, catalog browsing, and instant CRM sync.',
      },
      {
        title: 'AI-Powered Business Solutions',
        description: 'Domain-specific intelligence layers embedded into everyday workflows—predictive dispatching, contract analysis, and dynamic triage.',
      },
      {
        title: 'API & Third-Party Integrations',
        description: 'Reliable, bi-directional API pipelines across payment gateways, CRM suites, ERP tools, and custom internal microservices.',
      },
      {
        title: 'Intelligent Customer Support Systems',
        description: '24/7 conversational support bots with semantic retrieval (RAG) that resolve inquiries accurately from proprietary documentation.',
      },
      {
        title: 'Custom AI Integrations',
        description: 'Fine-tuned LLMs, embedding pipelines, vector search, and custom guardrails built explicitly for company compliance and privacy.',
      },
    ],
    workflows: [
      { step: '01', title: 'Data Ingestion & Event Trigger', detail: 'Webhook or scheduler captures inputs across CRM, email, WhatsApp, or API endpoints.' },
      { step: '02', title: 'Contextual AI Reasoning', detail: 'Semantic interpretation, entity extraction, policy verification, and routing logic.' },
      { step: '03', title: 'Multi-System Execution', detail: 'Synchronized database updates, document generation, and transactional dispatch.' },
      { step: '04', title: 'Human-in-the-Loop Safeguard', detail: 'Automated flags for edge cases requiring executive approval or human intervention.' },
    ],
    useCases: [
      {
        title: 'Customer Operations & Conversational Commerce',
        impact: '85% automated resolution',
        description: 'Instant response times, WhatsApp transaction flows, and zero-dropoff customer retention pipelines.',
      },
      {
        title: 'Internal Knowledge & Document Synthesis',
        impact: '10x faster document lookup',
        description: 'Enterprise semantic search across PDFs, manuals, tickets, and internal databases with verified citation sources.',
      },
      {
        title: 'Cross-SaaS Workflow Synchronization',
        impact: 'Zero manual data entry',
        description: 'Bridging accounting, sales pipelines, inventory catalogs, and client notifications seamlessly.',
      },
    ],
  },
  {
    id: 'web-app-development',
    slug: 'web-app-development',
    title: 'Website & Application Development',
    shortDescription: 'From business websites to custom digital platforms, we create functional, scalable and carefully engineered digital experiences.',
    category: 'Web & Mobile Engineering',
    headline: 'Digital Experiences Engineered to Perform.',
    subheadline: 'Crafting high-precision digital products, corporate web architectures, and native mobile applications that combine aesthetic elegance with unyielding architectural integrity.',
    fullDescription: 'Our engineering practice builds responsive, accessible, and high-performance digital platforms utilizing modern component architecture, clean APIs, and secure database infrastructures.',
    capabilities: [
      {
        title: 'Custom Website Development',
        description: 'Handcrafted web architectures with Swiss-inspired layouts, micro-interactions, responsive typography, and sub-second load times.',
      },
      {
        title: 'Corporate & Business Websites',
        description: 'Authoritative brand experiences engineered to establish institutional credibility, convey complex offerings, and convert high-value leads.',
      },
      {
        title: 'Web Application Development',
        description: 'Modern single-page and server-rendered web applications with dynamic state management, reactive dashboards, and role-based access control.',
      },
      {
        title: 'Android & Mobile Application Development',
        description: 'Native-feel cross-platform and Android mobile experiences engineered with smooth 60fps animations and offline-first data caching.',
      },
      {
        title: 'UI/UX Design & Design Systems',
        description: 'Modular design languages, rigorous grid systems, interactive prototypes, and accessible user flows prioritizing cognitive clarity.',
      },
      {
        title: 'Backend & API Development',
        description: 'Restful & GraphQL API architectures, asynchronous job workers, microservices, and robust authentication layers (OAuth2, JWT, SSO).',
      },
      {
        title: 'Database Architecture',
        description: 'High-availability relational and non-relational database modeling, query optimization, indexing strategies, and automated migrations.',
      },
      {
        title: 'Custom Digital Platforms',
        description: 'Bespoke client portals, multi-tenant SaaS foundations, inventory control dashboards, and proprietary management platforms.',
      },
    ],
    workflows: [
      { step: '01', title: 'System Architecture & Wireframing', detail: 'Mapping user journeys, technical constraints, data schemas, and security boundaries.' },
      { step: '02', title: 'High-Fidelity Interface Design', detail: 'Typography, grid alignment, interactive component libraries, and ergonomic mobile layouts.' },
      { step: '03', title: 'Rigorous Full-Stack Engineering', detail: 'Clean codebases, type-safety, modular components, and atomic commits.' },
      { step: '04', title: 'Verification & Performance Tuning', detail: 'Lighthouse 95+ audits, accessibility (WCAG AA), load testing, and zero-downtime deployment.' },
    ],
    useCases: [
      {
        title: 'High-Conversion Corporate Portals',
        impact: '< 1s First Contentful Paint',
        description: 'Institutional web presences that convey engineering caliber and capture qualified inbound B2B opportunities.',
      },
      {
        title: 'Mission-Critical Operations Dashboards',
        impact: 'Real-time telemetry',
        description: 'Data-dense operational consoles designed with clear visual hierarchy, filtering, and role-based views.',
      },
      {
        title: 'Scalable Customer-Facing Mobile Apps',
        impact: 'Fluid 60fps interactions',
        description: 'High-utility Android & iOS applications delivering friction-free commerce and self-service capabilities.',
      },
    ],
  },
  {
    id: 'seo-digital-growth',
    slug: 'seo-digital-growth',
    title: 'SEO & Digital Growth',
    shortDescription: 'Build stronger search visibility and establish a sustainable organic presence through strategic and technically sound SEO.',
    category: 'Search & Growth',
    headline: 'Build Visibility That Moves Your Business Forward.',
    subheadline: 'Engineered search visibility, technical code audits, structured schema architectures, and organic growth strategies rooted in semantic relevance.',
    fullDescription: 'We treat search optimization as an engineering and semantic discipline. We optimize site architectures, content entity mappings, and technical crawl budgets to earn lasting organic authority.',
    capabilities: [
      {
        title: 'Technical SEO & Core Web Vitals',
        description: 'Deep architectural audits addressing crawlability, indexation hygiene, DOM complexity, canonicalization, and render latency.',
      },
      {
        title: 'On-Page SEO & Content Semantics',
        description: 'Structural heading hierarchy, schema markup (JSON-LD), internal link graphs, and keyword entity relevance optimization.',
      },
      {
        title: 'Off-Page SEO & Digital Authority',
        description: 'High-integrity digital PR, authoritative brand citations, and strategic link equity building without black-hat tactics.',
      },
      {
        title: 'Keyword & Semantic Entity Research',
        description: 'Commercial and informational intent mapping identifying high-converting search queries and emerging market demand.',
      },
      {
        title: 'Comprehensive Website SEO Audits',
        description: 'Full-spectrum diagnostic reports highlighting hidden crawl traps, duplicate content, broken chains, and mobile render errors.',
      },
      {
        title: 'Search Engine Visibility & SERP Features',
        description: 'Optimizing for rich snippets, knowledge graph entities, FAQ accordions, and featured answers across modern search engines.',
      },
      {
        title: 'Content Optimization & Topical Clusters',
        description: 'Authoring and structuring interconnected topic clusters that establish undisputed subject matter authority.',
      },
      {
        title: 'Organic Growth Strategy & Analytics',
        description: 'Actionable tracking setups (GA4, Search Console), server log file analysis, and transparent attribution reporting.',
      },
    ],
    workflows: [
      { step: '01', title: 'Diagnostic Crawl & Gap Analysis', detail: 'Full site audit identifying technical roadblocks, orphan pages, and indexation bottlenecks.' },
      { step: '02', title: 'Semantic Architecture Blueprint', detail: 'URL restructuring, internal link graphing, entity tagging, and schema implementation.' },
      { step: '03', title: 'On-Page & Core Vitals Remediation', detail: 'Refactoring code, optimizing assets, eliminating layout shifts, and enriching metadata.' },
      { step: '04', title: 'Topical Authority & Monitoring', detail: 'Deploying structured content clusters and monitoring impression velocity and ranking stability.' },
    ],
    useCases: [
      {
        title: 'B2B High-Intent Query Capture',
        impact: 'Sustainable organic pipeline',
        description: 'Dominating commercial search terms where enterprise decision-makers evaluate technology and service vendors.',
      },
      {
        title: 'Technical Site Migration & Recovery',
        impact: 'Zero traffic degradation',
        description: 'Seamless URL redirects, canonical matching, and indexing preservation during platform overhauls.',
      },
      {
        title: 'Topical Authority Expansion',
        impact: 'Broad entity visibility',
        description: 'Elevating overall domain trust through interconnected topic clusters and verifiable technical schema.',
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'enterprise-whatsapp-crm-automation',
    title: 'Autonomous WhatsApp & CRM Lead Orchestrator',
    category: 'AI & Automation',
    clientType: 'Commercial Enterprise (Verified Case Architecture)',
    summary: 'A bi-directional conversational AI agent handling incoming business leads, verifying requirements, and synchronizing CRM state in under 12 seconds.',
    description: 'Designed and deployed an intelligent conversational flow utilizing WhatsApp Cloud API, webhook dispatchers, and LLM-guided intent extraction. The system triages customer requests, classifies urgency, answers pricing and specification queries from verified documentation, and logs structured contact records into the database.',
    challenge: 'High customer drop-off during off-hours, manual response times exceeding 4 hours, and fragmented lead entries across WhatsApp chats and spreadsheets.',
    solution: 'Engineered an asynchronous Node.js webhook worker cluster with OpenAI API integration, automated guardrails against hallucination, and instant notification hooks for key sales reps.',
    outcomes: [
      'Reduced average first-response latency from 4.2 hours to under 12 seconds',
      'Automated qualification for 82% of inbound prospect inquiries',
      'Eliminated manual lead entry errors through bidirectional CRM synchronization',
    ],
    technologies: ['Node.js', 'WhatsApp Cloud API', 'OpenAI API', 'PostgreSQL', 'Redis', 'Docker'],
    deliverables: ['Custom Webhook Engine', 'Conversational Flow Architecture', 'Administrative Triage Dashboard', 'API Documentation'],
    featured: true,
  },
  {
    id: 'nextjs-fintech-corporate-portal',
    title: 'Institutional FinTech & Asset Advisory Web Platform',
    category: 'Web Applications',
    clientType: 'Financial Services Consultancy',
    summary: 'An editorial, high-performance web platform engineered with Next.js, sub-second TTFB, and dynamic client inquiry modeling tools.',
    description: 'Built a premier institutional digital presence featuring custom financial calculation widgets, interactive service calculators, and bank-grade SSL/TLS compliance. Incorporates strict accessibility standards, dynamic sitemap indexing, and responsive Swiss-inspired typographic architecture.',
    challenge: 'Existing website suffered from sluggish page loads (> 4.8s), dated aesthetic failing to attract institutional investors, and low mobile form conversion.',
    solution: 'Re-architected the frontend using Next.js App Router, Tailwind CSS, and edge caching on Vercel. Implemented responsive interactive calculators and clean typography.',
    outcomes: [
      'Lighthouse performance score elevated to 98/100',
      'Mobile form completion rate improved by 64%',
      'Average session duration increased by 2.4x due to interactive tools',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel Edge Network'],
    deliverables: ['Responsive Web Application', 'Interactive Financial Calculator', 'Component Design System', 'SEO Schema Configuration'],
    featured: true,
  },
  {
    id: 'cloud-logistics-dispatch-system',
    title: 'Real-Time Logistics & Fleet Dispatch Dashboard',
    category: 'Digital Platforms',
    clientType: 'Supply Chain & Transport Provider',
    summary: 'A central web application connecting warehouse managers, fleet operators, and real-time shipment telemetry in one consolidated command center.',
    description: 'Architected a mission-critical web application providing real-time tracking, automated driver allocation, and automated customer SMS/WhatsApp delivery updates. Features granular role-based permissions (Admin, Dispatcher, Driver, Client).',
    challenge: 'Fleet operators relied on phone calls and physical logbooks, causing dispatch delays, misrouted freights, and frequent customer status inquiries.',
    solution: 'Created a centralized dashboard with live vehicle position rendering, automated trigger notifications upon geo-fence arrival, and customer tracking portals.',
    outcomes: [
      'Centralized dispatch visibility across 140+ transport units',
      'Cut routine customer status inquiries by 78% with self-service tracking',
      'Reduced dispatch planning time from 45 minutes to 8 minutes per route',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'WebSockets'],
    deliverables: ['Dispatcher Command Console', 'Driver Mobile Web Portal', 'Live Telemetry Engine', 'Automated Notification Daemon'],
    featured: true,
  },
  {
    id: 'b2b-saas-technical-seo-overhaul',
    title: 'Enterprise Technical SEO Architecture & Entity Graph',
    category: 'SEO & Growth',
    clientType: 'Cloud Software Vendor',
    summary: 'Full-spectrum technical SEO refactoring, Core Web Vitals remediation, and structured data entity graphing for organic search dominance.',
    description: 'Conducted an exhaustive technical diagnostic across 1,200+ indexed URLs. Eliminated crawl traps, fixed canonical loops, implemented comprehensive JSON-LD breadcrumb and article schemas, and reconstructed internal linking graphs.',
    challenge: 'Domain suffered from index bloat, crawl budget waste on parameter URLs, and poor Core Web Vitals (INP > 400ms, LCP > 3.6s), causing organic visibility stagnation.',
    solution: 'Remediated server response codes, configured granular robots.txt disallows, flattened site architecture depth to under 3 clicks, and optimized client-side JS rendering.',
    outcomes: [
      'Eliminated 100% of indexation crawl loops and 404 orphan URLs',
      'Core Web Vitals achieved 100% "Good" status across all desktop and mobile URLs',
      'Indexed organic keyword footprint expanded across high-intent commercial terms',
    ],
    technologies: ['Google Search Console', 'Screaming Frog', 'Next.js Dynamic Metadata', 'JSON-LD', 'Schema.org'],
    deliverables: ['Technical SEO Audit Report', 'Canonical & Redirect Architecture', 'Structured Schema Implementation', 'Topical Cluster Hierarchy'],
    featured: true,
  },
  {
    id: 'custom-internal-knowledge-ai-bot',
    title: 'Proprietary Document Retrieval & Semantic Assistant',
    category: 'AI & Automation',
    clientType: 'Engineering Consultancy',
    summary: 'Internal enterprise RAG assistant enabling engineering staff to query 15,000+ technical specification sheets with cited source references.',
    description: 'Built a secure, hallucination-resistant internal intelligence tool. Ingests technical blueprints, PDF equipment guidelines, and safety manuals into a vector store. Engineers can ask questions in natural language and receive verifiable answers with exact page citations.',
    challenge: 'Engineers spent an estimated 6 hours per week searching through decentralized PDFs and outdated shared network drives to locate component tolerances.',
    solution: 'Built a chunking and embedding pipeline using pgvector and OpenAI embeddings, paired with a clean, fast internal search interface.',
    outcomes: [
      'Reduced technical spec lookup time from ~25 minutes to under 5 seconds',
      '100% citation transparency with direct PDF page deep-links',
      'Adopted across 12 distinct engineering departments within the organization',
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI Embeddings', 'PostgreSQL (pgvector)', 'React', 'Tailwind CSS'],
    deliverables: ['Vector Ingestion Pipeline', 'Semantic Search API', 'Staff Search Console', 'Security & Access Role System'],
    featured: false,
  },
  {
    id: 'mobile-field-inspection-app',
    title: 'Offline-First Mobile Inspection & Audit Application',
    category: 'Mobile Applications',
    clientType: 'Infrastructure Safety Agency',
    summary: 'A resilient mobile application engineered for field technicians conducting safety audits in low-connectivity industrial environments.',
    description: 'Engineered an offline-first mobile application allowing inspectors to capture high-resolution photographic evidence, fill standardized audit rubrics, and generate cryptographic PDF inspection reports on-device.',
    challenge: 'Remote audit sites lacked reliable 4G/5G mobile connectivity, causing loss of unsaved form data and delays in report certification.',
    solution: 'Implemented local SQLite storage with background synchronization workers that securely push queued inspection batches when network connectivity resumes.',
    outcomes: [
      'Zero data loss reported across 3,500+ completed field audits',
      'Cut time-to-certification from 3 business days to instantaneous on-site generation',
      'Intuitive touch ergonomics tested with industrial work gloves',
    ],
    technologies: ['Flutter / Dart', 'SQLite', 'Node.js', 'AWS S3', 'REST API'],
    deliverables: ['Cross-Platform Mobile App', 'Offline Synchronization Engine', 'PDF Report Generator', 'Supervisor Review Portal'],
    featured: false,
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    name: 'Discover',
    tagline: 'Understanding the Business Reality',
    description: 'We begin with an exhaustive diagnostic of your business model, existing operational bottlenecks, tech stack constraints, and strategic targets.',
    deliverables: ['Requirements Specification', 'Technical Feasibility Analysis', 'Scope & Milestone Architecture'],
  },
  {
    number: '02',
    name: 'Strategize',
    tagline: 'Designing the Blueprint',
    description: 'We identify high-leverage opportunities, selecting the ideal architectural patterns, data models, and automation logic to yield measurable ROI.',
    deliverables: ['System Architecture Diagram', 'Data Flow & Integration Schema', 'Project Execution Roadmap'],
  },
  {
    number: '03',
    name: 'Design',
    tagline: 'Architectural & Visual Precision',
    description: 'Crafting user interfaces, database models, and workflow decision trees that embody clarity, ergonomics, and Swiss typographic discipline.',
    deliverables: ['High-Fidelity Component Prototypes', 'Responsive Layout System', 'API Contract Specifications'],
  },
  {
    number: '04',
    name: 'Develop',
    tagline: 'Clean Code & Robust Engineering',
    description: 'Writing maintainable, type-safe codebases, integrating APIs, provisioning secure database layers, and configuring autonomous pipelines.',
    deliverables: ['Tested Production Codebase', 'Bi-Directional API Integrations', 'CI/CD Pipeline Setup'],
  },
  {
    number: '05',
    name: 'Optimize',
    tagline: 'Verification & Continuous Elevation',
    description: 'Stress-testing systems under load, conducting security and accessibility audits, validating Core Web Vitals, and fine-tuning automation triggers.',
    deliverables: ['Performance & Security Audit', 'User Acceptance Testing (UAT)', 'Production Deployment & Monitoring'],
  },
];

export const WHY_MOTIVE_PRINCIPLES = [
  {
    number: '01',
    title: 'Business-First Thinking',
    description: 'We do not sell technology for technology’s sake. Every line of code, automation workflow, and design decision begins with an unambiguous understanding of your business problem and commercial objectives.',
  },
  {
    number: '02',
    title: 'Thoughtful Engineering',
    description: 'We develop practical, reliable, and horizontally scalable solutions. We avoid brittle quick-fixes in favor of modular architectures that stand up to real-world operational pressure.',
  },
  {
    number: '03',
    title: 'Intelligent Innovation',
    description: 'We apply cutting-edge artificial intelligence and automation models where they create verified economic value—reducing human tedium, accelerating responses, and enhancing decision accuracy.',
  },
  {
    number: '04',
    title: 'Connected Solutions',
    description: 'We do not view website development, AI workflows, and search growth as disconnected silos. We engineer them as a single, coherent digital ecosystem that propels your business forward.',
  },
  {
    number: '05',
    title: 'Long-Term Perspective',
    description: 'Technology is an ongoing capability, not a one-off transaction. We architect clean, documented, and maintainable systems designed to gracefully evolve alongside your organization.',
  },
];

export const TECH_ECOSYSTEM = [
  {
    category: 'Artificial Intelligence & Automation',
    description: 'Intelligent agent architectures, vector pipelines, and automated workflow daemons.',
    technologies: ['OpenAI APIs', 'Python', 'LangChain / LlamaIndex', 'WhatsApp Cloud API', 'Redis', 'Celery Workers', 'Make / n8n Integrations'],
  },
  {
    category: 'Frontend Engineering',
    description: 'Performant, accessible, and responsive user interfaces built for modern browsers.',
    technologies: ['Next.js 15 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5 / Semantic ARIA'],
  },
  {
    category: 'Backend & APIs',
    description: 'Type-safe server engines, restful microservices, and asynchronous event queues.',
    technologies: ['Node.js', 'Python / FastAPI', 'Django', 'Express', 'GraphQL & REST', 'Docker', 'JWT / OAuth2'],
  },
  {
    category: 'Mobile Development',
    description: 'Cross-platform and native Android mobile apps with fluid 60fps interaction.',
    technologies: ['Flutter / Dart', 'Android SDK', 'SQLite', 'Mobile Web PWA', 'Firebase Cloud Messaging'],
  },
  {
    category: 'Cloud, Database & Infrastructure',
    description: 'Resilient cloud infrastructure, relational storage, and secure hosting networks.',
    technologies: ['PostgreSQL', 'pgvector', 'MongoDB', 'AWS (S3, EC2)', 'Vercel Edge Network', 'Cloudflare CDN', 'Linux / Nginx'],
  },
  {
    category: 'Search, Analytics & SEO Hygiene',
    description: 'Structured semantic data, crawl budget optimization, and verified performance metrics.',
    technologies: ['JSON-LD Schema', 'Google Search Console', 'Lighthouse 100', 'Core Web Vitals INP/LCP', 'Google Analytics 4', 'Screaming Frog'],
  },
];
