document.addEventListener("DOMContentLoaded", () => {
  // --- OBJETO DE TRADUÇÕES ---
  const translations = {
    pt: {
      hero_subtitle: "Desenvolvedor IA & Back-end",
      download_cv_button: "Baixar Currículo",
      about_me_scroll: "Sobre Mim",
      about_me_title: "Sobre Mim",
      about_me_p1: "Desenvolvedor de IA na Dígitro Tecnologia e estudante de Sistemas de Informação na Universidade Federal de Santa Catarina. Minha atuação é focada na pesquisa e implementação de modelos de Inteligência Artificial, com forte base em Machine Learning e NLP.",
      about_me_p2: "Sou motivado por resolver desafios reais e gerar impacto positivo através da aplicação prática da IA, utilizando diariamente ferramentas como Python, Pandas, Scikit-learn e TensorFlow.",
      projects_scroll: "Projetos",
      projects_title: "Projetos",
      project1_title: "Real Time Face Recognizer",
      project1_desc: "Um sistema local de reconhecimento facial com OpenCV e LBPH. Ideal para projetos de visão computacional que identificam rostos em tempo real.",
      view_gitlab_button: "Ver no GitLab",
      project2_title: "Toxic Content Detector",
      project2_desc: "Projeto de ML para detecção de comentários tóxicos usando NLP, regressão logística e TF-IDF.",
      test_online_button: "Testar Online",
      view_github_button: "Ver no GitHub",
      project3_title: "Fake Data API",
      project3_desc: "Uma API para gerar dados fictícios de pessoas e empresas. Ideal para testes com usuários anônimos.",
      project4_title: "Removedor de Pontos do CNPJ",
      project4_desc: "Extensão para Chrome que simplifica a cópia de CNPJs formatados. Hoje com mais de 170 usuários.",
      view_webstore_button: "Ver na Web Store",
      experience_title: "Experiência Profissional",
      exp1_title: "Dígitro - Estagiário em Desenvolvimento de IA",
      exp1_date: "Abr 2025 - Atual",
      exp1_desc: "Desenvolvimento de programas implementando algoritmos de IA, pesquisa de novas aplicações e modelos, e tratamento de dados para criação de datasets.",
      exp2_title: "Nexxera - Operador de Implantação",
      exp2_date: "Dez 2023 - Abr 2025",
      exp2_desc: "Suporte técnico a clientes, automação de processos com Shell Script/Python e análise de layouts de arquivos.",
      exp3_title: "Nexxera - Jovem Aprendiz (Implantação)",
      exp3_date: "Jan 2022 - Dez 2023",
      exp3_desc: "Primeiro contato com o mundo corporativo, realizando o suporte técnico e inserção de clientes na base da empresa.",
      recommendations_title: "Recomendações",
      rec1_role: "Presidente e fundador do Grupo Nexxees",
      rec1_text: `"Matheus, fico muito feliz por sua trajetória e por ter contribuído para o início de sua carreira. Grandes talentos seguirão novos rumos, e o mundo oferece grandes oportunidades. Parabéns, siga em frente e conquiste seus sonhos."`,
      rec2_role: "Gerente de Implantação - Nexxera",
      rec2_text: `"Obrigado pelo período em que esteve conosco. Desde o seu início como jovem aprendiz, você sempre demonstrou muito respeito e comprometimento. Você é um grande profissional e tem um futuro muito promissor."`,
      rec3_role: "Tech Leader - Nexxera",
      rec3_text: `"Tive o prazer de ser Tech Lead durante toda a evolução do Matheus na Nexxera. Possui muita facilidade de aprendizagem e sempre busca soluções com agilidade. Um grande profissional que terá um futuro brilhante."`,
      contact_title: "Contato",
      contact_subtitle: "Vamos conversar! Entre em contato comigo através dos canais abaixo.",
      contact_email: "matheussilvano2005@gmail.com",
      contact_whatsapp: "(48) 99858-4035",
      contact_linkedin: "LinkedIn",
      footer_text: "© 2024 Matheus Silvano. Todos os direitos reservados."
    },
    en: {
      hero_subtitle: "AI & Back-end Developer",
      download_cv_button: "Download CV",
      about_me_scroll: "About Me",
      about_me_title: "About Me",
      about_me_p1: "AI Developer at Dígitro Tecnologia and Information Systems student at the Federal University of Santa Catarina. My work focuses on the research and implementation of Artificial Intelligence models, with a strong foundation in Machine Learning and NLP.",
      about_me_p2: "I am motivated by solving real-world challenges and creating a positive impact through the practical application of AI, using tools like Python, Pandas, Scikit-learn, and TensorFlow daily.",
      projects_scroll: "Projects",
      projects_title: "Projects",
      project1_title: "Real Time Face Recognizer",
      project1_desc: "A local face recognition system with OpenCV and LBPH. Ideal for computer vision projects that identify faces in real time.",
      view_gitlab_button: "View on GitLab",
      project2_title: "Toxic Content Detector",
      project2_desc: "ML project for detecting toxic comments using NLP, logistic regression, and TF-IDF.",
      test_online_button: "Test Online",
      view_github_button: "View on GitHub",
      project3_title: "Fake Data API",
      project3_desc: "An API to generate fictitious data for people and companies. Ideal for testing with anonymous users.",
      project4_title: "CNPJ Formatter",
      project4_desc: "Chrome extension that simplifies copying formatted CNPJs. Currently with over 170 users.",
      view_webstore_button: "View on Web Store",
      experience_title: "Professional Experience",
      exp1_title: "Dígitro - AI Development Intern",
      exp1_date: "Apr 2025 - Present",
      exp1_desc: "Development of programs implementing AI algorithms, research of new applications and models, and data processing for dataset creation.",
      exp2_title: "Nexxera - Implementation Operator",
      exp2_date: "Dec 2023 - Apr 2025",
      exp2_desc: "Technical support for clients, process automation with Shell Script/Python, and file layout analysis.",
      exp3_title: "Nexxera - Young Apprentice (Implementation)",
      exp3_date: "Jan 2022 - Dec 2023",
      exp3_desc: "First contact with the corporate world, providing technical support and adding clients to the company's database.",
      recommendations_title: "Recommendations",
      rec1_role: "President and founder of the Nexxees Group",
      rec1_text: `"Matheus, I am very happy for your journey and for having contributed to the beginning of your career. Great talents will follow new paths, and the world offers great opportunities. Congratulations, move forward and conquer your dreams."`,
      rec2_role: "Implementation Manager - Nexxera",
      rec2_text: `"Thank you for the time you were with us. Since your beginning as a young apprentice, you have always shown great respect and commitment. You are a great professional and have a very promising future."`,
      rec3_role: "Tech Leader - Nexxera",
      rec3_text: `"I had the pleasure of being Tech Lead throughout Matheus's evolution at Nexxera. He has a great ability to learn and always seeks solutions with agility. A great professional who will have a brilliant future."`,
      contact_title: "Contact",
      contact_subtitle: "Let's talk! Get in touch with me through the channels below.",
      contact_email: "matheussilvano2005@gmail.com",
      contact_whatsapp: "(48) 99858-4035",
      contact_linkedin: "LinkedIn",
      footer_text: "© 2024 Matheus Silvano. All rights reserved."
    }
  };

  // --- LÓGICA PARA TROCA DE IDIOMA ---
  const languageSelector = document.getElementById("languageSelector");
  const flags = languageSelector.querySelectorAll(".lang-flag");

  function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    
    elementsToTranslate.forEach(el => {
      const key = el.dataset.translate;
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Atualiza o link de download do currículo
    const cvDownloader = document.getElementById("cvDownloader");
    if (cvDownloader) {
      const cvPath = lang === 'en' 
        ? 'english_cv_matheus_silvano_pereira.pdf' 
        : 'cv_matheus_silvano_pereira.pdf';
      cvDownloader.href = cvPath;
    }

    // Atualiza a classe 'active' nas bandeiras
    flags.forEach(flag => {
      if (flag.dataset.lang === lang) {
        flag.classList.add("active");
      } else {
        flag.classList.remove("active");
      }
    });

    localStorage.setItem("language", lang);
  }

  flags.forEach(flag => {
    flag.addEventListener("click", () => {
      const selectedLang = flag.dataset.lang;
      setLanguage(selectedLang);
    });
  });

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
    
    updateCarousel();
  }

  // --- INICIALIZAÇÃO DA PÁGINA ---
  const savedLang = localStorage.getItem("language") || (navigator.language.startsWith('en') ? 'en' : 'pt');
  setLanguage(savedLang);
});