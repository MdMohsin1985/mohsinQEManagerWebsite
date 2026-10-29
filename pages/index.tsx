import Head from "next/head";

const experience = [
  {
    role: "QA Manager / Quality Engineering Leader",
    company: "Current Organization",
    period: "Recent",
    details:
      "Leading quality strategy, automation delivery, release confidence, and cross-functional QA governance for modern software teams.",
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
  "Test Strategy",
  "Automation Frameworks",
  "Playwright / Selenium",
  "API Testing",
  "Performance Testing",
  "CI/CD Quality Gates",
  "Agile Delivery",
  "Defect Prevention",
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
  return (
    <>
      <Head>
        <title>Mohsin | QA Manager Portfolio</title>
        <meta
          name="description"
          content="Portfolio website for a QA Manager and Quality Engineering leader focused on automation, AI, and delivery excellence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-slate-50 text-ink">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="#home" className="text-lg font-bold tracking-tight">
              Mohsin
            </a>
            <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              <a href="#about" className="hover:text-ocean">About</a>
              <a href="#experience" className="hover:text-ocean">Experience</a>
              <a href="#projects" className="hover:text-ocean">Projects</a>
              <a href="#contact" className="hover:text-ocean">Contact</a>
            </div>
            <a href="/resume.pdf" download className="btn-secondary">
              Resume
            </a>
          </nav>
        </header>

        <section id="home" className="section grid items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <p className="eyebrow">QA Manager | Automation | AI in Quality</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-6xl">
              Building reliable software teams with smart quality engineering.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I help teams ship confidently by combining test strategy,
              automation, AI-assisted QA practices, and calm technical
              leadership.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="rounded-[1.5rem] bg-ink p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
                Quality Focus
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["Strategy", "Automation", "AI Testing", "Leadership"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-4">
                    <div className="h-1.5 w-10 rounded-full bg-teal-200" />
                    <p className="mt-2 text-sm text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Practical quality leadership for modern delivery.</h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            I am a Quality Engineering professional focused on building systems
            that prevent defects, improve delivery confidence, and make quality
            measurable. My work spans manual QA, automation, API testing,
            release governance, AI-enabled testing, and team leadership.
          </p>
        </section>

        <section id="experience" className="section">
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
        </section>

        <section className="section">
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
                  <div key={project} className="list-item">{project}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="section">
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
        </section>

        <section id="education" className="section">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Education & Certifications</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Credentials that support hands-on QA leadership.
              </h2>
            </div>
            <div className="card">
              <ul className="space-y-4 text-slate-600">
                <li>Degree / University Name</li>
                <li>ISTQB / Agile / Automation Certification</li>
                <li>AI, cloud, or testing tool certifications</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="section-heading">
            <p className="eyebrow">Achievements</p>
            <h2>Measurable improvements and quality wins.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement) => (
              <div key={achievement} className="list-item">{achievement}</div>
            ))}
          </div>
        </section>

        <section id="contact" className="section pb-20">
          <div className="rounded-[2rem] bg-ink px-6 py-12 text-white shadow-soft sm:px-10">
            <p className="eyebrow text-teal-200">Contact</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s talk about quality strategy, automation, or AI-enabled QA.
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:mohsinsang@gmail.com" className="btn-light">Email Me</a>
              <a href="/resume.pdf" download className="btn-outline-light">
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
