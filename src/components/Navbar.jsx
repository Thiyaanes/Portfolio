import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  {to: '/', label: 'Home'},
  {to: '/about', label: 'About'},
  {to: '/skills', label: 'Skills'},
  {to: '/projects', label: 'Projects'},
  {to: '/achievements', label: 'Achievements'},
  {to: '/contact', label: 'Contact'},
]

export default function Navbar(){
  return (
    <header className="w-full sticky top-0 z-50 bg-transparent">
      <div className="container flex items-center justify-between py-4">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-xl font-bold text-white">Thiyaanes Venkatachalam</motion.div>

        <nav>
          <ul className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} className={({isActive}) => `text-sm font-medium ${isActive? 'text-sky-400':''}`} >{l.label}</NavLink>
              </li>
            ))}
            <li>
              <a className="ml-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-sky-400 to-violet-400 text-slate-900 font-semibold" href="/Portfolio/assets/THIYAANES_resume.pdf" download>Resume</a>
            </li>
          </ul>

          {/* mobile menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  )
}

function MobileMenu(){
  const [open, setOpen] = React.useState(false)
  return (
    <div className="relative">
      <button onClick={()=>setOpen(o=>!o)} className="px-3 py-2 rounded-md bg-white/10">Menu</button>
      {open && (
        <motion.div initial={{opacity:0, y:-8}} animate={{opacity:1, y:0}} className="absolute right-0 mt-2 bg-white/5 backdrop-blur-md rounded-lg p-4 w-48">
          {links.map(l=> <div key={l.to} className="py-1"><NavLink to={l.to} onClick={()=>setOpen(false)}>{l.label}</NavLink></div>)}
          <div className="mt-2"><a href="/Portfolio/assets/THIYAANES_resume.pdf" download className="block px-3 py-2 bg-gradient-to-r from-sky-400 to-violet-400 rounded text-slate-900">Resume</a></div>
        </motion.div>
      )}
    </div>
  )
}
