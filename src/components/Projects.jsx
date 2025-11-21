export default function Projects() {
  const projects = [
    {
      title: 'Realtime Chat + AI Assistant',
      desc: 'A full-stack chat app with embeddings and FastAPI backend.',
      tags: ['React', 'FastAPI', 'MongoDB'],
      link: '#',
    },
    {
      title: '3D Portfolio Hero',
      desc: 'Interactive Spline scene integrated with React and Tailwind.',
      tags: ['React', 'Spline', 'UI'],
      link: '#',
    },
    {
      title: 'Algo Visualizer',
      desc: 'Visualizes searching/sorting algorithms with animations.',
      tags: ['TypeScript', 'Framer Motion'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <a href="#contact" className="text-sm text-cyan-300 hover:text-white">Need a collaborator? →</a>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-cyan-400/40 transition-colors">
              <div className="h-36 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-white/5" />
              <h3 className="mt-4 text-white font-semibold group-hover:text-cyan-300 transition-colors">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
