"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { FlipWords } from "@/components/ui/flip-words";

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
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string,
    href: string
  ) => {
    e.preventDefault();
    setActive(name);
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
          "fixed top-0 left-0 z-50 px-8 py-4 text-2xl sm:text-3xl font-extrabold select-none",
          "animate-subtle-bounce drop-shadow-[0_0_2px_rgba(0,255,255,0.12)] font-sans",
          "bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 bg-clip-text text-transparent",
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

      {/* Centered Navigation menu */}
      <nav
        className={cn(
          "fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex space-x-8 bg-[#0a0a0a]/90 backdrop-blur-md shadow-md select-none font-sans",
          className
        )}
      >
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleClick(e, item.name, item.href)}
            className={cn(
              "text-white text-lg font-semibold cursor-pointer transition duration-300 tracking-wide",
              active === item.name ? "underline decoration-cyan-400" : "",
              "hover:drop-shadow-[0_0_10px_rgba(0,204,255,0.95)]"
            )}
          >
            {item.name}
          </a>
        ))}
      </nav>
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
      className="group relative w-full sm:w-64 p-6 rounded-lg cursor-default
        bg-transparent border border-gray-700
        transition-shadow duration-300
        hover:shadow-[0_0_15px_4px_rgba(6,182,212,0.7)]"
    >
      <h3 className="text-xl font-semibold mb-3 text-cyan-400">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="relative cursor-pointer transition-colors duration-300
              hover:text-cyan-400"
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
  return (
    <>
      {/* Background Sparkles */}
      <div className="fixed inset-0 -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.7}
          maxSize={1.6}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Main Content Wrapper with Tracing Beam */}
      {/* Navbar */}
      <Navbar />

      <TracingBeam className="relative z-10 px-8 pt-16">
        {/* Main Sections Container */}
        <main className="max-w-5xl mx-auto mt-0 antialiased font-sans pb-32">
          {/* -------------------------------- */}
          {/* 1. HOME / HERO SECTION */}
          {/* -------------------------------- */}
          
          <section
            id="home"
            className="min-h-[80vh] flex flex-col justify-center items-center px-6 pt-8"
          >
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-10 w-full max-w-4xl mx-auto">
              {/* Left: Profile Photo */}
                <div className="flex-shrink-0 flex justify-center sm:justify-start w-full sm:w-auto -mt-24">
                  <img
                  src="/Screenshot 2025-07-03 152722.png"
                  alt="Numaan Opai"
                  className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full border-4 border-cyan-400 shadow-lg hover:scale-105 transition-transform duration-300 bg-cyan-950/30"
                  />
                </div>
              {/* Right: Name & FlipWords */}
              <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                <h1
                  className="text-6xl sm:text-7xl font-semibold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent leading-tight tracking-widest font-montserrat animate-fade-in-down"
                  style={{ animationDelay: "0.1s" }}
                >
                  NUMAAN
                </h1>
                <h1
                  className="text-6xl sm:text-7xl font-semibold bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-8 leading-tight tracking-widest font-montserrat animate-fade-in-down"
                  style={{ animationDelay: "0.2s" }}
                >
                  OPAI
                </h1>
                <div
                  className="text-2xl sm:text-3xl text-neutral-300 max-w-xl mt-1 font-normal tracking-wide font-montserrat animate-fade-in-up"
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
                    ]}
                  />
                </div>
                <div
                  className="mt-12 flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <a
                    href="#Projects"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-md hover:opacity-90 transition text-center shadow-md font-montserrat"
                  >
                    View My Work
                  </a>
                  <a
                    href="/cv.pdf"
                    download
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-md hover:opacity-90 transition text-center shadow-md font-montserrat"
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
            className="flex flex-col items-center justify-center pt-2 pb-4 mb-0"
          >
            <div className="flex gap-6 mb-2">
              <a
                href="https://www.linkedin.com/in/numaan-yunus-opai-b1293035a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-3xl transition"
                aria-label="LinkedIn"
              >
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.87 0-2.156 1.46-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/>
                </svg>
              </a>
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-3xl transition"
                aria-label="GitHub"
              >
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="numaan.y.opai@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 text-3xl transition"
                aria-label="Email"
              >
                <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z"/>
                </svg>
              </a>
            </div>
            <div className="text-neutral-400 text-lg">
              <span>Let's connect: </span>
              <a href="mailto:your.email@example.com" className="text-cyan-400 hover:underline ml-1">your.email@example.com</a>
            </div>
          </section>

          {/* -------------------------------- */}
          {/* 2. ABOUT ME SECTION */}
          {/* -------------------------------- */}
          <section
            id="about"
            className="min-h-[70vh] px-6 py-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6 border-b-4 border-cyan-400 w-max pb-2 tracking-wide">
              About Me
            </h2>
            <div className="max-w-3xl leading-relaxed text-neutral-300 text-lg tracking-wide space-y-6">
              {/* Introduction */}
              <div>
                <span className="font-semibold text-cyan-400">Education & Specialization:</span>
                <p>
                  I'm a Master's student specializing in <span className="text-cyan-300">Artificial Intelligence and Machine Learning</span>. My technical toolkit includes Python, Java, OOP, SQL, HTML, CSS, and Data Science.
                </p>
              </div>
              {/* Web Development Passion */}
              <div>
                <span className="font-semibold text-cyan-400">Web Development Enthusiast:</span>
                <p>
                  Recently, I've developed a strong passion for web development—especially building full-stack applications with <span className="text-cyan-300">React</span>, <span className="text-cyan-300">Next.js</span>, and <span className="text-cyan-300">Node.js</span>. I enjoy creating responsive, user-friendly frontends and pairing them with robust backends and efficient data handling.
                </p>
              </div>
              {/* Backend Focus */}
              <div>
                <span className="font-semibold text-cyan-400">Backend Strengths:</span>
                <p>
                  While backend development is where I feel most at home—thanks to my comfort with Java’s object-oriented strengths and SQL’s data structuring power—I’m always evolving my skills to become a well-rounded full-stack developer.
                </p>
              </div>
              {/* Professional Experience */}
              <div>
                <span className="font-semibold text-cyan-400">Professional Experience:</span>
                <p>
                  Alongside my academic journey, I’ve worked as a <span className="text-cyan-300">Venue Manager</span> and <span className="text-cyan-300">Marketing Manager</span> at Sapphire Farms, a hospitality venture in Nagpur. In these roles, I led customer experience, event coordination, digital marketing, and operations—gaining practical experience in sales, strategy, market research, and data-driven decision-making.
                </p>
              </div>
              {/* Bridging Business & Tech */}
              <div>
                <span className="font-semibold text-cyan-400">Connecting Business & Technology:</span>
                <p>
                  This real-world exposure helps me bridge business needs with tech solutions. Now, I’m combining my background with technical skills to build smart, scalable systems that improve efficiency and elevate user experience.
                </p>
              </div>
              {/* Passion & Opportunities */}
              <div>
                <span className="font-semibold text-cyan-400">Passion & Opportunities:</span>
                <p>
                  I'm especially passionate about how <span className="text-cyan-300">AI</span>, <span className="text-cyan-300">automation</span>, and <span className="text-cyan-300">full-stack web technologies</span> can transform traditional businesses and deliver real impact.
                </p>
                <p>
                  <span className="font-semibold">💼 Open to:</span> Internships, collaborations, or any opportunity where I can learn, grow, and contribute meaningfully.
                </p>
                <p>
                  <span className="font-semibold">Let’s connect!</span>
                </p>
              </div>
            </div>
          </section>
          {/* -------------------------------- */}
          {/* 8. Experience SECTION */}
          {/* -------------------------------- */}
