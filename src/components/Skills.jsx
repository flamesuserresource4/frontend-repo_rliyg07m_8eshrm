import { Cpu, Code2, Database, Sparkles } from 'lucide-react'

export default function Skills() {
  const skills = [
    { icon: Cpu, title: 'Systems', items: ['C/C++', 'OS Basics', 'Concurrency'] },
    { icon: Code2, title: 'Frontend', items: ['React', 'Tailwind', 'Framer Motion'] },
    { icon: Database, title: 'Backend', items: ['FastAPI', 'MongoDB', 'REST APIs'] },
    { icon: Sparkles, title: 'AI', items: ['Python', 'LangChain', 'ML Basics'] },
  ]

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-white flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-1 text-slate-300 text-sm">
                {items.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
