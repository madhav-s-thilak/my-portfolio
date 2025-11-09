import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Madhav",
  lastName: "S Thilak",
  name: `Madhav S Thilak`,
  role: "AI/ML Systems Engineer & Full-Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "madhav.s.thilak@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Malayalam"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Deep insights on production ML systems, full-stack architecture, and climate tech innovation</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/madhav-s-thilak",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/madhav-s-thilak-83680225a",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Production-grade AI/ML systems engineer deploying cutting-edge solutions across healthcare, climate tech, and business operations. Full-stack developer obsessed with scalable architecture and data-driven decision making.`,
  headline: (
    <>
      Transforming complex problems into <strong>production-ready AI systems</strong> that drive measurable business impact
    </>
  ),
  featured: {
    display: true,
    title: "✨ Featured: MediOps Platform",
    href: "/work/mediops-platform",
  },
  subline: (
    <>
      I engineer <strong>production-grade ML systems</strong> that bridge research innovation and real-world deployment. 
      Currently at <strong>Tidy Rabbit</strong> building intelligent waste management infrastructure, autonomous dashboards, 
      and enterprise automation tools. Background: deep learning explainability, MLOps, full-stack development, and strategic 
      vendor intelligence. Driven by impact: 80% efficiency gains, sub-second inference, FDA-compliant systems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, AI/ML Systems Engineer building production-grade intelligent systems`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Madhav is a production-focused AI/ML systems engineer and full-stack developer specializing in end-to-end 
        machine learning deployment, real-time analytics, and enterprise automation. With 6+ months of hands-on 
        experience at Tidy Rabbit and cutting-edge internships in AI research, he combines deep technical expertise 
        with business acumen. Passionate about explainable AI, MLOps rigor, and building systems that actually scale 
        in production. Published work spans federated learning, medical imaging AI, and intelligent tutoring systems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Professional Experience",
    experiences: [
      {
        company: "Tidy Rabbit",
        timeframe: "Jun 2024 - Present (6 months)",
        role: "Business Operations Intern",
        achievements: [
          <>
            Architected and deployed <strong>Tidy Rabbit Operations Dashboard</strong> — a real-time analytics 
            platform processing 1,492+ recycling companies across India. Stack: Streamlit, Python, PostgreSQL, 
            Plotly. Features live database integration, multi-dimensional filtering, automated data quality scoring 
            (0-100%), geographic intelligence, and compliance tracking. Impact: <strong>80% reduction</strong> in 
            manual reporting, <strong>40% faster</strong> compliance cycle times, <strong>99.2% uptime</strong>.
          </>,
          <>
            Built <strong>WhatsApp Message Automator</strong> using Twilio API for intelligent vendor communication 
            and customer engagement. Achieved <strong>85% delivery rate</strong>, eliminated manual outreach bottleneck, 
            reduced operational overhead by <strong>75%</strong>. Integrated with production database for real-time 
            scheduling and success tracking.
          </>,
          <>
            Executed vendor intelligence operations: researched and evaluated 50+ portable pod manufacturers and 
            plastic recyclers, compiled competitive intelligence, streamlined <strong>vendor onboarding by 30%</strong>, 
            contributed to strategic EPR compliance initiatives.
          </>,
        ],
        images: [],
      },
      {
        company: "UST Global",
        timeframe: "May 2024 - Jul 2024",
        role: "AI/ML Engineer Intern",
        achievements: [
          <>
            Led development of <strong>LLM-Guided Chess Tutoring System</strong> — innovative platform integrating 
            Stockfish 16.1 with advanced LLMs (Llama3 70B, Gemma 2 9B, GPT-4). Pioneered Mixture-of-Agents (MOA) 
            methodology for chess domain. Hand-engineered prompts across 5 endgame categories, deployed models on 
            Groq API. Results: <strong>sub-1-second</strong> inference, <strong>92% pedagogical effectiveness</strong>, 
            100+ curated endgame puzzles.
          </>,
          <>
            Engineered full-stack solution: optimized backend ML pipeline with model versioning, real-time inference, 
            and interactive frontend (HTML/CSS/JavaScript). Evaluated 5+ LLM architectures, compared against 
            baseline Stockfish-only system. Delivered <strong>expert-level chess instruction</strong> via natural 
            language interaction. Collaborated with cross-functional team across BITS Pilani campuses.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "BITS Pilani",
        description: <>B.Tech in Civil Engineering (Pursuing) — Strong foundation in systems thinking and scalability</>,
      },
      {
        name: "IBM Full Stack Software Developer Professional Certificate",
        description: (
          <>
            15 course certificates covering Full Stack Development, Cloud Computing, DevOps, Containerization, 
            Database Management, and Modern Web Technologies. Completed November 2025.
          </>
        ),
      },
      {
        name: "Generative AI & LLM Specialization (In Progress)",
        description: <>Deep dive into RAG systems, prompt engineering, and production LLM deployment</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "Machine Learning & AI",
        description: (
          <>
            Production-grade ML systems with enterprise-scale MLOps. Deep expertise in multi-label classification, 
            explainable AI (GradCAM, SHAP), federated learning, drift detection, and automated retraining pipelines. 
            Built systems achieving 94% sensitivity, 89% specificity across 14-class medical diagnostics.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "TensorFlow", icon: "code" },
          { name: "PyTorch", icon: "code" },
          { name: "Scikit-learn", icon: "code" },
          { name: "MLflow", icon: "settings" },
          { name: "SHAP/GradCAM", icon: "analytics" },
        ],
        images: [],
      },
      {
        title: "Full-Stack Development",
        description: (
          <>
            End-to-end web application development across mobile, desktop, and cloud. Built production dashboards, 
            RESTful APIs, real-time data visualization systems. Expert in responsive design, component architecture, 
            state management, and cloud deployment on Vercel, Streamlit Cloud, Hugging Face.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Streamlit", icon: "code" },
          { name: "TypeScript", icon: "code" },
          { name: "Tailwind CSS", icon: "code" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Backend & Cloud Infrastructure",
        description: (
          <>
            Enterprise-grade backend systems with API design, database optimization, and cloud architecture. 
            Experience with PostgreSQL, DuckDB, connection pooling, query optimization, Docker containerization, 
            and Kubernetes-ready deployments. Built systems handling 1,492+ records with sub-second response times.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Flask/FastAPI", icon: "code" },
          { name: "PostgreSQL", icon: "database" },
          { name: "Docker", icon: "settings" },
          { name: "REST APIs", icon: "settings" },
          { name: "SQLAlchemy ORM", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Data Engineering & MLOps",
        description: (
          <>
            Real-time data pipelines, ETL systems, automated model versioning, CI/CD automation, and production 
            monitoring. Expertise in DVC for data lineage, GitHub Actions for deployment automation, Evidently AI 
            for drift detection. Built systems with 99.8% uptime and zero data loss.
          </>
        ),
        tags: [
          { name: "DVC", icon: "settings" },
          { name: "GitHub Actions", icon: "code" },
          { name: "MLflow", icon: "settings" },
          { name: "Prometheus", icon: "analytics" },
          { name: "Pandas", icon: "code" },
          { name: "Data Validation", icon: "check" },
        ],
        images: [],
      },
      {
        title: "Business Operations & Strategic Analytics",
        description: (
          <>
            Vendor intelligence, EPR compliance management, business process automation, and data-driven strategy. 
            Skilled in stakeholder management, competitive analysis, quotation evaluation, and operational optimization. 
            Successfully managed 50+ vendor relationships and streamlined procurement by 30%.
          </>
        ),
        tags: [
          { name: "Vendor Management", icon: "settings" },
          { name: "EPR Compliance", icon: "check" },
          { name: "Business Analytics", icon: "analytics" },
          { name: "Strategic Automation", icon: "automation" },
          { name: "Data Intelligence", icon: "code" },
          { name: "Process Optimization", icon: "settings" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Engineering Insights",
  description: `Deep dives on production ML systems, full-stack architecture, and building systems that scale`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Production-grade AI/ML systems, real-time analytics platforms, and full-stack applications delivering measurable business impact`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Visual showcase of projects, deployments, and team collaborations`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "MediOps production deployment",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Tidy Rabbit dashboard analytics",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Chess tutoring system interface",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "ML model training and deployment",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Real-time data visualization",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Production system architecture",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
