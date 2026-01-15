import React from 'react'
export default function Skills(){
  const skills = [
    {name:'Python', logo:'/assets/logos/python.png'},
    {name:'C++', logo:'/assets/logos/cpp.png'},
    {name:'HTML', logo:'/assets/logos/html.png'},
    {name:'Java', logo:'/assets/logos/java.png'},
    {name:'SQL', logo:'/assets/logos/sql.png'},
    {name:'Flask', logo:'/assets/logos/flask.png'},
    {name:'Figma', logo:'/assets/logos/figma.png'},
    {name:'Git', logo:'/assets/logos/git.png'},
  ]
  const tools = [
    {name:'VSCode', logo:'/assets/logos/vscode.png'},
    {name:'Windows', logo:'/assets/logos/windows.png'},
    {name:'GitHub', logo:'/assets/logos/github.png'},
    {name:'Vercel', logo:'/assets/logos/vercel.png'},
  ]
  return (
    <section className="container py-20 relative">
      <div className="relative z-10">
      <h2 className="text-2xl font-bold text-white">Professional Skillset</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {skills.map(s=> (
          <div key={s.name} className="skill-card flex items-center gap-3 p-4">
            <img src={s.logo} alt={s.name} className="w-10 h-10 object-contain"/>
            <div className="font-semibold">{s.name}</div>
          </div>
        ))}
      </div>

      <h3 className="mt-10 text-xl font-semibold text-white">Tools I Use</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {tools.map(t=> (
          <div key={t.name} className="skill-card flex items-center gap-3 p-4">
            <img src={t.logo} alt={t.name} className="w-8 h-8 object-contain"/>
            <div className="font-semibold">{t.name}</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
