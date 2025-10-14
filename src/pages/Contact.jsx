import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>

      {/* ✉️ Contact Info Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-xl mx-auto border border-white/20">
        <p className="text-lg mb-3">
          📧{" "}
          <a
            href="mailto:thiyaanesv@gmail.com"
            className="text-sky-300 hover:underline"
          >
            thiyaanesv@gmail.com
          </a>
        </p>

        <p className="text-lg mb-3">
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/thiyaanes-v-08bb87282"
            target="_blank"
            rel="noreferrer"
            className="text-sky-300 hover:underline"
          >
            LinkedIn
          </a>
        </p>

        <p className="text-lg mb-6">📱 +91 6369853089</p>

        {/* 🌐 GitHub & LeetCode Links */}
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/Thiyaanes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition transform hover:scale-105"
          >
            <i className="fab fa-github text-3xl"></i>
            <span>GitHub</span>
          </a>

          <a
            href="https://leetcode.com/u/Thiyaanes3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition transform hover:scale-105"
          >
            <i className="fas fa-code text-3xl"></i>
            <span>LeetCode</span>
          </a>
        </div>
      </div>

      {/* 💬 Footer note */}
      <p className="text-gray-400 mt-10 text-sm">
        Let’s collaborate on exciting projects together 🚀
      </p>
    </section>
  )
}
