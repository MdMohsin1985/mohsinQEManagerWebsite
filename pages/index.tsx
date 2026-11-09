import Head from "next/head";

const experience = [
  {
    role: "QA Manager / Quality Engineering Leader",
    company: "Current Organization",
    period: "Recent",
    details:
      "Leading Quality strategy, Automation delivery, release confidence, and cross-functional QA governance for modern software teams.",
  },
  {
    role: "Senior QA / Automation Specialist",
    company: "Previous Experience",
    period: "Earlier",
    details:
      "Built scalable automation frameworks, improved regression coverage, and partnered with product and engineering to reduce production risk.",
  },
];

const expertise = [
  "Selenium / Cypress / Playwright",
  "API Testing & Automation",
  "AI-assisted QA Tools",
  "Test Strategy & Planning",
  "CI/CD Quality Gates",
  "Performance & Load Testing",
  "Agile QA Governance",
  "Defect Prevention & Root Cause",
];

const projects = [
  "AI-assisted test case generation and coverage analysis",
  "End-to-end web automation framework for critical user journeys",
  "API regression suite integrated into CI pipelines",
  "QA dashboards for release readiness and risk tracking",
];

const leadership = [
  "Team mentoring and performance coaching",
  "Stakeholder communication and release sign-off",
  "Hiring, onboarding, and QA capability building",
  "Process improvement across agile delivery teams",
];

