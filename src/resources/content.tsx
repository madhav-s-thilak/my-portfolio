import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Madhav",
  lastName: "S Thilak",
  name: `Madhav S Thilak`,
  role: "AI/ML Engineer & Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "madhav.s.thilak@gmail.com",
  location: "Asia/Kolkata", // Coimbatore, India timezone
  languages: ["English", "Hindi", "Malayalam"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on AI/ML, full-stack development, and production systems</>,
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
  description: `Production-grade AI/ML systems engineer | Full-stack developer | Building the future of intelligent automation`,
  headline: (
    <>
      Crafting <strong>intelligent systems</strong> that transform complex problems into elegant,
      scalable solutions
    </>
  ),
  featured: {
    display: true,
    title: "🚀 Featured: MediOps Platform",
    href: "/work/mediops-platform",
  },
  subline: (
    <>
      I'm Madhav, an <strong>AI/ML engineer & full-stack developer</strong> obsessed with deploying
      production-grade systems that actually <em>work</em>. Currently building at
      <strong> Tidy Rabbit</strong> — creating intelligent dashboards, automating workflows, and
      revolutionizing waste management with cutting-edge technology.
    </>
  ),
};


const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Kerala, India`,
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
        Madhav is an AI/ML engineer and full-stack developer with expertise in
        building production-grade machine learning systems. With a strong foundation in Python,
        React, and MLOps, he specializes in creating end-to-end solutions that combine business
        intelligence with technical excellence. His work spans healthcare AI, Climate Tech, 
        and business process automation.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Tidy Rabbit",
        timeframe: "Jun 2024 - Present (6 months)",
        role: "Business Operations Intern",
        achievements: [
          <>
            Developed <strong>Tidy Rabbit Dashboard</strong> - a comprehensive analytics platform
            using Streamlit, Python, and PostgreSQL for real-time waste management operations
            tracking. The dashboard reduced manual reporting time by 80% and improved data
            accessibility by 40%.
          </>,
          <>
            Created <strong>WhatsApp Message Automator</strong> - an intelligent message delivery
            system using Twilio API for vendor communication and customer engagement. Achieved 85%
            message delivery rate and reduced manual outreach workload by 75%.
          </>,
          // <>
          //   Managed vendor relationships and collected quotations from 50+ portable pod
          //   manufacturers and plastic recyclers for EPR compliance projects, streamlining vendor
          //   onboarding by 30%.
          // </>,
          // <>
          //   Conducted mystery shopper tasks and competitive analysis for waste management services
          //   across Coimbatore, contributing to operational improvements and service quality
          //   enhancement.
          // </>,
        ],
        images: [],
      },
      {
        company: "UST",
        timeframe: "May 2024 - Jul 2024",
        role: "AI/ML Engineer Intern",
        achievements: [
          <>
            Built a <strong>LLM-guided chess tutoring system</strong> integrating Stockfish with Llama3,
            Gemma, and GPT-4. Fine-tuned models using advanced Mixture-of-Agents (MOA) methodologies for
            intelligent game analysis and personalized learning.
          </>,
          <>
            Engineered full-stack solution with optimized backend ML pipeline and interactive frontend,
            delivering real-time model inference and expert-level chess instruction through natural
            language interaction.
          </>,
        ],
        images: [],
      },
      
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "BITS Pilani",
        description: <>B.Tech in Civil Engineering (Pursuing)</>,
      },
      {
        name: "IBM Full Stack Software Developer",
        description: (
          <>
            Completed 15 course certificates covering Full Stack Development, Cloud Computing,
            DevOps, and Modern Web Technologies (November 2025)
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Machine Learning & AI",
        description: (
          <>
            Production-grade ML systems with MLOps capabilities. Expertise in building,
            monitoring, and deploying multi-label classification models, implementing explainable
            AI with SHAP and GradCAM, and automated model retraining pipelines.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "TensorFlow", icon: "code" },
          { name: "PyTorch", icon: "code" },
          { name: "Scikit-learn", icon: "code" },
          { name: "MLOps", icon: "settings" },
          { name: "SHAP", icon: "analytics" },
        ],
        images: [],
      },
      {
        title: "Full Stack Development",
        description: (
          <>
            End-to-end web application development with modern frameworks. Built interactive
            dashboards, RESTful APIs, and real-time data visualization systems. Proficient in
            responsive design, state management, and cloud deployment.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Streamlit", icon: "code" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "code" },
          { name: "HTML/CSS", icon: "code" },
        ],
        images: [],
      },
      {
        title: "Backend & Databases",
        description: (
          <>
            Robust backend systems with API design, database management, and cloud infrastructure.
            Experience with PostgreSQL, SQLite, real-time data processing, and scalable
            architectures for enterprise applications.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Flask", icon: "code" },
          { name: "FastAPI", icon: "code" },
          { name: "PostgreSQL", icon: "database" },
          { name: "SQL", icon: "database" },
          { name: "REST APIs", icon: "settings" },
        ],
        images: [],
      },
      {
        title: "Business Operations & Automation",
        description: (
          <>
            Vendor management, EPR compliance implementation, business process automation, and
            analytics. Strong communication skills with experience in stakeholder management,
            quotation analysis, and operational efficiency optimization.
          </>
        ),
        tags: [
          { name: "Vendor Mgmt", icon: "settings" },
          { name: "EPR Compliance", icon: "check" },
          { name: "Automation", icon: "automation" },
          { name: "Analytics", icon: "analytics" },
          { name: "Streamlit", icon: "code" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights on AI/ML and Full Stack Development",
  description: `Read about ${person.name}'s journey in building production ML systems`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI/ML and full-stack development projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Project Gallery – ${person.name}`,
  description: `Visual showcase of projects and team moments by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Project showcase",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Team collaboration",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Dashboard development",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "ML model training",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
