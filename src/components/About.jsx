export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white">About Me</h2>
            <p className="mt-3 text-slate-300">
              I’m a computer engineering student obsessed with building end-to-end experiences — from low-level systems to rich, animated frontends. I care about performance, accessibility, and clean abstractions.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <li className="bg-white/5 rounded-xl px-3 py-2">C/C++ • Rust basics</li>
              <li className="bg-white/5 rounded-xl px-3 py-2">JavaScript/TypeScript</li>
              <li className="bg-white/5 rounded-xl px-3 py-2">React • Tailwind • Framer</li>
              <li className="bg-white/5 rounded-xl px-3 py-2">Python • FastAPI</li>
              <li className="bg-white/5 rounded-xl px-3 py-2">MongoDB • SQL</li>
              <li className="bg-white/5 rounded-xl px-3 py-2">Git • Linux • Docker</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-2xl p-8">
            <h3 className="text-white font-semibold">Highlights</h3>
            <ul className="mt-4 space-y-3 text-slate-200/90">
              <li>• Built interactive 3D web hero sections using Spline</li>
              <li>• Optimized algorithms and data structures for competitive coding</li>
              <li>• Shipped full-stack projects with FastAPI + React</li>
              <li>• Explored embedded systems and microcontrollers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
