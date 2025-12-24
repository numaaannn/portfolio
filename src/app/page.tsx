"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
// ----------------------------
// Navbar Component
// ----------------------------
function Navbar({ className }: { className?: string }) {
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "AboutMe", href: "#about" },
    { name: "Experience", href: "#Experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#Projects" },
   
  ];

  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string,
    href: string
  ) => {
    e.preventDefault();
    setActive(name);
    setMobileMenuOpen(false); // Close mobile menu when item is clicked
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Title / Logo */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 px-4 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl md:text-2xl font-semibold select-none",
          "animate-subtle-bounce drop-shadow-[0_0_6px_rgba(6,182,212,0.12)] font-sans",
          "bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-500 bg-clip-text text-transparent",
          className
        )}
        style={{
          animationDuration: "2s",
          animationIterationCount: "infinite",
        }}
      >
        Portfolio
      </div>

      {/* Global scrollbar styles */}
      <style jsx global>{`
        /* Custom Scrollbar Styles */
        ::-webkit-scrollbar {
          width: 10px;
          background: #05070d;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(
            135deg,
            rgb(3, 12, 41) 0%,
            #312e81 50%,
            rgb(13, 22, 63) 100%
          );
          border-radius: 8px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            135deg,
            #0a1626 0%,
            rgb(11, 37, 80) 50%,
            rgb(3, 10, 114) 100%
          );
        }
        /* Firefox */
        html {
          scrollbar-width: medium;
          scrollbar-color: rgb(8, 24, 85) #05070d;
        }
      `}</style>

      {/* Subtle bounce animation keyframes */}
      <style jsx global>{`
        @keyframes subtle-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .animate-subtle-bounce {
          animation-name: subtle-bounce;
          animation-timing-function: ease-in-out;
        }
      `}</style>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden glass p-2 rounded-md border border-white/6 shadow-subtle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation menu */}
      <nav
        className={cn(
          "hidden md:flex fixed top-0 left-1/2 transform -translate-x-1/2 z-40 space-x-4 lg:space-x-8 glass px-4 py-2 rounded-b-lg ml-20 lg:ml-32",
          "select-none font-sans",
          className
        )}
      >
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleClick(e, item.name, item.href)}
            className={cn(
              "text-white text-sm lg:text-lg font-semibold cursor-pointer transition duration-300 tracking-wide px-2 py-1",
              active === item.name ? "underline decoration-cyan-400" : "hover:text-cyan-300",
              "hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.12)]"
            )}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation menu */}
      {mobileMenuOpen && (
        <nav className="fixed inset-0 z-40 md:hidden glass-soft pt-20">
          <div className="flex flex-col items-center space-y-6 mt-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.name, item.href)}
                className={cn(
                  "text-white text-xl font-semibold cursor-pointer transition duration-300 tracking-wide",
                  active === item.name ? "underline decoration-cyan-400" : "hover:text-cyan-300",
                  "hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.12)]"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}

// ----------------------------
// HoverCard Component (for Skills section cards)
// ----------------------------
function HoverCard({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div
      className="group relative w-full sm:w-64 p-6 rounded-lg cursor-default glass card-hover"
    >
      <h3 className="text-xl font-semibold mb-3 text-cyan-400">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="relative cursor-pointer transition-colors duration-300
              hover:text-cyan-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ----------------------------
// Main Page Component
// ----------------------------
export default function Page() {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS devices only
    const detectIOS = () => {
      return /iPad|iPhone|iPod/.test(navigator.userAgent);
    };
    
    setIsIOS(detectIOS());
  }, []);

  return (
    <>
      {/* Background with iOS-specific handling */}
      <div className="fixed inset-0 -z-10 bg-black">
        {isIOS ? (
          // iOS: Simple solid black background
          <div className="absolute inset-0 bg-black" />
        ) : (
          // Non-iOS: Use particles with transparent background
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.7}
            maxSize={1.6}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        )}
      </div>

      {/* Main Content Wrapper with Tracing Beam */}
      {/* Navbar */}
      <Navbar />

      <TracingBeam className="relative z-10 px-4 sm:px-8 pt-16">
        {/* Main Sections Container */}
        <main className="max-w-6xl mx-auto mt-0 antialiased font-sans pb-32 px-4 sm:px-6">
          {/* -------------------------------- */}
          {/* 1. HOME / HERO SECTION */}
          {/* -------------------------------- */}
          
          <section
            id="home"
            className="min-h-[90vh] sm:min-h-[80vh] flex flex-col justify-center items-center px-2 sm:px-6 pt-8 sm:pt-16"
          >
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl mx-auto">
              {/* Left: Profile Photo */}
                <div className="flex-shrink-0 flex justify-center w-full lg:w-auto mt-8 lg:-mt-24">
                  
<Image
  src="/Screenshot 2025-07-03 152722.png"
  alt="Numaan Opai"
  width={320}
  height={320}
  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-cyan-400 shadow-elevate hover:scale-105 transition-transform duration-300"
/>
                </div>
              {/* Right: Name & FlipWords */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6">
                <h1
                  className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight tracking-widest font-montserrat animate-fade-in-down"
                  style={{ animationDelay: "0.1s" }}
                >
                  NUMAAN
                </h1>
                <h1
                  className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-4 sm:mb-8 leading-tight tracking-widest font-montserrat animate-fade-in-down"
                  style={{ animationDelay: "0.2s" }}
                >
                  OPAI
                </h1>
                <div
                  className="text-lg sm:text-2xl lg:text-3xl text-neutral-300 max-w-2xl mt-1 font-normal tracking-wide font-montserrat animate-fade-in-up px-4 sm:px-0"
                  style={{ animationDelay: "0.3s" }}
                >
                  <span>On a journey of </span>
                  <FlipWords
                    words={[
                      "learning",
                      "growth",
                      "impact",
                      "exploration",
                      "connection",
                    ] as string[]}
                  />
                </div>
                <div
                  className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start w-full sm:w-auto animate-fade-in-up px-4 sm:px-0"
                  style={{ animationDelay: "0.4s" }}
                >
                  <a
                    href="#Projects"
                    className="btn btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-medium text-sm sm:text-base"
                  >
                    View My Work
                  </a>
                  <a
                    href="\cv.pdf"
                    download
                    className="btn px-6 sm:px-8 py-3 sm:py-4 rounded-md bg-transparent border border-white/6 text-white font-medium text-sm sm:text-base"
                  >
                    Download My CV
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* -------------------------------- */}
          {/* SOCIAL MEDIA & CONTACT SECTION */}
          {/* -------------------------------- */}
          <section
            id="contact"
            className="flex flex-col items-center justify-center pt-4 pb-8 mb-4 px-4"
          >
            <div className="flex gap-4 sm:gap-6 mb-4">
              <a
                href="https://www.linkedin.com/in/numaan-yunus-opai-b1293035a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-2xl sm:text-3xl transition transform icon-hover"
                aria-label="LinkedIn"
              >
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 sm:w-8 sm:h-8">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.87 0-2.156 1.46-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/>
                </svg>
              </a>
              <a
                href="https://github.com/numaaannn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-2xl sm:text-3xl transition transform icon-hover"
                aria-label="GitHub"
              >
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 sm:w-8 sm:h-8">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <div className="text-neutral-400 text-base sm:text-lg text-center max-w-md">
              <span>Lets connect! </span>
              <a href="mailto:Numaan.y.opai@gmail.com" className="text-cyan-400 hover:underline break-all">numaan.y.opai@gmail.com</a>
            </div>
          </section>

          {/* -------------------------------- */}
          {/* 2. ABOUT ME SECTION */}
          {/* -------------------------------- */}
          <section
            id="about"
            className="min-h-[70vh] px-4 sm:px-6 py-8 sm:py-12 text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 border-b-4 border-cyan-400 w-max pb-2 tracking-wide section-heading">
              About Me
            </h2>
            {/* Education */}
<div>
  <span className="font-semibold text-cyan-400">Education &amp; Specialization:</span>
  <p>
    I’m an MCA student who learns by building. During my Web Development internship, I worked on real‑world
    frontend projects using <span className="text-cyan-300">Next.js</span>, <span className="text-cyan-300">React</span>, and
    <span className="text-cyan-300">Tailwind CSS</span>, focusing on clean UI and responsive design.
  </p>
</div>


{/* Data Science */}
<div>
  <span className="font-semibold text-cyan-400">Data Science:</span>
  <p>
    Driven by curiosity to understand the data behind products, I’m currently doing a Data Science internship where I
    work with <span className="text-cyan-300">Python</span>, <span className="text-cyan-300">Pandas</span>,
    <span className="text-cyan-300">NumPy</span>, and Machine Learning algorithms to analyze data and extract meaningful insights.
  </p>
</div>


{/* Approach */}
<div>
  <span className="font-semibold text-cyan-400">Approach:</span>
  <p>
    I enjoy combining a developer’s mindset with data‑driven thinking to solve real problems — building robust
    products informed by insights.
  </p>
</div>


{/* Opportunities */}
<div>
  <span className="font-semibold text-cyan-400">Opportunities:</span>
  <p>
    <span className="font-semibold"> Open to:</span> internships and roles in Data Science.
  </p>
  <p className="font-semibold">Let's connect!</p>
</div>
          </section>
          {/* -------------------------------- */}
          {/* 8. Experience SECTION */}
          {/* -------------------------------- */}
<section
  id="Experience"
  className="min-h-[70vh] px-4 sm:px-6 py-8 sm:py-12 text-white"
>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 border-b-4 border-cyan-400 w-max pb-2 tracking-wide section-heading">
    Experience
  </h2>
  <div className="max-w-5xl leading-relaxed text-neutral-300 text-base sm:text-lg tracking-wide">
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 mt-6">
          {[
        {
          role: "Web Development Intern",
          company: "Smart Software Solution",
          description: [
            "Built responsive pages and simple components with React and Next.js.",
            "Styled layouts using Tailwind CSS and fixed UI bugs.",
            "Helped with basic testing and deploying updates to Vercel."
          ]
        },
        {
          role: "Data Science Intern",
          company: "Current Internship",
          description: [
            "Cleaned and preprocessed datasets using Pandas.",
            "Wrote Python scripts to analyze data and generate summary reports.",
            "Assisted with training and evaluating simple machine learning models.",
            "Created basic charts and tables to communicate findings."
          ]
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="glass-soft rounded-xl p-6 transition card-hover group"
        >
          <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-400 transition">{item.role}</h3>
          <p className="text-neutral-200 text-base mb-1">
            <span className="font-semibold text-cyan-400">Company:</span> {item.company}
          </p>
          {(item as any).duration && (
            <p className="text-neutral-400 text-xs mb-3">
              <span className="font-semibold">Duration:</span> {(item as any).duration}
            </p>
          )}
          <ul className="list-disc list-inside text-neutral-300 text-sm space-y-1">
            {item.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>
          {/* -------------------------------- */}
          {/* 3. SKILLS SECTION */}
          {/* -------------------------------- */}
          <section
            id="skills"
            className="min-h-[70vh] px-6 py-12 text-white "
          >
            <h2 className="text-4xl font-bold mb-10 border-b-4 border-cyan-400 w-max pb-2 tracking-wide section-heading">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
              <HoverCard
              title="Frontend Development"
              skills={[ 
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "HTML5",
                "CSS3",
                "JavaScript",
              ]}
              />
              <HoverCard
              title="Data Science & Machine Learning"
              skills={[
                "Python",
                "Pandas",
                "NumPy",
                "Machine Learning",
                "Data Analysis",
                "Data-driven Decision Making",
              ]}
              />
              <HoverCard
              title="Tools & Technologies"
              skills={[
                "Google Colab",
                "Git",
                "GitHub",
                "Jupyter Notebook",
                "Visual Studio Code",
                "Figma",
              ]}
              />
              <HoverCard
              title="Soft Skills"
              skills={[
                "Communication",
                "Teamwork",
                "Leadership",
                "Problem Solving",
                "Strategic Thinking",
              ]}
              />
            </div>
          </section>
          {/* -------------------------------- */}
          {/* 5. EDUCATION SECTION */}
          {/* -------------------------------- */}
          <section
            id="education"
            className="py-20 px-4 text-white"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-cyan-400 w-max mx-auto pb-2 tracking-wide section-heading">Education</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Master of Computer Applications (AI & ML)",
                    college: "Ramdeobaba University, Nagpur",
                    duration: "Aug 2024 – Present",
                  },
                  {
                    title: "Bachelor of Commerce in Computer Application",
                    college: "Tirpude College, Nagpur",
                    duration: "Graduated (2023)",
                    detail: "CGPA: 7.87",
                  },
                  {
                    title: "12th (HSC)",
                    college: "Hislop College, Nagpur (Maharashtra Board)",
                    duration: "2020",
                    detail: "Percentage: 69%",
                  },
                  {
                    title: "10th (SSC)",
                    college: "SFS High School, Nagpur (Maharashtra Board)",
                    duration: "2018",
                    detail: "Percentage: 78%",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-transparent border border-neutral-800 rounded-2xl p-6 shadow-md transition duration-300 backdrop-blur-sm hover:shadow-[0_0_15px_4px_rgba(6,182,212,0.7)]"
                  >
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-neutral-300 mt-1">{item.college}</p>
                    <p className="text-cyan-400 text-sm mt-1">{item.duration}</p>
                    {item.detail && (
                      <p className="text-neutral-500 text-sm mt-1">{item.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* -------------------------------- */}
          {/* 6. CERTIFICATES SECTION */}
          {/* -------------------------------- */}
          <section
            id="certificates"
            className="py-12 sm:py-20 px-4 sm:px-6 text-white"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 border-b-4 border-cyan-400 w-max mx-auto pb-2 tracking-wide leading-tight section-heading">
                <span className="block sm:inline">Licenses and</span>
                <span className="block sm:inline sm:ml-2">Certifications</span>
              </h2>
              <div className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {[
                    {
                      title: "Developing Front-End Apps with React",
                      issuer: "IBM",
                      issued: "Nov 2025",
                      credentialId: "ZUZY6YZQXXH8",
                      link: "https://www.coursera.org/account/accomplishments/verify/ZUZY6YZQXXH8",
                    },
                    {
                      title: "React Basics",
                      issuer: "Meta",
                      issued: "Oct 2025",
                      credentialId: "UI510JQWPAMN",
                      link: "https://coursera.org/verify/UI510JQWPAMN",
                    },
                    {
                      title: "Python Programming Essentials",
                      issuer: "Rice University",
                      issued: "May 2025",
                      credentialId: "8LM84AR0QPEG",
                      link: "https://www.coursera.org/account/accomplishments/records/8LM84AR0QPEG",
                    },
                    {
                      title: "Foundations of User Experience (UX) Design",
                      issuer: "Google",
                      issued: "Mar 2025",
                      credentialId: "F3J62ZKY90JV",
                      link: "https://www.coursera.org/account/accomplishments/records/F3J62ZKY90JV",
                    },
                    {
                      title: "Start the UX Design Process: Empathize, Define, and Ideate",
                      issuer: "Google",
                      issued: "Mar 2025",
                      credentialId: "YLFXK64OA1C5",
                      link: "https://www.coursera.org/account/accomplishments/verify/YLFXK64OA1C5",
                    },
                    {
                      title: "CCNA Foundations – Networking Basics and Cisco IOS Essentials",
                      issuer: "Packt",
                      issued: "May 2025",
                      credentialId: "HM39UAXWSPIS",
                      link: "https://www.coursera.org/account/accomplishments/verify/HM39UAXWSPIS",
                    },
                    {
                      title: "Introduction to Cyber Attacks",
                      issuer: "New York University",
                      issued: "May 2025",
                      credentialId: "3IODIUI2R8XQ",
                      link: "https://www.coursera.org/account/accomplishments/records/3IODIUI2R8XQ",
                    },
                    ].map((item, index) => (
                    <div
                      key={index}
                      className="relative glass-soft rounded-xl p-4 sm:p-6 transition card-hover overflow-hidden flex flex-col h-full"
                    >
                      <div className="flex flex-col h-full">
                        <h3 className="text-base sm:text-lg font-bold text-cyan-300 mb-3 group-hover:text-cyan-400 transition leading-tight">
                          {item.title}
                        </h3>
                        <div className="flex-1 space-y-2">
                          <p className="text-neutral-200 text-sm">
                            <span className="font-semibold text-cyan-400">Issuer:</span> <span className="break-words">{item.issuer}</span>
                          </p>
                          <p className="text-neutral-400 text-xs">
                            <span className="font-semibold">Issued:</span> {item.issued}
                          </p>
                          <p className="text-neutral-500 text-xs break-all">
                            <span className="font-semibold">Credential ID:</span> {item.credentialId}
                          </p>
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block px-4 py-2 rounded-md btn btn-primary text-sm font-semibold text-center"
                        >
                          Show Credential
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* -------------------------------- */}
          {/* 7. PROJECTS SECTION */}
          {/* -------------------------------- */}
          <section
            id="Projects"
            className="min-h-[70vh] px-6 py-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-10 border-b-4 border-cyan-400 w-max pb-2 tracking-wide section-heading">
              Projects
            </h2>
            <div className="max-w-xl mx-auto">
              <div
                className="glass-soft rounded-xl p-6 transition card-hover group flex flex-col h-full mb-8"
                >
                {/* Project Image */}
                {[
                  {
                  image: "/Screenshot 2025-07-03 175732.png",
                  title: "Personal Portfolio Website",
                  description: "A modern, responsive portfolio built with Next.js, React, and Tailwind CSS. Features smooth animations, interactive sections, and a clean UI.",
                  technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
                  },
                  {
                  image: "/project2.png",
                  title: "Ecommerce Website",
                  description: "A fully functional ecommerce platform with product listings, shopping cart, and checkout flow built with modern web technologies.",
                  technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
                  },
                ].map((project, idx) => (
                  <div
                  key={idx}
                  className="glass-soft rounded-xl p-6 transition card-hover group flex flex-col h-full mb-8"
                  >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={160}
                    className="w-full h-40 object-cover rounded-lg mb-4 border border-cyan-900/30"
                  />
                  <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-neutral-200 text-base mb-3 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-900/40 text-cyan-200 rounded text-xs font-semibold"
                    >
                      {tech}
                    </span>
                    ))}
                  </div>
                  </div>
                ))}
                <div className="mt-auto flex gap-3">
                  <a
                    href="#home"
                    className="inline-block px-4 py-2 rounded-md border border-cyan-400 text-cyan-300 font-semibold text-sm hover:bg-cyan-400/10 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </TracingBeam>
    </>
  );
}