const achievements = [
  "Improved release confidence through automation-first quality practices",
  "Reduced regression cycle time with focused test optimization",
  "Established QA metrics that made delivery risks visible earlier",
  "Championed practical AI adoption in quality engineering workflows",
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resumeHref = `${basePath}/resume.pdf`;
  // Swapped images: bodyPic in header, headerPic in body
  const headerNavPic = `${basePath}/bodyPic.png`;
  const heroBodyPic = `${basePath}/headerPic.jpg`;

  return (
    <>
      <Head>
        <title>Mohsin Mohamed | QA Manager Portfolio</title>
        <meta
          name="description"
          content="Portfolio website for Mohsin Mohamed, Automation QE Manager with 10+ years of experience in test automation, AI QA, and leadership."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen text-ink">
        {/* Navigation Header */}
        <header className="sticky top-0 z-20 border-b border-slate-300 bg-white/95 backdrop-blur shadow-sm">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:py-4">
            <a href="#home" className="flex items-center gap-3.5 text-lg sm:text-xl font-bold tracking-tight text-ink group">
              <img
                src={headerNavPic}
                alt="Mohsin Mohamed"
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover border-2 border-ocean shrink-0 transition group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="leading-tight">Mohsin Mohamed</span>
                <span className="text-xs font-semibold text-ocean">Automation QE Manager</span>
              </div>
            </a>
            <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              <a href="#about" className="hover:text-ocean transition">About</a>
              <a href="#experience" className="hover:text-ocean transition">Experience</a>
              <a href="#expertise" className="hover:text-ocean transition">Expertise</a>
              <a href="#projects" className="hover:text-ocean transition">Projects</a>
              <a href="#contact" className="hover:text-ocean transition">Contact</a>
            </div>
            <a href={resumeHref} download className="btn-secondary">
              Resume
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" className="w-full bg-sky-100/80 border-b border-sky-200">
          <div className="section grid items-center gap-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-12">
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-5">
                <img
                  src={heroBodyPic}
                  alt="Mohsin Mohamed"
                  className="h-32 w-32 sm:h-36 sm:w-36 aspect-square rounded-none object-cover shadow-xl shrink-0"
                />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                    Mohsin Mohamed
                  </h2>
                  <p className="eyebrow text-xs sm:text-sm mt-0.5">
                    Automation QE Manager | 18+ Years of IT Experience
                  </p>
                </div>
              </div>

              <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-ink sm:text-5xl">
                Building reliable software teams with smart Quality Engineering.
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-700">
                Professional portfolio showcasing 10+ years of expertise in Test automation,
                AI-driven testing, Test strategy, CI/CD quality gates, and calm leadership.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">View Projects</a>
                <a href="#contact" className="btn-secondary">Get In Touch</a>
                <a href={resumeHref} download className="btn-secondary">Download Resume</a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-sky-200/80 bg-white p-6 shadow-soft">
              <div className="rounded-[1.5rem] bg-ink p-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
                  Core Competencies
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3.5">
                  {[
                    { title: "Experience", desc: "10+ Years in QE" },
                    { title: "Automation", desc: "Playwright, Cypress, Selenium" },
                    { title: "AI in Testing", desc: "AI-assisted QA Tools" },
                    { title: "Leadership", desc: "Mentoring & Governance" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl bg-white/10 p-3.5">
                      <div className="h-1.5 w-8 rounded-full bg-teal-200" />
                      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-teal-100">{item.title}</p>
                      <p className="text-sm text-slate-200 font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full bg-purple-100/75 border-b border-purple-200">
          <div className="section">
            <div className="section-heading">
              <p className="eyebrow">About Me</p>
              <h2>Practical Quality leadership for modern delivery.</h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-slate-700 font-medium">
              Automation QE Manager with 18+ years of IT experience and 10+ yearsin test automation, AI QA,
              and team leadership. Focused on building systems that prevent defects, improve
              delivery confidence, and make quality measurable across modern agile teams.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full bg-indigo-100/70 border-b border-indigo-200">
          <div className="section">
            <div className="section-heading">
              <p className="eyebrow">Work Experience</p>
              <h2>Quality roles with ownership across people, process, and product.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {experience.map((job) => (
                <article key={job.role} className="card">
                  <p className="text-sm font-semibold text-ocean">{job.period}</p>
                  <h3 className="mt-3 text-xl font-bold">{job.role}</h3>
                  <p className="mt-1 font-medium text-slate-500">{job.company}</p>
                  <p className="mt-4 leading-7 text-slate-600">{job.details}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise & Projects Section */}
        <section className="w-full bg-emerald-100/75 border-b border-emerald-200">
          <div className="section">
            <div className="grid gap-10 lg:grid-cols-2">
              <div id="expertise">
                <div className="section-heading">
                  <p className="eyebrow">Technical Expertise</p>
                  <h2>Tools and practices I use to raise the quality bar.</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((skill) => (
                    <span key={skill} className="pill">{skill}</span>
                  ))}
                </div>
              </div>

              <div id="projects">
                <div className="section-heading">
                  <p className="eyebrow">AI & QA Projects</p>
                  <h2>Focused initiatives that improve speed and confidence.</h2>
                </div>
                <div className="space-y-3">
                  {projects.map((project) => (
                    <div key={project} className="content-card">{project}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="w-full bg-purple-100/75 border-b border-purple-200">
          <div className="section">
            <div className="section-heading">
              <p className="eyebrow">Managerial & Leadership Skills</p>
              <h2>Creating clarity for teams and confidence for stakeholders.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {leadership.map((item) => (
                <div key={item} className="card text-sm font-semibold leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full bg-teal-100/75 border-b border-teal-200">
          <div className="section">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="eyebrow">Education & Certifications</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Credentials that support hands-on QA leadership.
                </h2>
              </div>
              <div className="card">
                <ul className="space-y-4 text-slate-600">
                  <li>Degree / University Education</li>
                  <li>ISTQB / Agile / Test Automation Certification</li>
                  <li>AI, Cloud & Quality Engineering Certifications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="w-full bg-indigo-100/70 border-b border-indigo-200">
          <div className="section">
            <div className="section-heading">
              <p className="eyebrow">Achievements</p>
              <h2>Measurable improvements and quality wins.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {achievements.map((achievement) => (
                <div key={achievement} className="content-card">{achievement}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full bg-slate-200/80 border-b border-slate-300">
          <div className="section pb-8">
            <div className="rounded-[2rem] bg-ink px-6 py-10 text-white shadow-soft sm:px-10">
              <p className="eyebrow text-teal-200">Contact</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s talk about Quality strategy, Automation, or AI-enabled QA.
              </h2>
              <p className="mt-4 text-slate-300 max-w-xl text-base">
                Feel free to reach out directly via email, connect on LinkedIn, or download my resume below.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:mohsinsang@gmail.com" className="btn-light">
                  Email Me (mohsinsang@gmail.com)
                </a>
                <a
                  href="https://www.linkedin.com/in/mohsin-mohammed-981a71172/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light"
                >
                  LinkedIn Profile
                </a>
                <a href={resumeHref} download className="btn-outline-light">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-white py-6 text-center text-sm text-slate-500 border-t border-slate-200">
          <p>© 2026 Mohsin Mohamed. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
