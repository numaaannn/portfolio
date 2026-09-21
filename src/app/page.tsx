"use client";

import Image from "next/image";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";
import { CanvasText } from "@/components/ui/canvas-text";
import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FloatingDock } from "@/components/ui/floating-dock";

const projects = [
  { title: "Customer Segmentation & Recommendation System", description: "Segmented customers into 6 behavior-based groups using K-Means, PCA, EDA, and customer transaction attributes. Deployed as an interactive Streamlit app.", image: "/customer-segmentation-placeholder.svg", tools: ["K-Means", "PCA", "Pandas", "Scikit-learn", "Streamlit"], link: "https://github.com/numaaannn" },
  { title: "Jewellery Store Website with AI Chatbot", description: "Built a responsive e-commerce site with an AI chatbot using prompt templates for product, pricing, and shipping queries. Deployed on Vercel.", image: "/Screenshot 2026-02-01 155259.png", tools: ["React.js", "Tailwind CSS", "LLM APIs", "NLP"], link: "https://numaanssilver-shop-silver.vercel.app/" },
  { title: "Personal Portfolio Website", description: "Responsive portfolio with reusable components showcasing projects and certifications, deployed on Vercel.", image: "/Screenshot 2025-07-03 175732.png", tools: ["React.js", "Tailwind CSS", "Vercel"], link: "https://github.com/numaaannn" },
];

const certifications = [
  ["Deep Learning with Keras and TensorFlow", "IBM", "April 2026"], ["The Nuts and Bolts of Machine Learning", "Google", "April 2026"], ["Introduction to Deep Learning & Neural Networks with Keras", "IBM", "March 2026"], ["Developing Front-End Apps with React", "IBM", "November 2025"], ["React Basics", "Meta", "October 2025"], ["Python Programming Essentials", "Rice University", "May 2025"], ["Foundations of User Experience Design", "Google", "March 2025"], ["CCNA Foundations", "Packt", "May 2025"], ["Introduction to Cyber Attacks", "New York University", "May 2025"],
];

function SectionTitle({ children }: { children: React.ReactNode }) { return <h2 className="old-section-title">{children}</h2>; }

