import {
  BrainCircuit,
  Cloud,
  Code2,
  Compass,
  Database,
  Shield,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  id: string;
  n: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  icon: LucideIcon;
  capabilities: string[];
  technologies: string[];
  benefits: string[];
  deliverables: string[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "custom-software",
    n: "01",
    title: "Custom Software Development",
    shortDesc: "Scalable and secure software solutions designed around your business requirements.",
    fullDesc:
      "We architect, build, and deploy enterprise-grade custom software systems tailored precisely to your operational workflows and business objectives. From high-throughput distributed backends to intuitive operational dashboards, our engineering teams ensure security, performance, and long-term maintainability.",
    badge: "Enterprise Architecture",
    icon: Code2,
    capabilities: [
      "Microservices & High-Concurrency Distributed Backends",
      "Custom ERP, CRM & Internal Operations Engines",
      "Robust API Design, Integrations & API Gateway Routing",
      "Enterprise Security, OAuth2, RBAC & SOC2 Compliance",
      "Automated CI/CD Testing & Static Code Security Verification",
      "Monolith Decomposition & Legacy Modernization",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Go",
      "Python",
      "React",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Redis",
      "GraphQL",
    ],
    benefits: [
      "100% Intellectual Property ownership with zero vendor lock-in",
      "High-throughput architecture designed for elastic horizontal scale",
      "Maintainable, test-covered codebases that minimize technical debt",
    ],
    deliverables: [
      "Complete Source Code & Git Repository with full documentation",
      "Automated CI/CD deployment pipelines & staging environments",
      "Comprehensive API documentation (OpenAPI / Swagger)",
      "Architecture diagram & operations runbook",
    ],
  },
  {
    id: "web-mobile",
    n: "02",
    title: "Web & Mobile Development",
    shortDesc: "Modern web platforms and mobile applications designed for exceptional user experiences.",
    fullDesc:
      "Deliver engaging digital experiences across every screen. We craft high-speed Progressive Web Applications (PWAs), cross-platform iOS and Android apps, and responsive web portals with fluid animations, intuitive UX, and robust offline capabilities.",
    badge: "Cross-Platform & Web",
    icon: Smartphone,
    capabilities: [
      "High-Performance SSR & SPA Web Platforms",
      "Cross-Platform Native Mobile Apps (iOS & Android)",
      "Interactive Customer Portals, Dashboards & SaaS UIs",
      "Offline-First Data Sync, Push Notifications & Biometrics",
      "Core Web Vitals Optimization & Sub-Second Page Speeds",
      "Design Systems & Accessible Component Libraries (WCAG AA)",
    ],
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "iOS / Swift",
      "Android / Kotlin",
      "Flutter",
      "Vite",
    ],
    benefits: [
      "Unified cross-platform codebases reducing engineering costs by up to 40%",
      "Sub-second load times that substantially improve user conversion and retention",
      "Fluid, responsive touch interactions engineered for all screen resolutions",
    ],
    deliverables: [
      "Production-ready Web Application & Mobile Store Deployments (App Store / Play Store)",
      "Reusable UI Component Library & Figma Design Tokens",
      "End-to-end integration tests & performance audit report",
      "Analytics & Telemetry setup (PostHog, Google Analytics, Sentry)",
    ],
  },
  {
    id: "cloud-solutions",
    n: "03",
    title: "Cloud Solutions & DevOps",
    shortDesc: "Cloud architecture, migration and optimization solutions built for scalability and reliability.",
    fullDesc:
      "Harness the power of AWS, Microsoft Azure, and Google Cloud with resilient cloud-native architectures. We guide organizations through migration planning, Infrastructure as Code (IaC), zero-downtime CI/CD pipelines, and cloud cost governance.",
    badge: "Multi-Cloud & Infrastructure",
    icon: Cloud,
    capabilities: [
      "Cloud Migration Planning & Zero-Downtime Database Replication",
      "Infrastructure as Code (IaC) with Terraform & OpenTofu",
      "Kubernetes (EKS/AKS/GKE) Container Orchestration",
      "Serverless Event-Driven Architectures (AWS Lambda, Azure Functions)",
      "FinOps Cloud Cost Optimization & Reserved Instance Strategy",
      "24/7 Monitoring, Alerting & Automated Incident Response",
    ],
    technologies: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud Platform (GCP)",
      "Kubernetes",
      "Docker",
      "Terraform",
      "Prometheus & Grafana",
      "Datadog",
      "GitHub Actions",
    ],
    benefits: [
      "Typical 25% - 40% reduction in cloud infrastructure expenditures",
      "99.99% service availability with multi-region failover configurations",
      "Automated releases eliminating human deployment errors",
    ],
    deliverables: [
      "Fully codified Infrastructure as Code (IaC) repositories",
      "Hardened Kubernetes clusters with auto-scaling policies",
      "Centralized observability dashboards and SLA alerting",
      "Disaster recovery and automated backup playbooks",
    ],
  },
  {
    id: "ai-automation",
    n: "04",
    title: "AI & Intelligent Automation",
    shortDesc: "AI-powered solutions and intelligent automation that improve efficiency and accelerate growth.",
    fullDesc:
      "Unlock transformative efficiency with custom artificial intelligence and robotic process automation. We build proprietary LLM copilots, automated document intelligence, predictive analytics models, and autonomous agent workflows that elevate business performance.",
    badge: "Generative AI & Machine Learning",
    icon: BrainCircuit,
    capabilities: [
      "Enterprise Custom LLM Copilots & RAG Knowledge Retrieval",
      "Intelligent Document Processing & Multimodal Extraction",
      "Predictive Analytics, Churn Prediction & Forecasting Models",
      "Autonomous Agentic Workflows & Robotic Process Automation (RPA)",
      "Natural Language Processing (NLP) & Semantic Search",
      "Enterprise Data Privacy Guardrails & AI Governance",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "OpenAI / Anthropic APIs",
      "LangChain",
      "LlamaIndex",
      "Pinecone / Qdrant Vector DBs",
      "Hugging Face",
      "FastAPI",
    ],
    benefits: [
      "Automate up to 70% of repetitive operational and administrative tasks",
      "Instant, verified answers retrieved from vast enterprise documentation",
      "Zero data leakage: enterprise data is never used to train public foundation models",
    ],
    deliverables: [
      "Trained / Fine-Tuned Model Weights or RAG Pipeline Microservice",
      "Vector database embeddings infrastructure & ingestion pipelines",
      "Interactive Chat Copilot UI & Admin Guardrail Dashboard",
      "Benchmark evaluation & safety guardrail report",
    ],
  },
  {
    id: "data-analytics",
    n: "05",
    title: "Data Engineering & Analytics",
    shortDesc: "Transform complex data into actionable insights with modern analytics solutions.",
    fullDesc:
      "Transform raw telemetry and transactional records into strategic advantage. We design robust ETL/ELT data pipelines, modern data warehouses, real-time streaming architectures, and executive BI dashboards that empower evidence-based leadership.",
    badge: "Big Data & BI",
    icon: Database,
    capabilities: [
      "Modern Data Warehouse & Lakehouse Engineering (Snowflake, BigQuery)",
      "Real-Time Stream Processing with Apache Kafka & Spark",
      "Automated ELT/ETL Pipelines with dbt & Airflow",
      "Executive BI Dashboards with PowerBI, Tableau & Superset",
      "Customer 360 Data Models & Attribution Analytics",
      "Data Governance, Lineage Tracking & Automated Quality Checks",
    ],
    technologies: [
      "Snowflake",
      "Google BigQuery",
      "Apache Kafka",
      "dbt",
      "PostgreSQL",
      "Apache Spark",
      "Python",
      "PowerBI",
      "Apache Superset",
    ],
    benefits: [
      "Unified single source of truth across all product and business units",
      "Sub-minute data refresh latency enabling real-time tactical decisions",
      "Elimination of brittle manual spreadsheets and conflicting metric definitions",
    ],
    deliverables: [
      "Automated dbt data models and data transformation repositories",
      "Executive and operational BI dashboards tailored to team stakeholders",
      "Data dictionary, catalog and governance documentation",
      "Data validation test suites with automated anomaly alerting",
    ],
  },
  {
    id: "it-consulting",
    n: "06",
    title: "IT Consulting & Digital Strategy",
    shortDesc: "Strategic technology consulting to help organizations make smarter technology decisions.",
    fullDesc:
      "Navigate technology choices with senior architects and strategic advisors. We assist C-suite and engineering leaders with architectural audits, technology stack evaluations, cybersecurity posture assessments, and digital roadmap execution.",
    badge: "Strategic Advisory",
    icon: Compass,
    capabilities: [
      "Comprehensive Architecture & Codebase Health Audits",
      "Digital Transformation Roadmaps & Feasibility Roadmapping",
      "Fractional CTO & Strategic Technical Advisory",
      "Cybersecurity, Privacy & Compliance Guidance (ISO 27001, SOC2, HIPAA)",
      "Vendor & Third-Party SaaS Tool Evaluation",
      "Engineering Process Optimization (Agile, DevSecOps, DORA Metrics)",
    ],
    technologies: [
      "Enterprise Architecture",
      "TOGAF Framework",
      "DevSecOps",
      "Cloud FinOps",
      "Security Auditing",
      "SOC2 / ISO 27001 Frameworks",
    ],
    benefits: [
      "De-risk multi-million dollar technology investments before writing code",
      "Accelerate speed-to-market using battle-tested architectural blueprints",
      "Align engineering capabilities directly with quarterly revenue goals",
    ],
    deliverables: [
      "Comprehensive Architecture Assessment & Technical Audit Report",
      "12 to 36-Month Digital Transformation Strategic Roadmap",
      "Technology Radar & Stack Selection Recommendation Document",
      "Risk Register, Remediation Matrix & Executive Summary",
    ],
  },
];

