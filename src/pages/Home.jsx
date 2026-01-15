import React from 'react'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <section className="container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"> <Typing /></h1>
          <p className="mt-4 text-lg text-slate-200">I&apos;m <span className="text-sky-300 font-semibold">Thiyaanes</span> — Software Developer · Front-End Developer · Leet Coder · Final Year Undergraduate Student</p>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li>• I fell in love with programming and I have at least learnt something, I think…</li>
            <li>• Curious by nature, I love exploring and diving into new ideas and innovations.</li>
            <li>• Driven by continuous learning; I enjoy discovering new skills and working around the clock when passionate.</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a href="/projects" className="px-5 py-3 rounded-md bg-gradient-to-r from-sky-400 to-violet-400 text-slate-900 font-semibold">View projects</a>
            <a href="/about" className="px-5 py-3 rounded-md border border-white/10">About me</a>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="glass p-6">
          <h3 className="text-lg font-semibold text-slate-100">Education</h3>
          <div className="mt-4 space-y-3 text-slate-300">
            <div className="bg-white/5 p-4 rounded">
              <p><strong className="text-sky-300">College:</strong> SRM TRP Engineering College, Trichy</p>
              <p><strong>Degree:</strong> B.E. Electronics and Communication Engineering (2022 – 2026)</p>
              <p><strong>CGPA:</strong> 8.04</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

function Typing(){
  const [text, setText] = React.useState('')
  const full = 'Hi Developers!'
  React.useEffect(()=>{
    let i=0; setText('')
    const t = setInterval(()=>{
      setText(prev=> prev + full.charAt(i)); 
      i++; 
      if(i>=full.length) clearInterval(t)
    }, 80)
    return ()=> clearInterval(t)
  },[])
  return <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-violet-300">{text}<span className="opacity-80">▌</span></span>
}
