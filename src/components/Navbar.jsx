import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_30px_-10px] shadow-cyan-400/70" />
              <span className="text-white font-semibold tracking-tight">My Portfolio</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-200 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="h-6 w-px bg-white/10" />
              <div className="flex items-center gap-3">
                <a href="mailto:you@example.com" className="p-2 rounded-lg hover:bg-white/10 text-slate-200" aria-label="Email"><Mail size={18} /></a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-slate-200" aria-label="GitHub"><Github size={18} /></a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-slate-200" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </div>
            </nav>
            <button className="md:hidden text-white p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200 hover:text-white py-2">
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <a href="mailto:you@example.com" className="p-2 rounded-lg hover:bg-white/10 text-slate-200" aria-label="Email"><Mail size={18} /></a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-slate-200" aria-label="GitHub"><Github size={18} /></a>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-white/10 text-slate-200" aria-label="LinkedIn"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
