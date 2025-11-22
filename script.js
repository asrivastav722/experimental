/* =========================================================
   script.js
   Typewriter, theme toggle, swiper, AOS, parallax, menu, cv
========================================================= */

/* --------- Helpers --------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

/* --------- Typewriter --------- */
const lines = [
  "Hybrid UI • Fast & Accessible",
  "React • Node • MongoDB",
  "I build delightful web experiences"
];
const typeEl = document.getElementById('typewriter');
let lineIndex = 0, charIndex = 0, deleting = false;

function typeTick(){
  const current = lines[lineIndex];
  if(!deleting){
    charIndex++;
    typeEl.textContent = current.slice(0,charIndex);
    if(charIndex === current.length){ deleting = true; setTimeout(typeTick, 900); return; }
  } else {
    charIndex--;
    typeEl.textContent = current.slice(0,charIndex);
    if(charIndex === 0){ deleting = false; lineIndex = (lineIndex + 1) % lines.length; }
  }
  setTimeout(typeTick, deleting ? 40 : 80);
}
if(typeEl) typeTick();

/* --------- Theme Toggle (persist) --------- */
const themeToggle = document.getElementById('themeToggle');
function setTheme(isLight){
  if(isLight) document.body.classList.add('light'); else document.body.classList.remove('light');
  // update icon
  themeToggle && (themeToggle.innerHTML = isLight ? '<i class="ri-moon-line"></i>' : '<i class="ri-sun-line"></i>');
  try { localStorage.setItem('site-theme', isLight ? 'light' : 'dark'); } catch(e){}
}
(function initTheme(){
  const saved = (function(){ try { return localStorage.getItem('site-theme'); } catch(e){ return null; } })();
  // default dark, unless saved 'light'
  setTheme(saved === 'light');
})();
themeToggle && themeToggle.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('light'));
});

/* --------- Mobile Menu Toggle (for nav hidden on mobile) --------- */
const menuToggle = document.getElementById('menuToggle');
menuToggle && menuToggle.addEventListener('click', () => {
  const nav = document.getElementById('nav');
  if(!nav) return;
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  // simple inline mobile style if open
  if(open) { nav.style.display = 'flex'; nav.style.flexDirection = 'column'; nav.style.position='absolute'; nav.style.right='18px'; nav.style.top='64px'; nav.style.background='rgba(0,0,0,0.6)'; nav.style.padding='12px'; nav.style.borderRadius='12px'; }
  else { nav.style.removeProperty('display'); nav.style.removeProperty('flexDirection'); nav.style.removeProperty('position'); nav.style.removeProperty('right'); nav.style.removeProperty('top'); nav.style.removeProperty('background'); nav.style.removeProperty('padding'); nav.style.removeProperty('borderRadius'); }
});

/* --------- Download CV (buttons) --------- */
const downloadCV = (href='cv.pdf', filename='Akash-Raj-CV.pdf') => {
  const a = document.createElement('a');
  a.href = href;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
};
const downloadBtn = document.getElementById('downloadCV');
const downloadHeader = document.getElementById('downloadBtn');
downloadBtn && downloadBtn.addEventListener('click', () => downloadCV('cv.pdf','Akash-Raj-CV.pdf'));
downloadHeader && downloadHeader.addEventListener('click', () => downloadCV('cv.pdf','Akash-Raj-CV.pdf'));

/* --------- AOS init --------- */
if(window.AOS) window.AOS.init({ once:true, duration:700, easing:'ease-out-cubic' });

/* --------- Swiper init --------- */
function initSwiper(){
  try {
    if(typeof Swiper !== 'undefined'){
      new Swiper('.project-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 18,
        centeredSlides: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: { 700: { slidesPerView: 2 }, 1000: { slidesPerView: 3 } }
      });
    }
  } catch(e){ console.warn('Swiper init failed', e); }
}
initSwiper();

/* --------- Gentle entrance via GSAP when available (dynamically load if missing) --------- */
function runGSAP(){
  if(typeof gsap !== 'undefined'){
    gsap.from('.glass', { y: 18, opacity: 0, stagger: 0.06, duration: 0.7, ease: 'power2.out' });
    gsap.from('.hero-text h1', { opacity: 0, y: 24, duration: 0.9, ease:'power3.out' });
    gsap.to('.shape', { y: 8, repeat:-1, yoyo:true, duration: 6, ease:'sine.inOut' });
    return;
  }
  // load GSAP CDN dynamically
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
  script.async = true;
  script.onload = () => {
    try { runGSAP(); } catch(e){ /* ignore */ }
  };
  document.head.appendChild(script);
}
runGSAP();

/* --------- Simple 3D Parallax for hero profile wrapper --------- */
const heroCard = document.querySelector('.profile-wrapper');
const heroArea = document.querySelector('#hero');
if(heroArea && heroCard){
  function parallax(e){
    const bounds = heroArea.getBoundingClientRect();
    const cx = (bounds.left + bounds.width/2);
    const cy = (bounds.top + bounds.height/2);
    const mouseX = (e.clientX ?? (e.touches && e.touches[0] && e.touches[0].clientX)) - cx;
    const mouseY = (e.clientY ?? (e.touches && e.touches[0] && e.touches[0].clientY)) - cy;
    const rx = (-mouseY / bounds.height) * 6;
    const ry = (mouseX / bounds.width) * 8;
    heroCard.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
  }
  function resetParallax(){ heroCard.style.transform = ''; }
  heroArea.addEventListener('mousemove', parallax);
  heroArea.addEventListener('touchmove', parallax, { passive:true });
  heroArea.addEventListener('mouseleave', resetParallax);
  heroArea.addEventListener('touchend', resetParallax);
}

/* --------- Floating subtle animations via CSS classes (kept simple) --------- */
/* (shapes animate via CSS keyframes) */

/* --------- Accordion keyboard support (details element) --------- */
document.querySelectorAll('details.accordion').forEach(d => {
  const s = d.querySelector('summary');
  s && s.setAttribute('tabindex', '0');
  s && s.addEventListener('keydown', (ev) => {
    if(ev.key === 'Enter' || ev.key === ' '){ ev.preventDefault(); d.open = !d.open; }
  });
});

/* --------- Footer year --------- */
const y = document.getElementById('year');
if(y) y.textContent = new Date().getFullYear();

/* --------- Small accessibility: ensure links open safely --------- */
document.querySelectorAll('a[target="_blank"]').forEach(a => {
  if(!a.rel.includes('noopener')) a.rel = (a.rel + ' noopener').trim();
});

const profile = document.querySelector(".profile-wrapper");

profile.addEventListener("mousemove", (e) => {
  const rect = profile.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  const rotateX = (y / 20) * -1;
  const rotateY = x / 20;

  profile.style.transform = `
    perspective(700px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.07)
  `;
});

profile.addEventListener("mouseleave", () => {
  profile.style.transform =
    "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
});