export const SECURITY_SERVICE: ServiceDetail = {
  id: "security-compliance",
  n: "07",
  title: "Cybersecurity & Cloud Compliance",
  shortDesc: "End-to-end security architecture, vulnerability hardening, and compliance governance.",
  fullDesc:
    "Protect mission-critical data and infrastructure with proactive cybersecurity engineering. We implement zero-trust network access, continuous vulnerability scanning, SOC2/ISO 27001 readiness, and identity governance to ensure your systems remain impenetrable.",
  badge: "Zero-Trust & Compliance",
  icon: Shield,
  capabilities: [
    "Zero-Trust Architecture & Identity Access Management (IAM / RBAC)",
    "SOC2 Type II, ISO 27001, HIPAA & GDPR Compliance Readiness",
    "Automated Vulnerability Scanning & Cloud Security Posture Management (CSPM)",
    "API Security Audits, OWASP Top 10 Mitigation & DDoS Protection",
    "End-to-End Encryption at Rest and in Transit (KMS / Vault)",
    "24/7 Security Incident Response Playbooks & Threat Monitoring",
  ],
  technologies: [
    "HashiCorp Vault",
    "Cloudflare WAF",
    "OAuth 2.0 / OIDC",
    "Open Policy Agent (OPA)",
    "AWS GuardDuty",
    "Kubernetes RBAC",
    "Trivy",
    "SonarQube",
    "Snyk",
  ],
  benefits: [
    "Proactively safeguard customer data and intellectual property",
    "Accelerate enterprise sales cycles with audit-ready compliance posture",
    "Minimize attack surfaces across cloud, mobile, and distributed services",
  ],
  deliverables: [
    "Comprehensive Security Audit & Threat Modeling Report",
    "Hardened Identity & Access Management (IAM) Configuration",
    "Regulatory Compliance Gap Analysis & Remediation Matrix",
    "Security Incident Response Playbook & Runbook Documentation",
  ],
};

export function getServiceById(id: string): ServiceDetail | undefined {
  if (id === "security" || id === "security-compliance") return SECURITY_SERVICE;
  return (
    SERVICES_DATA.find(
      (s) => s.id === id || s.title.toLowerCase().includes(id.toLowerCase()),
    ) || (id.toLowerCase().includes("security") ? SECURITY_SERVICE : undefined)
  );
}
