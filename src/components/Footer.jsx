import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-transparent mt-12 py-8">
      <div className="container text-center text-sm text-slate-300">
        © {new Date().getFullYear()} Thiyaanes V · Built with curiosity
      </div>
    </footer>
  )
}
