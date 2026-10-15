import {
  Building2,
  CloudCog,
  Cpu,
  Layers,
  RefreshCw,
  Rocket,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface SolutionDetail {
  id: string;
  n: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  icon: LucideIcon;
  capabilities: string[];
  technologies: string[];
  benefits: string[];
  deliverables: string[];
}

export const SOLUTIONS_DATA: SolutionDetail[] = [
  {
    id: "startups-mvp",
    n: "01",
    title: "Startups & Product MVPs",
    badge: "Rapid Venture Launch",
    icon: Rocket,
    shortDesc: "Rapid prototypes and production foundations built fast, without technical debt.",
    fullDesc:
      "Turn early concepts into market-tested digital products. We partner with founders and venture studios to architect rapid, scalable MVPs with investor-grade code, modern cloud backends, and modular architectures designed to withstand hypergrowth.",
    capabilities: [
      "Rapid Prototype & MVP Architecture in 4–8 Weeks",
      "Investor-Grade Technical Due Diligence Readiness",
      "Product-Market Fit Telemetry & Analytics Instrumentation",
      "Modular Codebase Designed for Elastic Scaling",
      "Self-Service Cloud Foundations with Minimal Burn Rate",
      "Interactive High-Fidelity Clickable Prototypes",
    ],
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "AWS / Vercel",
      "Stripe API",
    ],
    benefits: [
      "Go from whiteboard concept to live production in weeks",
      "Zero technical debt: ready for Series A scaling without rewrites",
      "Lean architecture minimizing monthly cloud burn",
    ],
    deliverables: [
      "Production MVP Web & Mobile App deployed to live environments",
      "Clean, documented source code repository with full IP rights",
      "Authentication, Payment Gateway & User Database Integration",
      "Product analytics & error tracking setup (PostHog / Sentry)",
    ],
  },
  {
    id: "enterprise-apps",
    n: "02",
    title: "Enterprise Applications",
    badge: "Mission-Critical Systems",
    icon: Building2,
    shortDesc: "Secure, integrated systems that support high concurrency and complex operations.",
    fullDesc:
      "Engineered for organizations with demanding uptime, security, and integration requirements. We build robust multi-tenant platforms, ERP/CRM extensions, operational workflows, and microservice architectures compliant with strict corporate standards.",
    capabilities: [
      "High-Concurrency Distributed Architecture & Microservices",
      "Multi-Tenant SaaS & Role-Based Access Control (RBAC)",
      "Legacy ERP, CRM & Internal Core System Integrations",
      "Enterprise Security Audits, OAuth2, SSO & SOC2 Compliance",
      "Automated Disaster Recovery & 99.99% Availability Architecture",
      "Comprehensive Audit Logging & Granular Permission Trees",
    ],
    technologies: [
      "Go",
      "Node.js",
      "Java / Spring",
      "React",
      "PostgreSQL",
      "Kafka",
      "Kubernetes",
      "Redis",
      "Docker",
    ],
    benefits: [
      "Unbreakable reliability during peak operational demand",
      "Seamless integration with preexisting corporate IT ecosystems",
      "Rigorous audit logging, data encryption, and access governance",
    ],
    deliverables: [
      "Enterprise Application Suite & Microservices Repositories",
      "SSO / SAML / Active Directory Integration",
      "Security Audit Documentation & Compliance Verification",
      "Disaster recovery, backup, and failover runbooks",
    ],
  },
  {
    id: "cloud-transformation",
    n: "03",
    title: "Cloud Transformation",
    badge: "Cloud-Native Infrastructure",
    icon: CloudCog,
    shortDesc: "Migration, architecture and cost optimization across major cloud providers.",
    fullDesc:
      "Modernize your infrastructure into a resilient, elastic cloud ecosystem. We design multi-cloud strategies, containerize workloads with Kubernetes, automate infrastructure deployment through Terraform, and optimize monthly cloud spend.",
    capabilities: [
      "Lift-and-Shift to Cloud-Native Re-platforming",
      "Infrastructure as Code (IaC) with Terraform & OpenTofu",
      "Kubernetes Cluster Hardening & Production Autoscaling",
      "FinOps Audits & Cloud Cost Reduction Blueprints",
      "Multi-Cloud & Hybrid Cloud Resilience Strategies",
      "Automated CI/CD Pipelines with Zero-Downtime Releases",
    ],
    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Terraform",
      "Kubernetes",
      "Docker",
      "Datadog",
      "GitHub Actions",
    ],
    benefits: [
      "Average 30% reduction in monthly cloud infrastructure costs",
      "Sub-minute automated deployments with zero downtime",
      "Auto-scaling infrastructure handling traffic spikes seamlessly",
    ],
    deliverables: [
      "Automated Terraform IaC repositories",
      "Production Kubernetes clusters with ingress & security policies",
      "FinOps cost allocation report & resource optimization rules",
      "Centralized observability dashboards (metrics, logs, traces)",
    ],
  },
  {
    id: "ai-workflows",
    n: "04",
    title: "AI & Intelligent Workflows",
    badge: "Autonomous Systems",
    icon: Cpu,
    shortDesc: "Intelligent workflows, copilots and automation for measurable efficiency.",
    fullDesc:
      "Supercharge operational velocity with custom artificial intelligence. We engineer enterprise RAG systems, private copilot assistants, automated data extraction pipelines, and robotic process automation that eliminate manual bottlenecks.",
    capabilities: [
      "Enterprise Document Intelligence & Multimodal OCR",
      "Private LLM Copilots with Retrieval-Augmented Generation (RAG)",
      "Autonomous Agentic Pipelines & Business Process Automation",
      "Predictive Demand Modeling & Machine Learning Systems",
      "Strict Private Data Guardrails with Zero Model Training Leakage",
      "Semantic Search & Unified Enterprise Knowledge Bases",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "LangChain",
      "OpenAI / Claude APIs",
      "Pinecone",
      "Qdrant",
      "FastAPI",
      "Docker",
    ],
    benefits: [
      "Up to 75% reduction in manual document handling and data entry",
      "Instant, authoritative answers generated from corporate documents",
      "Enterprise-grade data isolation ensuring zero confidentiality breach",
    ],
    deliverables: [
      "Proprietary AI Pipeline Microservice & Vector DB Infrastructure",
      "Internal Knowledge Copilot Web Interface",
      "Admin Guardrail & Audit Log Dashboard",
      "System evaluation metrics & safety verification report",
    ],
  },
  {
    id: "legacy-modernization",
    n: "05",
    title: "Legacy Modernization",
    badge: "Architectural Evolution",
    icon: RefreshCw,
    shortDesc: "Re-platform ageing systems into modern, maintainable architectures.",
    fullDesc:
      "Eliminate technical debt and maintainability risks by upgrading ageing monoliths. We employ the Strangler Fig pattern to progressively migrate critical business logic into modern, test-covered microservices without interrupting daily operations.",
    capabilities: [
      "Monolith Decomposition via Strangler Fig Methodology",
      "Database Refactoring, Migration & Zero-Downtime Synchronization",
      "Frontend Modernization from Legacy Stacks to React/TypeScript",
      "Automated Regression Test Harnesses & API Contract Testing",
      "Performance Tuning, Query Optimization & Latency Reduction",
      "Technical Debt Auditing & Modernization Sizing",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Kafka",
      "Docker",
      "REST / GraphQL",
      "Playwright",
    ],
    benefits: [
      "Radically lower maintenance costs and faster feature velocity",
      "Zero disruption to existing customers during migration phases",
      "Attract top engineering talent with modern, clean tech stacks",
    ],
    deliverables: [
      "Phased Migration Roadmap & Risk Mitigation Plan",
      "Modernized Microservices & API Gateway Architecture",
      "Comprehensive automated test suites ensuring zero regression",
      "Cutover and decommissioning documentation",
    ],
  },
  {
    id: "managed-engineering",
    n: "06",
    title: "Managed Engineering & Care",
    badge: "Continuous Reliability",
    icon: Wrench,
    shortDesc: "Ongoing engineering, monitoring and proactive support for critical platforms.",
    fullDesc:
      "Keep your digital platforms running at peak performance with dedicated engineering support. We provide 24/7 telemetry monitoring, security patch management, performance optimization, and guaranteed response SLAs.",
    capabilities: [
      "24/7/365 Proactive Production Monitoring & Incident Response",
      "Guaranteed Response SLAs with Dedicated Escalation Channels",
      "Security Patching, Dependency Upgrades & Vulnerability Scans",
      "Database Index Maintenance & Continuous Performance Tuning",
      "Dedicated Monthly Engineering Sprint Allocations for Feature Upgrades",
      "Backup Verification & Disaster Recovery Drills",
    ],
    technologies: [
      "Prometheus",
      "Grafana",
      "PagerDuty",
      "Sentry",
      "AWS CloudWatch",
      "Terraform",
      "GitHub Actions",
    ],
    benefits: [
      "Peace of mind with guaranteed 15-minute critical incident response",
      "Prevent outages before they occur through predictive telemetry",
      "Continuous platform evolution without hiring large internal DevOps teams",
    ],
    deliverables: [
      "24/7 PagerDuty integration & incident response runbooks",
      "Monthly Performance, Security & Uptime SLA Reports",
      "Automated vulnerability scan dashboards",
      "Continuous sprint burndown and feature deployment logs",
    ],
  },
  {
    id: "digital-products",
    n: "07",
    title: "Digital Product Engineering",
    badge: "End-to-End Product Design",
    icon: Layers,
    shortDesc: "End-to-end product engineering from concept discovery to continuous delivery.",
    fullDesc:
      "We combine human-centric UX research, Figma prototyping, and robust full-stack engineering to build digital products that delight users and drive recurring revenue.",
    capabilities: [
      "User Experience (UX) Research & Interactive Figma Prototyping",
      "Design System Engineering & Component Library Architecture",
      "Full-Stack Web & Mobile Product Engineering",
      "Continuous User Feedback Loops & Product Analytics",
      "A/B Testing, Conversion Rate Optimization & Feature Flagging",
      "Multi-Platform Synchronization & Responsive Design",
    ],
    technologies: [
      "Figma",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostHog",
      "LaunchDarkly",
      "Mixpanel",
    ],
    benefits: [
      "Intuitive interfaces that reduce user onboarding drop-off",
      "Consistent design tokens across web, mobile, and marketing",
      "Data-driven feature releases with real-time conversion metrics",
    ],
    deliverables: [
      "Complete Figma Design System and interactive prototype",
      "Fully tested, accessible product codebase (WCAG AA)",
      "Product analytics taxonomy & funnel dashboard",
      "Feature release playbook & component documentation",
    ],
  },
];

export function getSolutionById(id: string): SolutionDetail | undefined {
  return SOLUTIONS_DATA.find(
    (s) => s.id === id || s.title.toLowerCase().includes(id.toLowerCase()),
  );
}
