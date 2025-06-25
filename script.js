document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const mainContainer = document.querySelector(".container");

  // --- LÓGICA ROBUSTA PARA ANIMAÇÃO DO HEADER ---

  // Variável para guardar o estado atual
  let isHeaderScrolled = false; 

  function handleScroll() {
    if (!header) return;

    // A posição em que a animação deve acontecer
    const scrollThreshold = 50; 
    
    // Condição para ADICIONAR a classe
    if (window.scrollY > scrollThreshold && !isHeaderScrolled) {
      header.classList.add("header-scrolled");
      isHeaderScrolled = true; // Atualiza o estado
    } 
    // Condição para REMOVER a classe
    else if (window.scrollY <= scrollThreshold && isHeaderScrolled) {
      header.classList.remove("header-scrolled");
      isHeaderScrolled = false; // Atualiza o estado
    }
  }

  function adjustContainerPadding() {
    if (header && mainContainer) {
      const headerHeight = header.offsetHeight;
      mainContainer.style.paddingTop = `${headerHeight + 30}px`;
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', adjustContainerPadding);
  
  adjustContainerPadding();
  handleScroll(); // Roda uma vez para o estado inicial

  // --- RESTO DO CÓDIGO (MODO ESCURO, CARROSSEL, ETC.) ---

  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const darkModeToggle = document.getElementById("darkModeToggle");
  function updateIcon() {
    darkModeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  }
  if (localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && prefersDarkScheme.matches)) {
    document.body.classList.add("dark");
  }
  updateIcon();
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcon();
  });

  const fadeElements = document.querySelectorAll(".fade-in");
  const appearOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  fadeElements.forEach(el => appearOnScroll.observe(el));
  
  const track = document.querySelector(".carousel-track");
  const cardsCarousel = Array.from(track?.children || []);
  const nextButton = document.querySelector(".carousel-button.next");
  const prevButton = document.querySelector(".carousel-button.prev");
  let currentIndex = 0;
  function updateCarousel() {
    if (cardsCarousel.length === 0) return;
    cardsCarousel.forEach((card, index) => {
      card.classList.remove("active");
      if (index === currentIndex) card.classList.add("active");
    });
    const cardWidth = cardsCarousel[0].getBoundingClientRect().width;
    const gap = 16;
    track.style.transform = `translateX(-${(cardWidth + gap) * currentIndex}px)`;
  }
  if (nextButton && prevButton && track && cardsCarousel.length > 0) {
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cardsCarousel.length;
      updateCarousel();
    });
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cardsCarousel.length) % cardsCarousel.length;
      updateCarousel();
    });
    window.addEventListener("resize", updateCarousel);
    updateCarousel();
  }
});
