# Motive Technologies — Corporate Website & Digital Platform

> **INNOVATE. AUTOMATE. TRANSFORM.**  
> *Smarter Automation. A Brighter Tomorrow.*

A premium, high-performance corporate web platform engineered for **Motive Technologies** (`www.motivetechnologies.in`). Designed with a Swiss-inspired architectural grid, restrained red accents (`#ED1C2E`), clean typography, and Next.js 15 App Router architecture.

---

## 1. Company Identity & Contact Specifications

- **Company Name**: Motive Technologies
- **Official Domain**: [www.motivetechnologies.in](https://www.motivetechnologies.in)
- **Official Email**: `motivetechnologies1@gmail.com`
- **Primary Phone**: `+91 7003526440`
- **Direct Line**: `+91 6289056881`
- **WhatsApp**: `+91 8777245321`
- **Brand Tagline**: `INNOVATE. AUTOMATE. TRANSFORM.`
- **Brand Statement**: `SMARTER AUTOMATION. A BRIGHTER TOMORROW.`

---

## 2. Core Service Capabilities

The website presents three interconnected pillars of modern technology transformation:

1. **AI Automation & Intelligent Systems** (`/services/ai-automation`)
   - Autonomous AI Agents & Reasoning Pipelines
   - Business Process Automation
   - Custom Workflow Automation
   - WhatsApp Cloud API Automation
   - AI-Powered Business Solutions & Semantic Retrieval (RAG)
   - API & Third-Party System Integrations
   - Intelligent Customer Support Systems
   - Custom Enterprise AI Integrations

2. **Website & Application Development** (`/services/web-app-development`)
   - Custom High-Performance Website Development
   - Corporate & Institutional Business Websites
   - Web Application Development (Next.js, React)
   - Android & Cross-Platform Mobile Applications (Flutter, Native Android)
   - UI/UX Design Systems & Swiss Editorial Layouts
   - Backend & API Architecture (Node.js, Python, FastAPI, Django)
   - High-Availability Database Modeling (PostgreSQL, Redis)
   - Custom Digital Enterprise Platforms

3. **Search Engine Optimization & Digital Growth** (`/services/seo-digital-growth`)
   - Technical SEO & Core Web Vitals Remediation (INP, LCP, CLS)
   - On-Page SEO & Semantic HTML Hierarchy
   - Structured Schema Markup (JSON-LD)
   - Off-Page SEO & Digital Authority Building
   - Commercial Intent & Keyword Research
   - Comprehensive Website Diagnostic Audits
   - Topical Authority Cluster Architecture
   - Transparent Organic Growth Analytics

---

## 3. Technology Stack

- **Framework**: Next.js 15 (App Router with React 19 Server & Client Components)
- **Language**: TypeScript 5.7+ (Strict type-safety)
- **Styling**: Tailwind CSS with custom design tokens (`#FFFFFF`, `#F7F7F7`, `#111111`, `#777777`, `#ED1C2E`, `#090909`)
- **Icons**: Lucide Icons
- **Animation & Visuals**: Generative interactive SVG/canvas architectural telemetry and Framer Motion micro-interactions
- **Backend API**: Next.js App Router API Route (`/api/contact`) with server-side validation and honeypot spam protection

---

## 4. Page Architecture & Routing

| Route | Page Name | Description |
|---|---|---|
| `/` | **Home** | Editorial hero, brand introduction, 3 core capabilities, Motive difference principles, 5-stage process journey, selected projects, tech ecosystem, and dark conversion closing. |
| `/services` | **Services Overview** | Comprehensive interconnected presentation of the three core capabilities. |
| `/services/ai-automation` | **AI Automation** | Before vs. After process visualization, 4-phase system flow, common business challenges. |
| `/services/web-app-development` | **Web & App Dev** | Browser telemetry mockup, Flutter mobile wireframe, technical layer matrix. |
| `/services/seo-digital-growth` | **SEO & Growth** | Search intelligence console, crawl budget analytics, topic cluster graph, audit deliverables. |
| `/about` | **About Us** | Vision, mission, brand philosophy, and architectural commitments. |
| `/work` | **Selected Work** | Filterable case architecture showcase with challenges, solutions, and verified outcomes. |
| `/contact` | **Contact & Inquiries** | Fully validated project enquiry console, service selector, budget tiers, and direct phone lines. |
| `/privacy-policy` | **Privacy Policy** | Data governance and confidentiality protection policy. |
| `/terms` | **Terms & Conditions** | Terms of service and professional engagement standards. |
| `/sitemap.xml` | **XML Sitemap** | Dynamic search engine indexing sitemap. |
| `/robots.txt` | **Robots Policy** | Crawler access permissions. |

---

## 5. Environment Variables & Email Configuration (Resend)

Inbound inquiries submitted on `/contact` are validated and dispatched via **[Resend](https://resend.com)** to `motivetechnologies1@gmail.com`.

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your environment variables:
```env
# Resend API Key (starts with re_)
RESEND_API_KEY=re_your_api_key_here

# Recipient email address for inbound notifications
CONTACT_RECEIVER_EMAIL=motivetechnologies1@gmail.com

# Sender email address
# Testing: "Motive Technologies <onboarding@resend.dev>"
# Production (with verified domain): "Motive Technologies <contact@motivetechnologies.in>"
RESEND_FROM_EMAIL=Motive Technologies <onboarding@resend.dev>
```

---

## 6. Development & Production Commands

### Installation
```bash
npm install
```

### Run Locally (Development)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start -- -p 3000
```

---

## 7. Deployment Guide

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Import the repository into your Vercel dashboard.
3. Framework preset will automatically detect Next.js.
4. Deploy! Zero additional configuration required.

### Deploying via Docker
A standard multi-stage Node.js Alpine Dockerfile can be added to package the application as a standalone container for AWS ECS, Google Cloud Run, or DigitalOcean App Platform.
