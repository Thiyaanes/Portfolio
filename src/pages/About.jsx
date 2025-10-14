import React from 'react'
export default function About(){
  return (
    <section className="container py-20">
      <div className="glass p-8">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4 text-slate-200">Hi Everyone, I am <strong className="text-sky-300">Thiyaanes</strong> from Salem, India. I am currently pursuing my final year undergraduate at SRM TRP Engineering College.</p>
        <h3 className="mt-6 font-semibold">Interests</h3>
        <ul className="mt-3 text-slate-200 space-y-2">
          <li>• Travelling</li>
          <li>• Listening to Podcasts & Music</li>
          <li>• Meditating</li>
        </ul>
        <div className="mt-6">
          <a className="px-4 py-2 bg-gradient-to-r from-sky-400 to-violet-400 text-slate-900 rounded font-semibold" href="/assets/THIYAANES_resume.pdf" download>Download Resume</a>
        </div>
      </div>
    </section>
  )
}
