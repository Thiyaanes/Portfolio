const output = document.getElementById('terminal-output');
const form = document.getElementById('terminal-form');
const input = document.getElementById('terminal-input');
const terminalCard = document.querySelector('.terminal-card');

const commands = {
  help: `<span class="terminal-muted">Available commands</span><br><span class="code-green">whoami</span> · identity<br><span class="code-green">about</span> · background and interests<br><span class="code-green">experience</span> · professional experience<br><span class="code-green">projects</span> · selected work<br><span class="code-green">skills</span> · technical toolkit<br><span class="code-green">writing</span> · Medium articles<br><span class="code-green">achievements</span> · milestones<br><span class="code-green">contact</span> · contact details<br><span class="code-green">socials</span> · profile links<br><span class="code-green">resume</span> · open resume PDF<br><span class="code-green">clear</span> · clear terminal`,
  whoami: `Thiyaanes V — Software Developer<br>Interested in DevOps, cloud infrastructure, Python and building useful software.`,
  about: `ECE graduate from SRM TRP Engineering College. I learn by building: browser-based 3D tools, containerized applications and document-processing pipelines.`,
  experience: `Software Developer Intern @ Deknek 3D<br>Feb 2026 — May 2026 · Remote<br>Three.js · JavaScript · Python · 3D model workflows · MediaRecorder API`,
  projects: `01 Debugger's Nightmare IDE — Flask, Docker, Kubernetes, GitHub Actions<br>02 Energy Usage Optimization — Python, LSTM, Isolation Forest<br>03 Thirupugazh — PyMuPDF, Tesseract OCR, structured JSON<br>04 Depox — shared dependency manager concept (upcoming)<br><br>Scroll to #projects for details.`,
  skills: `Python · Java · HTML · CSS · JavaScript · Flask · REST APIs · Docker · Podman · Kubernetes · GitHub Actions · CI/CD · Terraform · AWS (IAM, VPC, S3, EC2) · Linux · Bash · Git`,
  writing: `Medium: Docker series (Parts 1–3), ArchiveMind, and Python + Wi-Fi file sharing.<br>Scroll to #writing to read the articles.`,
  achievements: `2025 — Winner, Protocol404 48-Hour Virtual Hackathon<br>2025 — Finalist, Nokia 4.0 Creonix National 30-Hour Hackathon<br>2024 — 1st Prize, GCE Erode Ideathon<br>2025 — 3rd Place, DAKSHAA T25 UI/UX`,
  contact: `Phone: +91 63698 53089<br>Email: thiyaanesv@gmail.com<br>LinkedIn: linkedin.com/in/thiyaanes-v-08bb87282`,
  socials: `GitHub: github.com/Thiyaanes<br>LinkedIn: linkedin.com/in/thiyaanes-v-08bb87282<br>Medium: medium.com/@thiyaanesv<br>LeetCode: leetcode.com/u/thiyaanes3/`,
  pwd: `/home/visitor/portfolio`,
  ls: `about/  experience/  projects/  skills/  writing/  achievements/  contact/`,
  date: new Date().toDateString()
};

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function appendCommand(command) {
  const key = command.trim().toLowerCase();
  const line = document.createElement('p');
  line.innerHTML = `<span class="prompt">visitor@web:~$</span> ${escapeHtml(command)}`;
  output.appendChild(line);
  if (key === 'clear') {
    output.innerHTML = '<p class="terminal-muted">Terminal cleared. Type <span class="code-green">help</span> to see commands.</p>';
    output.scrollTop = 0;
    return;
  }
  const result = document.createElement('p');
  result.className = 'terminal-output-line';
  if (key === 'resume') {
    result.textContent = 'Opening resume PDF…';
    output.appendChild(result);
    window.open('assets/Thiyaanes_V_Resume.pdf', '_blank', 'noopener');
  } else if (commands[key]) {
    result.innerHTML = commands[key];
    output.appendChild(result);
    const section = document.getElementById(key);
    if (section) section.scrollIntoView({behavior:'smooth', block:'start'});
  } else {
    result.innerHTML = `command not found: ${escapeHtml(key)}. Type <span class="code-green">help</span> to list commands.`;
    output.appendChild(result);
  }
  // The shell has a fixed viewport: new output scrolls inside it rather than stretching the page.
  output.scrollTo({top: output.scrollHeight, behavior:'smooth'});
}
form.addEventListener('submit', event => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  appendCommand(value);
  input.value = '';
});
document.querySelectorAll('[data-cmd]').forEach(button => button.addEventListener('click', () => appendCommand(button.dataset.cmd)));

// Dark mode is the default; the visitor can switch and the preference persists.
const themeToggle = document.getElementById('theme-toggle');
function setTheme(theme) {
  document.body.dataset.theme = theme;
  const light = theme === 'light';
  themeToggle.innerHTML = `<span class="theme-icon">${light ? '☾' : '☼'}</span><span class="theme-label">${light ? 'Dark mode' : 'Light mode'}</span>`;
  themeToggle.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} mode`);
  document.querySelector('meta[name="theme-color"]').content = light ? '#f3f1e9' : '#11130f';
  try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
}
let savedTheme = 'dark';
try { savedTheme = localStorage.getItem('portfolio-theme') || 'dark'; } catch (_) {}
setTheme(savedTheme);
themeToggle.addEventListener('click', () => setTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark'));

document.getElementById('year').textContent = new Date().getFullYear();


// Compact mobile navigation. Close it after a section is selected.
const menuToggle = document.getElementById('menu-toggle');
const siteNavigation = document.getElementById('site-navigation');
function closeMobileMenu() {
  if (!menuToggle || !siteNavigation) return;
  menuToggle.classList.remove('is-open');
  siteNavigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}
if (menuToggle && siteNavigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.classList.toggle('is-open', !isOpen);
    siteNavigation.classList.toggle('is-open', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  });
  siteNavigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMobileMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1100) closeMobileMenu(); });
}
