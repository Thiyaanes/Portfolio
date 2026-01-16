import React from 'react'
export default function Achievements(){
  const items = [
    {title:'Leadership & Time Management', desc:'Led the development of Vehicle Accident Alert System during the NAAC visit; built a website in 48 hours for a hackathon.'},
    {title:'Paper Presentation', desc:'Presented papers at Government College of Engineering, Erode (2024) and KSR College of Engineering (2025).'},
    {title:'Ideathon', desc:'Won 1st Prize at GCE Erode (2024) for Vehicle Accident Detection & Alert System.'},
    {title:'Hackathon', desc:'Finalist at Creonix 30-hour Hackathon; 3rd place in UI/UX (DAKSHAA T25).'}
  ]
  return (
    <section className="container py-20">
      <h2 className="text-2xl font-bold">Achievements</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {items.map(i=> (
          <div key={i.title} className="achievement-card glass p-6 border border-white/20">
            <h3 className="font-semibold text-lg text-sky-300">{i.title}</h3>
            <p className="mt-2 text-slate-300">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
