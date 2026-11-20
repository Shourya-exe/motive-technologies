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
  subheadline: 'We build custom AI assistants, automate everyday repetitive tasks, create fast modern websites and mobile apps, and help you get found on Google and AI search engines so your business runs smoother and grows faster.',
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
    { title: 'AI AUTOMATION', desc: 'Smart assistants & automated workflows' },
    { title: 'DIGITAL ENGINEERING', desc: 'Fast, modern web and mobile apps' },
    { title: 'ORGANIC GROWTH', desc: 'Top rankings on Google & AI search' },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI Automation & Best AI Agents Development',
    shortDescription: 'Turn slow, repetitive work into smooth automatic workflows. We build smart AI assistants that help your business reply to customers in seconds and get work done with zero manual hassle.',
    category: 'AI & Automation',
    headline: 'Make Your Business Work Smarter with Autonomous AI Agents.',
    subheadline: 'Say goodbye to busywork, connect all your business software together, and let smart AI assistants handle routine customer conversations around the clock.',
    fullDescription: 'We build practical AI systems and automated workflows that handle customer messages, sort paperwork, connect your apps, and answer inquiries without human delays.',
    capabilities: [
      {
        title: 'Best AI Agents Development',
        description: 'Smart AI assistants that read documents, think through tasks step-by-step, and update your apps automatically with high precision.',
      },
      {
        title: 'Business Process Automation',
        description: 'Automating routine daily tasks—from welcoming new clients and sorting paperwork to sending bills and matching payments.',
      },
      {
        title: 'Custom Workflow Automation',
        description: 'Connecting all your software—CRMs, spreadsheets, databases, and chat tools—so data flows everywhere automatically without copy-pasting.',
      },
      {
        title: 'WhatsApp Automation',
        description: 'Official WhatsApp chatbots that reply to customers in seconds, share product catalogs, book appointments, and update your CRM 24/7.',
      },
      {
        title: 'AI-Powered Business Solutions',
        description: 'Practical AI built into your daily operations—helping you review agreements faster, route customer tickets, and make better decisions.',
      },
      {
        title: 'App & Third-Party Integrations',
        description: 'Reliable connections linking payment gateways, customer databases, inventory software, and internal tools seamlessly.',
      },
      {
        title: 'Intelligent Customer Support Systems',
        description: '24/7 customer service assistants trained on your real company guides that answer common questions accurately at any hour.',
      },
      {
        title: 'Custom AI Integrations',
        description: 'Secure, private AI setups tailored specifically to your company rules, keeping your sensitive business data completely confidential.',
      },
    ],
    workflows: [
      { step: '01', title: 'New Request Received', detail: 'A new customer inquiry arrives via WhatsApp, website form, email, or your CRM.' },
      { step: '02', title: 'Smart AI Processing', detail: 'The AI understands the question, checks your company rules, and decides the next best action.' },
      { step: '03', title: 'Instant Execution', detail: 'The AI replies to the customer, updates your database, and schedules the meeting automatically.' },
      { step: '04', title: 'Human Handover When Needed', detail: 'If a question needs personal executive attention, the AI alerts your team with a clear summary.' },
    ],
    useCases: [
      {
        title: 'Instant Customer Conversations',
        impact: '85% questions answered automatically',
        description: 'Immediate WhatsApp and web replies that keep hot prospects engaged so you never lose a customer to slow response times.',
      },
      {
        title: 'Company Document Search',
        impact: 'Find answers 10x faster',
        description: 'Your team can ask questions in plain English and instantly get verified answers from long PDFs, manuals, and spreadsheets.',
      },
      {
        title: 'Connecting All Your Software',
        impact: 'Zero manual copy-pasting',
        description: 'Billing, sales leads, inventory numbers, and customer messages update across all your platforms automatically.',
      },
    ],
  },
  {
    id: 'web-app-development',
    slug: 'web-app-development',
    title: 'Website & Application Development',
    shortDescription: 'From high-converting corporate websites to custom web and mobile apps, we design fast, modern digital experiences that turn visitors into loyal clients.',
    category: 'Web & Mobile Engineering',
    headline: 'Digital Experiences Engineered to Perform.',
    subheadline: 'We design and build clean, lightning-fast corporate websites, customer portals, and mobile apps that look stunning, load in under a second, and help you win more business.',
    fullDescription: 'Our team builds modern, easy-to-use websites and applications that load fast on any phone or computer, stay secure, and give your brand immediate credibility.',
    capabilities: [
      {
        title: 'Custom Website Development',
        description: 'Beautiful, custom-designed websites tailored to your brand with clean typography, smooth animations, and sub-second load times.',
      },
      {
        title: 'Corporate & Business Websites',
        description: 'Professional websites built to explain your offerings clearly, build trust with prospective clients, and capture qualified inquiries.',
      },
      {
        title: 'Web Application Development',
        description: 'Custom web software, customer dashboards, and internal business tools that help your team work faster from any browser.',
      },
      {
        title: 'Android & Mobile App Development',
        description: 'Smooth, user-friendly mobile apps for Android and iOS that work smoothly even when internet connectivity is spotty.',
      },
      {
        title: 'UI/UX Design & User Experiences',
        description: 'Clean, modern screen designs that are intuitive for your customers to navigate and simple for your team to manage.',
      },
      {
        title: 'Backend & Cloud Systems',
        description: 'Fast, secure server systems that handle high traffic smoothly and protect customer data with bank-grade encryption.',
      },
      {
        title: 'Database Architecture',
        description: 'Organized and secure database storage that ensures your company information is always backed up and quick to retrieve.',
      },
      {
        title: 'Custom Client Portals',
        description: 'Private portals where your clients can log in, view their project progress, download invoices, and manage their accounts.',
      },
    ],
    workflows: [
      { step: '01', title: 'Planning & Screen Wireframes', detail: 'We map out the pages, user journey, and key goals so everyone agrees on the blueprint.' },
      { step: '02', title: 'Clean Interface Design', detail: 'We create crisp, modern visual mockups showing exactly how the website will look and feel.' },
      { step: '03', title: 'Full-Stack Development', detail: 'We build your website with clean, secure code that works fast on phones, tablets, and computers.' },
      { step: '04', title: 'Testing & Launch', detail: 'We test speed, mobile display, and security thoroughly before publishing your site live.' },
    ],
    useCases: [
      {
        title: 'Credible Corporate Websites',
        impact: 'Loads in under 1 second',
        description: 'Modern company websites that look premium, explain what you do clearly, and inspire trust in new clients.',
      },
      {
        title: 'Internal Operations Dashboards',
        impact: 'Real-time business tracking',
        description: 'Easy-to-read business dashboards where managers can see operations, orders, and inquiries at a glance.',
      },
      {
        title: 'Easy-to-Use Mobile Apps',
        impact: 'Smooth 60fps performance',
        description: 'Reliable mobile apps for customers or field workers with offline caching and quick push notifications.',
      },
    ],
  },
  {
    id: 'seo-digital-growth',
    slug: 'seo-digital-growth',
    title: 'SEO & Digital Growth',
    shortDescription: 'Get your website found by buyers actively searching for your services on Google, and get recommended by modern AI engines like ChatGPT and Perplexity.',
    category: 'Search & Growth',
    headline: 'Build Visibility That Moves Your Business Forward.',
    subheadline: 'We optimize your website from the inside out so you rank higher on Google, get cited by AI tools like ChatGPT and Perplexity, and attract high-value clients without constantly spending on ads.',
    fullDescription: 'We focus on genuine, long-term search visibility. We fix technical roadblocks that hold your site back, optimize your content, and help you earn top positions on Google and modern AI search engines.',
    capabilities: [
      {
        title: 'Technical SEO & Page Speed',
        description: 'Deep website checkups to ensure Google can find all your pages, fix slow loading speeds, and eliminate technical glitches.',
      },
      {
        title: 'On-Page SEO & Content Structure',
        description: 'Clear page titles, helpful headings, structured search data, and relevant keywords that help Google understand your services.',
      },
      {
        title: 'Authoritative Brand Citations',
        description: 'Building your online reputation and credible industry mentions so search engines see your company as a trusted leader.',
      },
      {
        title: 'Keyword & Customer Intent Research',
        description: 'Finding the exact search phrases potential clients type into Google when they are ready to hire your services.',
      },
      {
        title: 'Comprehensive Website Audits',
        description: 'Clear, easy-to-read audit reports highlighting broken links, slow pages, and mobile display issues that reduce your traffic.',
      },
      {
        title: 'Google Rich Snippets & Features',
        description: 'Getting your business featured directly in Google answer boxes, FAQ dropdowns, star ratings, and AI overviews.',
      },
      {
        title: 'Helpful Content & Topic Collections',
        description: 'Organizing your articles and service guides into helpful collections that establish your industry expertise.',
      },
      {
        title: 'Clear Analytics & Growth Tracking',
        description: 'Simple, transparent dashboards showing exactly where your visitors come from and which pages bring in real inquiries.',
      },
    ],
    workflows: [
      { step: '01', title: 'Comprehensive Site Audit', detail: 'We inspect your existing website to find any hidden errors or slow pages that hold back your traffic.' },
      { step: '02', title: 'Keyword & Content Roadmap', detail: 'We identify what high-value buyers search for and map out the pages needed to capture them.' },
      { step: '03', title: 'Technical Code & Speed Fixes', detail: 'We speed up page loading, fix mobile issues, and add structured search data for Google.' },
      { step: '04', title: 'Rankings & Traffic Growth', detail: 'We publish helpful content collections and track your keyword positions and inbound inquiries.' },
    ],
    useCases: [
      {
        title: 'Winning Ready-to-Buy Clients',
        impact: 'Steady inbound client inquiries',
        description: 'Ranking at the top for specific search terms where business decision-makers are actively looking for vendors.',
      },
      {
        title: 'Safe Website Overhauls',
        impact: 'Zero traffic loss during upgrades',
        description: 'Relaunching or moving your website safely so your existing Google rankings and visitors are fully protected.',
      },
      {
        title: 'Becoming the Industry Authority',
        impact: 'Broad search visibility',
        description: 'Establishing your company as the go-to authority so Google and AI tools recommend your business first.',
      },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'enterprise-whatsapp-crm-automation',
    title: 'Autonomous WhatsApp & CRM AI Assistant',
    category: 'AI & Automation',
    clientType: 'Commercial Enterprise (Verified Case Study)',
    summary: 'A 24/7 WhatsApp AI assistant that automatically welcomes new leads, answers common questions, and saves client contact details directly into the CRM in under 12 seconds.',
    description: 'Designed and deployed an intelligent conversational flow using official WhatsApp Business tools and AI. The assistant greets incoming client inquiries, answers pricing and service questions directly from verified company documents, and records the lead into the database automatically.',
    challenge: 'Customers messaging late in the evening had to wait over 4 hours for a response, and leads were frequently lost between personal WhatsApp chats and messy spreadsheets.',
    solution: 'Built an intelligent WhatsApp assistant that replies instantly 24/7, answers questions accurately from company materials, and alerts sales reps the moment a hot lead is ready to talk.',
    outcomes: [
      'Dropped average first-response wait time from 4.2 hours to under 12 seconds',
      'Automated qualification for 82% of incoming prospect inquiries',
      'Eliminated manual data entry errors by syncing WhatsApp directly with the CRM',
    ],
    technologies: ['Node.js', 'WhatsApp Cloud API', 'OpenAI API', 'PostgreSQL', 'Redis', 'Docker'],
    deliverables: ['Custom Webhook Engine', 'Conversational Flow Architecture', 'Administrative Triage Dashboard', 'API Documentation'],
    featured: true,
  },
  {
    id: 'nextjs-fintech-corporate-portal',
    title: 'Corporate Web Platform for Asset Advisory',
    category: 'Web Applications',
    clientType: 'Financial Services Consultancy',
    summary: 'A fast, modern corporate web platform built to give an asset advisory firm institutional credibility, complete with interactive calculators and quick inquiry tools.',
    description: 'Built a premier institutional digital presence featuring custom financial calculation widgets, interactive service calculators, and bank-grade SSL/TLS compliance. Incorporates strict accessibility standards, dynamic sitemap indexing, and responsive Swiss-inspired typographic architecture.',
    challenge: 'The old website took almost 5 seconds to load, looked dated to corporate clients, and rarely converted mobile visitors.',
    solution: 'Redesigned and built a clean, high-speed Next.js platform with bank-grade security, interactive financial tools, and clear inquiry forms that load in less than a second.',
    outcomes: [
      'Google Lighthouse performance score elevated to 98/100',
      'Mobile inquiry form completion rate improved by 64%',
      'Average visitor session time increased 2.4x thanks to helpful interactive tools',
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
    summary: 'A mobile app and dispatcher dashboard that keeps drivers and managers connected in real-time, even when vehicles pass through areas with no cellular network.',
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
    title: 'Technical SEO Overhaul & Google Rank Boost',
    category: 'SEO & Growth',
    clientType: 'Cloud Software Vendor',
    summary: 'A technical overhaul that fixed hidden website errors, sped up loading times, and helped a B2B company rank on page 1 of Google for high-value search terms.',
    description: 'Conducted an exhaustive technical diagnostic across 1,200+ indexed URLs. Eliminated crawl traps, fixed canonical loops, implemented comprehensive JSON-LD breadcrumb and article schemas, and reconstructed internal linking graphs.',
    challenge: 'Trapped relying heavily on paid Google ads because their website was invisible in organic search due to hidden technical errors and slow loading speeds.',
    solution: 'Fixed slow page loading, restructured page headings, added search engine schemas, and created clear topic collections that helped Google reward them with top rankings.',
    outcomes: [
      'Fixed all broken links, duplicate pages, and crawling errors across the site',
      'Achieved 100% "Good" Core Web Vitals speed scores across mobile and desktop',
      'Significantly increased inbound organic leads from ready-to-buy commercial clients',
    ],
    technologies: ['Google Search Console', 'Screaming Frog', 'Next.js Dynamic Metadata', 'JSON-LD', 'Schema.org'],
    deliverables: ['Technical SEO Audit Report', 'Canonical & Redirect Architecture', 'Structured Schema Implementation', 'Topical Cluster Hierarchy'],
    featured: true,
  },
  {
    id: 'custom-internal-knowledge-ai-bot',
    title: 'Smart Internal Document Search Assistant',
    category: 'AI & Automation',
    clientType: 'Engineering Consultancy',
    summary: 'An internal enterprise AI assistant enabling staff to search through 15,000+ technical guides and PDFs in seconds with direct page citations.',
    description: 'Built a secure, hallucination-resistant internal intelligence tool. Ingests technical blueprints, PDF equipment guidelines, and safety manuals into a vector store. Engineers can ask questions in natural language and receive verifiable answers with exact page citations.',
    challenge: 'Engineers spent an estimated 6 hours every week digging through messy folders and old shared drives just to find one technical specification.',
    solution: 'Built a smart internal search tool that reads all company PDFs and lets staff ask questions in plain English to get instant, verified answers with exact page numbers.',
    outcomes: [
      'Cut document lookup time from 25 minutes down to under 5 seconds',
      '100% accurate citations linking straight to the relevant PDF page',
      'Adopted by over 12 departments across the company',
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI Embeddings', 'PostgreSQL (pgvector)', 'React', 'Tailwind CSS'],
    deliverables: ['Vector Ingestion Pipeline', 'Semantic Search API', 'Staff Search Console', 'Security & Access Role System'],
    featured: false,
  },
  {
    id: 'mobile-field-inspection-app',
    title: 'Offline-First Mobile Inspection App',
    category: 'Mobile Applications',
    clientType: 'Infrastructure Safety Agency',
    summary: 'A mobile app engineered for field technicians conducting safety audits in remote areas with zero cell phone reception.',
    description: 'Engineered an offline-first mobile application allowing inspectors to capture high-resolution photographic evidence, fill standardized audit rubrics, and generate cryptographic PDF inspection reports on-device.',
    challenge: 'Remote audit locations had no cell phone signal, causing inspectors to lose typed notes and delaying safety reports by several days.',
    solution: 'Built a mobile app that saves photos and inspection notes safely on the phone, then automatically uploads everything the moment the inspector reconnects to Wi-Fi or data.',
    outcomes: [
      'Zero lost inspection data across 3,500+ completed field audits',
      'Reports generated immediately on-site instead of waiting 3 business days',
      'Easy to use on phones and tablets even with industrial work gloves on',
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
    tagline: 'Understanding Your Business',
    description: 'We start with a friendly conversation to understand how your business works today, where your team spends too much time, and what goals you want to achieve.',
    deliverables: ['Clear Goals & Project Summary', 'Practical Feasibility Review', 'Transparent Scope & Timelines'],
  },
  {
    number: '02',
    name: 'Plan',
    tagline: 'Designing the Roadmap',
    description: 'We map out a simple, clear plan choosing the most reliable tools to give your business the highest return on investment without unnecessary complexity.',
    deliverables: ['System Workflow Diagram', 'App Integration Blueprint', 'Step-by-Step Delivery Schedule'],
  },
  {
    number: '03',
    name: 'Design',
    tagline: 'Clean, Intuitive Layouts',
    description: 'We design modern, easy-to-use screens and workflow maps so everyone on your team and your customers can use them effortlessly from day one.',
    deliverables: ['Interactive Screen Prototypes', 'Mobile & Desktop Layouts', 'Clear Design System'],
  },
  {
    number: '04',
    name: 'Build',
    tagline: 'Clean & Dependable Engineering',
    description: 'We write clean, high-performance code, connect your favorite apps, protect your data, and set up your automations with thorough testing.',
    deliverables: ['Tested Production Software', 'Seamless App Connections', 'Automatic Backups & Security'],
  },
  {
    number: '05',
    name: 'Launch',
    tagline: 'Testing & Going Live',
    description: 'We test everything thoroughly on phones and computers, make sure it is super fast and secure, train your team, and support you every step after launch.',
    deliverables: ['Speed & Security Verification', 'Team Handover & Training', 'Ongoing Care & Support'],
  },
];

export const WHY_MOTIVE_PRINCIPLES = [
  {
    number: '01',
    title: 'Business-First Thinking',
    description: 'We don’t build technology just because it’s trendy. Every automation, website feature, and design choice starts with a clear understanding of your business goals and what will save you time or help you grow.',
  },
  {
    number: '02',
    title: 'Thoughtful & Reliable Engineering',
    description: 'We build practical, dependable software that runs smoothly day in and day out. We avoid fragile shortcuts so your systems keep working reliably as your business scales.',
  },
  {
    number: '03',
    title: 'Practical Innovation',
    description: 'We use artificial intelligence where it truly helps—saving your team hours of manual work, answering customer inquiries in seconds, and eliminating human errors.',
  },
  {
    number: '04',
    title: 'Connected Systems',
    description: 'We make sure your website, AI tools, and search engine visibility work together seamlessly as one unified engine for your business.',
  },
  {
    number: '05',
    title: 'You Own Everything',
    description: 'You retain 100% full ownership of all custom code, designs, and data we build for you. We provide complete documentation with zero vendor lock-in.',
  },
];

export const TECH_ECOSYSTEM = [
  {
    category: 'AI & Smart Automation',
    description: 'Intelligent AI helpers, automatic document readers, and 24/7 WhatsApp customer assistants.',
    technologies: ['OpenAI & Claude', 'Python', 'WhatsApp Cloud API', 'Fast Data Search', 'Make & n8n Workflows'],
  },
  {
    category: 'Websites & Frontends',
    description: 'Clean, lightning-fast web pages and interactive portals that look great on any phone or computer.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Smooth Motion', 'Mobile-First Design'],
  },
  {
    category: 'Secure Backends & APIs',
    description: 'Rock-solid server backends that safely store customer records and connect your apps seamlessly.',
    technologies: ['Node.js', 'Python & FastAPI', 'Django', 'Express', 'Secure REST APIs', 'Cloud Containers'],
  },
  {
    category: 'Mobile Applications',
    description: 'Smooth, user-friendly mobile apps for Android and iOS that work even when offline.',
    technologies: ['Flutter & Dart SDK', 'Native Android', 'Offline SQLite', 'Fast Web Apps (PWA)', 'Push Notifications'],
  },
  {
    category: 'Cloud Hosting & Databases',
    description: 'Fast, secure cloud hosting with automatic daily backups and bank-level data encryption.',
    technologies: ['PostgreSQL Database', 'AWS Cloud Storage', 'Vercel Edge Hosting', 'Cloudflare Protection', 'Daily Backups'],
  },
  {
    category: 'Search & AI Discovery (SEO/AEO)',
    description: 'Top rankings on Google and AI recommendations across ChatGPT, Perplexity, and AI Overviews.',
    technologies: ['Google Search Console', 'ChatGPT & Perplexity Optimization', '100% PageSpeed', 'Structured Search Data', 'Google Analytics 4'],
  },
];
