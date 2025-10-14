import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* ✨ Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="animate-pulse bg-blue-400/20 w-72 h-72 rounded-full absolute top-10 left-20 blur-3xl"></div>
        <div className="animate-ping bg-pink-500/20 w-64 h-64 rounded-full absolute bottom-20 right-20 blur-3xl"></div>
      </div>

      {/* 🧭 Navbar */}
      <Navbar />

      {/* 💻 Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* 🔻 Footer */}
      <Footer />
    </div>
  )
}
