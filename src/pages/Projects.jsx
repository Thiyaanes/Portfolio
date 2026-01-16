import React from 'react'
import { projects } from '../data/projects'

export default function Projects(){
  return (
    <section className="container py-20">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {projects.map(p=> (
          <div key={p.title} className="project-card glass p-6 border border-white/20">
            <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded-lg" />
            <div className="mt-4">
              <h3 className="font-semibold text-lg text-sky-300">{p.title}</h3>
              <p className="text-slate-300 mt-2">{p.desc}</p>
              <a className="inline-block mt-3 text-sky-300 font-semibold hover:underline" href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-10 font-semibold">My recent works</h3>
      <ul className="mt-3 text-slate-300 list-disc list-inside">
        <li>Energy Usage Optimization on SMT & CNC lines</li>
        <li>Vehicle Accident Alert System</li>
        <li>Debugger's Nightmare IDE</li>
      </ul>
    </section>
  )
}
