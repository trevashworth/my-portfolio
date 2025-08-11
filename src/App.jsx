import { useState } from 'react'
import { projects } from './data/projects'
import { experience } from './data/experience'
import './App.css'

function App() {
  const [projectsState] = useState(projects)
  const [experienceState] = useState(experience)

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-12">

        {/* Electric Gradient Main Title */}
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight 
                         bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Trevor Ashworth – Full-Stack Developer
          </h1>
          <p className="mt-3 text-zinc-400 leading-relaxed">
            A selection of recent work and experience.
          </p>
        </header>

        {/* Projects Section */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-6 
                         bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h2>

          <ul className="grid gap-6 sm:grid-cols-2">
            {projectsState.map((project, index) => (
              <li
                key={index}
                className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm p-5 
                           shadow-lg shadow-black/30 transition 
                           hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30 
                           hover:border-cyan-400/50"
              >
                <h3 className="text-lg font-semibold tracking-tight text-cyan-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-cyan-500/50 bg-cyan-900/20 px-3 py-1.5 text-sm 
                               text-cyan-300 transition hover:bg-cyan-800/40 hover:shadow-md hover:shadow-cyan-500/50"
                  >
                    View Project
                  </a>

                  {project.site && (
                    <a
                      href={`https://${project.site}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-purple-500/50 bg-purple-900/20 px-3 py-1.5 text-sm 
                                 text-purple-300 transition hover:bg-purple-800/40 hover:shadow-md hover:shadow-purple-500/50"
                    >
                      Visit Site
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Gradient Divider */}
        <div className="my-12 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 
                         bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <ul className="space-y-4">
            {experienceState.map((exp, index) => (
              <li
                key={index}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm p-5 
                           shadow-lg shadow-black/30 hover:border-purple-400/50 hover:shadow-purple-500/30 transition"
              >
                <h3 className="text-lg font-semibold tracking-tight text-purple-300">
                  {exp.role}
                  <span className="text-zinc-400"> @ {exp.company}</span>
                </h3>
                <p className="text-xs uppercase tracking-wider text-zinc-500 mt-1">
                  {exp.duration}
                </p>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default App