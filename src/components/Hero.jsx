import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Gradient backdrops */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 h-[40rem] w-[40rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[40rem] w-[40rem] rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="backdrop-blur-sm bg-slate-900/40 border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-cyan-300 font-semibold tracking-wide">Computer Engineering Student</p>
            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Building future-proof systems, playful UIs, and performant code.
            </h1>
            <p className="mt-4 text-slate-200/90">
              I love turning complex problems into elegant, interactive experiences. My toolkit spans systems, web, and AI.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-semibold px-5 py-3 shadow-[0_8px_30px_-10px] shadow-cyan-500/60">
                Explore Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 text-white px-5 py-3 border border-white/10">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle overlay to ensure text readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/60" />
    </section>
  )
}
