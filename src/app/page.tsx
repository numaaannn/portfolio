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
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#Experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [active, setActive] = useState<string | null>(null);

  // Handles smooth scroll and active menu item
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
        "fixed top-0 left-[2cm] z-50 px-8 py-4 text-2xl sm:text-3xl font-extrabold select-none",
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

      {/* Navigation menu */}
      <nav
        className={cn(
          "fixed top-0 right-0 z-50 flex space-x-8 bg-[#0a0a0a]/90 backdrop-blur-md shadow-md px-8 py-3 select-none font-sans",
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
      <TracingBeam className="relative z-10 px-8 pt-16">
        {/* Navbar */}
        <Navbar />

        {/* Main Sections Container */}
        <main className="max-w-5xl mx-auto mt-12 antialiased font-sans">

          {/* -------------------------------- */}
          {/* 1. HOME / HERO SECTION */}
          {/* -------------------------------- */}
          <section
            id="home"
            className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6"
          >
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

            <p
              className="text-2xl sm:text-3xl text-neutral-300 max-w-xl mt-1 font-normal tracking-wide font-montserrat animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              On a journey of{" "}
              <FlipWords
                words={[
                  "learning",
                  "growth",
                  "impact",
                  "exploration",
                  "connection",
                ]}
              />
            </p>

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
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-md hover:opacity-90 transition text-center shadow-md font-montserrat"
              >
                Contact Me
              </a>
              <a
                href="/path/to/your-cv.pdf"
                download
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-md hover:opacity-90 transition text-center shadow-md font-montserrat"
              >
                Download My CV
              </a>
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
            <p className="max-w-3xl leading-relaxed text-neutral-300 text-2xl tracking-wide">
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
              {
                role: "Intern – Data Science & ML",
                company: "Remote Projects",
                duration: "2022 – 2023",
                description: [
                "Worked on academic and freelance projects involving Python, scikit-learn, and data analysis.",
                "Developed ML models for classification and prediction tasks.",
                "Visualized data insights and presented findings to stakeholders."
                ]
              }
              ].map((item, idx) => (
              <div
                key={idx}
                className="bg-transparent border border-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/30 transition duration-300 group backdrop-blur-sm"
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
            </p>
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
                  "REST APIs",
                  "GraphQL",
                  "MongoDB",
                  "SQL",
                ]}
              />
              <HoverCard
                title="Machine Learning & AI"
                skills={[
                  "Python",
                  "Scikit-Learn",
                  "TensorFlow",
                  "PyTorch",
                  "Data Structures",
                  "Artificial Intelligence",
                  "Data-driven Decision Making",
                ]}
              />
              <HoverCard
                title="Tools & Technologies"
                skills={[
                  "Git",
                  "Docker",
                  "Kubernetes",
                  "Jenkins",
                  "VS Code",
                  "Linux",
                  "AWS",
                  "Azure",
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
          className="bg-transparent border border-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/20 transition duration-300 backdrop-blur-sm"
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
            className="relative bg-transparent border border-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/30 transition duration-300 group overflow-hidden backdrop-blur-sm"
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
                className="bg-transparent border border-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/30 transition duration-300 group flex flex-col h-full backdrop-blur-sm"
              >
                {/* Project Image */}
                <img
                src="webpage/src/photo.png"
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
          {/* -------------------------------- */}
          {/* 9. CONTACT SECTION */}
          {/* -------------------------------- */}
          <section
            id="contact"
            className="min-h-[70vh] px-6 py-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6 border-b-4 border-cyan-400 w-max pb-2 tracking-wide">
              Contact
            </h2>
            <p className="max-w-3xl leading-relaxed text-neutral-300 text-lg tracking-wide">
            If you'd like to connect, collaborate, or just say hello, feel free to reach out!

            <ul className="mt-6 space-y-4 text-lg">
              <li>
                <span className="font-semibold text-cyan-400">Email:</span>{" "}
                <a
                  href="mailto:numaanopai@gmail.com"
                  className="underline hover:text-cyan-300 transition text-xl sm:text-2xl"
                >
                  numaanopai38@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-cyan-400">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/numaan-yunus-opai-b1293035a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-cyan-300 transition"
                >
                  linkedin.com/in/numaanopai
                </a>
              </li>
              <li>
                <span className="font-semibold text-cyan-400">GitHub:</span>{" "}
                <a
                  href="https://github.com/numaanopai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-cyan-300 transition"
                >
                  github.com/numaanopai
                </a>
              </li>
            </ul>

            <p className="mt-8 text-neutral-400 text-base">
              I usually respond within a day. Looking forward to connecting!
            </p>
            </p>
          </section>
        </main>
      </TracingBeam>
    </>
  );
}
