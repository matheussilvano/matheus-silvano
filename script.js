// Animações e modo escuro com ícones 🌞 / 🌙
document.addEventListener("DOMContentLoaded", () => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const darkModeToggle = document.getElementById("darkModeToggle");
  
    // Função para atualizar o ícone do botão
    function updateIcon() {
      darkModeToggle.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
    }
  
    // Verifica o modo inicial
    if (localStorage.getItem("theme") === "dark" || 
        (!localStorage.getItem("theme") && prefersDarkScheme.matches)) {
      document.body.classList.add("dark");
    }
  
    updateIcon();
  
    // Alterna o modo escuro e atualiza ícone e localStorage
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateIcon();
    });
  
    // Animações ao rolar a página
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
  
    fadeElements.forEach(el => observer.observe(el));
  });
  

// Animação ao rolar (scroll)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