export default function Page() {
  const dockItems = [
    { title: "Home", icon: "⌂", href: "#home" },
    { title: "About", icon: "✦", href: "#about" },
    { title: "Experience", icon: "◌", href: "#experience" },
    { title: "Skills", icon: "⌘", href: "#skills" },
    { title: "Education", icon: "▤", href: "#education" },
    { title: "Certifications", icon: "◇", href: "#certifications" },
    { title: "Projects", icon: "▦", href: "#projects" },
    { title: "Download CV", icon: "↓", href: "/Numaan_Opai_Resume.pdf", download: true },
  ];
  return <AuroraBackground className="old-site" showRadialGradient>
    <header className="old-header"><a href="#home" className="old-logo">Portfolio</a></header>
    <FloatingDock items={dockItems} />
    <main className="old-main">
      <section className="old-hero" id="home"><div className="old-profile"><Image src="/Screenshot 2025-07-03 152722.png" alt="Numaan Opai" width={310} height={310} /></div><div className="old-hero-copy"><div className="old-kicker">Turning data into <FlipWords words={["insights", "models", "decisions", "impact", "solutions"]} className="hero-flip-words" /></div><CanvasText text="NUMAAN OPAI" className="hero-canvas-name" colors={["#f1f3f5", "#c7cdd4", "#8f98a3"]} animationDuration={6} lineGap={13} curveIntensity={48} /><CanvasText text="DATA SCIENCE / ML" className="hero-canvas-role" colors={["#f1f3f5", "#b5bcc5", "#727b86"]} animationDuration={4} lineGap={9} curveIntensity={30} /><p className="old-lede">MCA (AI &amp; ML) graduate with a strong foundation in Python, SQL, and machine learning. I turn real-world data into useful insights and practical products.</p><div className="old-actions"><a href="#projects" className="old-button">View My Work</a><a href="/Numaan_Opai_Resume.pdf" download="Numaan_Opai_Resume.pdf" className="old-button outline">Download CV</a></div></div></section>
      <section className="old-contact"><a href="mailto:numaan.y.opai@gmail.com">numaan.y.opai@gmail.com</a><span>+91 8390963603</span><a href="https://linkedin.com/in/numaan-yunus-opai" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/numaaannn" target="_blank" rel="noreferrer">GitHub</a><span>Nagpur, Maharashtra</span></section>
      <section className="old-section" id="about"><SectionTitle>About Me</SectionTitle><div className="old-about"><div className="old-about-copy"><p>I work across data preprocessing, exploratory data analysis, statistical analysis, and model evaluation to turn real-world data into useful insights.</p><p>I enjoy building practical machine learning workflows with Python, Pandas, NumPy, and Scikit-learn, while also using my frontend experience to make results easy to explore.</p></div><div className="old-about-animation"><TextFlippingBoard text={"PYTHON / SQL\nMACHINE LEARNING"} duration={1.2} /></div></div></section>
      <section className="old-section" id="experience"><SectionTitle>Experience</SectionTitle><div className="old-cards"><article className="old-card"><p className="old-date">March 2026 – August 2026</p><h3>Data Science Apprentice</h3><strong>Vigo Technoworld Pvt. Ltd.</strong><ul><li>Cleaned raw customer transaction data with SQL, Python, Pandas, and NumPy.</li><li>Built a K-Means model to segment customers into 6 behavior-based groups.</li><li>Used PCA to improve interpretability and visualize high-dimensional data.</li></ul></article><article className="old-card"><p className="old-date">February 2025 – August 2025</p><h3>Web Development Intern</h3><strong>Smart Software Solutions</strong><ul><li>Built 8–10 responsive UI components with React, JavaScript, and Tailwind CSS.</li><li>Integrated REST APIs and collaborated with Git and GitHub.</li></ul></article></div></section>
      <section className="old-section" id="skills"><SectionTitle>Skills</SectionTitle><div className="old-skill-grid"><div><h3>Programming &amp; Data</h3><p>Python · SQL · Pandas · NumPy · Matplotlib · Seaborn</p></div><div><h3>Machine Learning</h3><p>Supervised learning · Unsupervised learning · Feature engineering · Model evaluation · Statistical analysis</p></div><div><h3>Deep Learning &amp; Tools</h3><p>TensorFlow · Keras · Scikit-learn · Streamlit · Google Colab · Jupyter Notebook</p></div><div><h3>Web Development</h3><p>React.js · Tailwind CSS · REST APIs · JSON · Git · GitHub</p></div></div></section>
      <section className="old-section moving-toolkit-section" id="toolkit"><SectionTitle>What I Work With</SectionTitle><p className="moving-toolkit-intro">A few tools I use to move from raw data to clear, useful results.</p><InfiniteMovingCards speed="slow" items={[{ quote: "Clean, flexible data workflows", name: "Python", title: "Programming language" }, { quote: "Query, join, and understand data", name: "SQL", title: "Database analysis" }, { quote: "Explore patterns and prepare datasets", name: "Pandas + NumPy", title: "Data science toolkit" }, { quote: "Train and evaluate practical models", name: "Scikit-learn", title: "Machine learning" }, { quote: "Make high-dimensional data visible", name: "PCA + K-Means", title: "Unsupervised learning" }, { quote: "Share analysis through interactive apps", name: "Streamlit", title: "Data applications" }]} /></section>
      <section className="old-section" id="education"><SectionTitle>Education</SectionTitle><div className="old-cards"><article className="old-card"><p className="old-date">2026 · CGPA 7.66</p><h3>Master of Computer Applications (AI &amp; ML)</h3><strong>Ramdeobaba University, Nagpur</strong></article><article className="old-card"><p className="old-date">2023 · CGPA 7.87</p><h3>Bachelor of Commerce in Computer Application</h3><strong>Tirpude College, Nagpur</strong></article></div></section>
      <section className="old-section" id="certifications"><SectionTitle>Licenses &amp; Certifications</SectionTitle><div className="old-cert-list">{certifications.map(([title, issuer, date], index) => <div key={title}><span>0{index + 1}</span><strong>{title}</strong><small>{issuer} · {date}</small></div>)}</div></section>
      <section className="old-section" id="projects"><SectionTitle>Projects</SectionTitle><div className="old-project-grid">{projects.map((project) => <article className="old-project" key={project.title}><a href={project.link} target="_blank" rel="noreferrer"><Image src={project.image} alt={project.title} width={600} height={240} /></a><h3>{project.title}</h3><p>{project.description}</p><div>{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><a className="old-project-link" href={project.link} target="_blank" rel="noreferrer">View Project ↗</a></article>)}</div></section>
    </main>
    <footer className="old-footer"><span>© 2026 Numaan Opai</span><a href="#home">Back to top ↑</a></footer>
  </AuroraBackground>;
}