<section
  id="Experience"
  className="min-h-[70vh] px-6 py-12 text-white"
>
  <h2 className="text-5xl font-bold mb-8 border-b-4 border-cyan-400 w-max pb-2 tracking-wide">
    Experience
  </h2>
  <div className="max-w-3xl leading-relaxed text-neutral-300 text-2xl tracking-wide">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
      {[
        {
          role: "Venue Manager",
          company: "Sapphire Farms, Nagpur",
          duration: "2021 – 2023",
          description: [
            "Managed day-to-day operations for a hospitality venue, ensuring smooth event execution and high customer satisfaction.",
            "Led a team for event coordination, logistics, and on-site management.",
            "Implemented digital marketing strategies to boost bookings and brand presence.",
            "Handled sales, client relationships, and administrative tasks."
          ]
        },
        {
          role: "Marketing Manager",
          company: "Sapphire Farms, Nagpur",
          duration: "2021 – 2023",
          description: [
            "Developed and executed marketing campaigns across digital and offline channels.",
            "Conducted market research and competitor analysis to identify growth opportunities.",
            "Created content for social media, managed CRM, and improved customer engagement.",
            "Collaborated with vendors and partners for event promotions."
          ]
        },
        {
          role: "Freelance Web Developer",
          company: "Self-employed",
          duration: "2023 – Present",
          description: [
            "Built responsive websites and web apps using React, Next.js, and Node.js.",
            "Worked with clients to gather requirements and deliver tailored solutions.",
            "Integrated APIs, optimized performance, and ensured cross-browser compatibility."
          ]
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="bg-transparent border border-neutral-800 rounded-xl p-6 shadow-lg transition duration-300 group backdrop-blur-sm hover:shadow-[0_0_15px_4px_rgba(6,182,212,0.7)]"
        >
          <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-400 transition">{item.role}</h3>
          <p className="text-neutral-200 text-base mb-1">
            <span className="font-semibold text-cyan-400">Company:</span> {item.company}
          </p>
          <p className="text-neutral-400 text-xs mb-3">
            <span className="font-semibold">Duration:</span> {item.duration}
          </p>
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
            <h2 className="text-4xl font-bold mb-10 border-b-4 border-cyan-400 w-max pb-2 tracking-wide ">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4 backdrop-blur-sm">
              <HoverCard
                title="Frontend Development"
                skills={[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML5",
                  "CSS3",
                  "Bootstrap",
                  "JavaScript",
                ]}
              />
              <HoverCard
                title="Backend Development"
                skills={[
                  "Node.js",
                  "Express.js",
                  "Java",
                  "MongoDB",
                  "SQL",
                ]}
              />
              <HoverCard
                title="Machine Learning & AI"
                skills={[
                  "Python",
                  "Machine Learning",
                  "Data Structures",
                  "Artificial Intelligence",
                  "Data-driven Decision Making",
                ]}
              />
              <HoverCard
                title="Tools & Technologies"
                skills={[
                  "Git",
                  "GitHub",
                  "Docker",
                  "Postman",
                  "Figma", 
                  "Visual Studio Code",
                  "MySQL",
                  "MongoDB",
                  "Cloud Computing", 
                  "Jupyter Notebook",
                  "Linux",
                  "AWS",
                ]}
              />
              <HoverCard
                title="Soft Skills"
                skills={[
                  "Leadership",
                  "Team Leadership",
                  "Communication",
                  "Strategic Planning",
                  "Customer Relationship Management (CRM)",
                  "Sales and Lead Generation",
                  "Presentations",
                  "Teamwork",
                ]}
              />
              <HoverCard
                title="Other Skills"
                skills={[
                  "Content Creation & Management",
                  "Venue Management",
                  "Inventory Management",
                  "Business Development",
                  "Market Research",
                  "Administrative Assistance",
                  "Onsite Management",
                  "Supervisory Skills",
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
              <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-cyan-400 w-max mx-auto pb-2 tracking-wide">Education</h2>
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
            className="py-20 px-4 text-white"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-cyan-400 w-max mx-auto pb-2 tracking-wide">
                Licenses & Certifications
              </h2>
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    {
                      title: "CCNA Foundations – Networking Basics and Cisco IOS Essentials",
                      issuer: "PacktPackt",
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
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative bg-transparent border border-neutral-800 rounded-xl p-6 shadow-lg transition duration-300 group overflow-hidden backdrop-blur-sm hover:shadow-[0_0_15px_4px_rgba(6,182,212,0.7)]"
                    >
                      <div className="flex flex-col h-full">
                        <h3 className="text-lg font-bold text-cyan-300 mb-2 group-hover:text-cyan-400 transition">
                          {item.title}
                        </h3>
                        <div className="flex-1">
                          <p className="text-neutral-200 text-sm mb-1">
                            <span className="font-semibold text-cyan-400">Issuer:</span> {item.issuer}
                          </p>
                          <p className="text-neutral-400 text-xs mb-1">
                            <span className="font-semibold">Issued:</span> {item.issued}
                          </p>
                          <p className="text-neutral-500 text-xs truncate">
                            <span className="font-semibold">Credential ID:</span> {item.credentialId}
                          </p>
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-cyan-700 to-cyan-400 text-white font-semibold text-sm shadow hover:from-cyan-400 hover:to-cyan-300 hover:text-black transition backdrop-blur"
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
            <h2 className="text-4xl font-bold mb-10 border-b-4 border-cyan-400 w-max pb-2 tracking-wide">
              Projects
            </h2>
            <div className="max-w-xl mx-auto">
              <div
                className="bg-transparent border border-neutral-800 rounded-xl p-6 shadow-lg transition duration-300 group flex flex-col h-full backdrop-blur-sm hover:shadow-[0_0_15px_4px_rgba(6,182,212,0.7)]"
              >
                {/* Project Image */}
                <img
                  src="\Screenshot 2025-07-03 175732.png"
                  alt="Personal Portfolio Website"
                  className="w-full h-40 object-cover rounded-lg mb-4 border border-cyan-900/30"
                />
                <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-400 transition">
                  Personal Portfolio Website
                </h3>
                <p className="text-neutral-200 text-base mb-3 flex-1">
                  A modern, responsive portfolio built with Next.js, React, and Tailwind CSS. Features smooth animations, interactive sections, and a clean UI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Next.js", "React", "Tailwind CSS", "TypeScript"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-cyan-900/40 text-cyan-200 rounded text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
