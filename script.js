document.addEventListener("DOMContentLoaded", () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Atualiza ícone de modo escuro
  function updateIcon() {
    darkModeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  }

  // Verifica modo inicial (localStorage ou preferências do sistema)
  if (localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && prefersDarkScheme.matches)) {
    document.body.classList.add("dark");
  }

  updateIcon();

  // Alterna o modo escuro
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcon();
  });

  // Animações ao rolar a página (fade-in)
  const fadeElements = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  fadeElements.forEach(el => appearOnScroll.observe(el));

  // Carrossel de recomendações
  const track = document.querySelector(".carousel-track");
  const cards = Array.from(track?.children || []);
  const nextButton = document.querySelector(".carousel-button.next");
  const prevButton = document.querySelector(".carousel-button.prev");
  let currentIndex = 0;

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.remove("active");
      if (index === currentIndex) {
        card.classList.add("active");
      }
    });

    const cardWidth = cards[0]?.getBoundingClientRect().width + 16; // margem/padding entre cards
    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }

  if (nextButton && prevButton && track && cards.length > 0) {
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    });

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
    updateCarousel();
  }
});
