module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60a5fa',
        accent: '#a78bfa',
        glass: 'rgba(255,255,255,0.06)'
      },
      backgroundImage: {
        'gradient-radial-lg': 'radial-gradient(800px 400px at 10% 10%, rgba(167,139,250,0.08), transparent)'
      }
    }
  },
  plugins: []
}
