document.addEventListener("DOMContentLoaded", () => {
  // --- LÓGICA PARA O DARK MODE ---
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

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
  }

  // --- LÓGICA PARA O CARROSSEL ---
  const track = document.querySelector(".carousel-track");
  const nextButton = document.querySelector(".carousel-button.next");
  const prevButton = document.querySelector(".carousel-button.prev");

  if (track && nextButton && prevButton) {
    const cards = Array.from(track.children);
    let currentIndex = 0;

    function updateCarousel() {
      cards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentIndex) {
          card.classList.add('active');
        }
      });
    }

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    });

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    });
    
    // Inicia o carrossel no primeiro card
    updateCarousel();
  }
});