document.addEventListener("DOMContentLoaded", () => {
  // --- OBJETO DE TRADUÇÕES ---
  const translations = {
    pt: {
      hero_subtitle: "Desenvolvedor IA & Back-end",
      hero_pitch: "Construo APIs, automações e sistemas com IA que reduzem trabalho manual e geram insights em produção.",
      nav_about: "Sobre",
      nav_tech: "Tecnologias",
      nav_projects: "Projetos",
      nav_experience: "Experiência",
      nav_recommendations: "Recomendações",
      nav_contact: "Contato",
      courses_button: "Cursos & Certificações",
      download_cv_button: "Baixar Currículo",
      about_me_scroll: "Sobre Mim",
      about_me_title: "Sobre Mim",
      about_me_p1: "Desenvolvedor de IA na Dígitro Tecnologia e estudante de Sistemas de Informação na UFSC. Atuo com pesquisa, desenvolvimento e avaliação de modelos de linguagem, focando em soluções que geram impacto real em produtos e clientes.",
      about_me_p2: "Tenho experiência em Python, FastAPI, machine learning, processamento de linguagem natural e visão computacional. Gosto de unir teoria e prática, construindo APIs, automações e ferramentas que ajudam pessoas e times a trabalharem melhor.",
      impact_title: "Impacto em números",
      impact_mooose: "+3.500 redações corrigidas, 1.400 usuários únicos, tempo médio de feedback em 38s.",
      impact_digitro: "Comparados +9 modelos LLM para diagnóstico VoIP; tempo de análise caiu de 12 min para 45s.",
      impact_cnpj: "+300 usuários na Web Store, reduzindo o tempo de copiar CNPJ formatado em ~20s por uso.",
      tech_scroll: "Tecnologias",
      tech_title: "Tecnologias",
      tech_description: "Experiência prática com APIs REST usando <strong>Python</strong>, <strong>FastAPI</strong> e <strong>Django</strong>. Domínio em versionamento com <strong>Git</strong>, integração com bancos de dados (<strong>PostgreSQL</strong> e <strong>Oracle</strong>), e conhecimento em contêineres com <strong>Docker</strong>. Familiaridade com práticas de DevOps e stacks de IA, incluindo <strong>Scikit-learn</strong>, <strong>TensorFlow</strong>, <strong>PyTorch</strong>, <strong>OpenCV</strong>, <strong>pandas</strong>, <strong>NumPy</strong>, <strong>LangChain</strong> e <strong>spaCy</strong>, aplicando técnicas de machine learning, deep learning, processamento de linguagem natural e visão computacional em projetos práticos.",
      projects_scroll: "Projetos",
      projects_title: "Projetos",
      projects_ia_title: "IA & LLMs",
      projects_backend_title: "Back-end & APIs",
      projects_tools_title: "Ferramentas & Extensões",
      project_cognita_desc: "Aplicação web feita em 24 horas, desenvolvida para a trilha de Educação do Hackathon AI Challenge da SECCOM UFSC + DOOOR. A suíte visa potencializar os estudos de alunos, oferecendo ferramentas inteligentes para correção de redações e consulta a materiais de estudo, tudo impulsionado por modelos de linguagem de ponta.",
      project_cognita_impact: "Entrega funcional em 24h de hackathon com correção inteligente de redações.",
      project_cognita_contrib: "Responsável pela arquitetura backend (FastAPI), orquestração e avaliação de prompts.",
      in_dev_button: "Em desenvolvimento — peça detalhes",
      project1_title: "Real Time Face Recognizer",
      project1_desc: "Um sistema local de reconhecimento facial com OpenCV e LBPH. Ideal para projetos de visão computacional que identificam rostos em tempo real.",
      project1_impact: "Reconhecimento em tempo real rodando localmente com baixo tempo de resposta.",
      project1_contrib: "Implementei o pipeline de captura, extração de features e identificação ao vivo com OpenCV.",
      view_gitlab_button: "Ver no GitLab",
      project2_title: "Toxic Content Detector",
      project2_desc: "Projeto de ML para detecção de comentários tóxicos com modelo treinado do zero em dataset próprio, usando NLP, regressão logística e TF-IDF.",
      project2_impact: "Modelo proprietário treinado do zero; pipeline dockerizado pronto para testes online.",
      project2_contrib: "Desenvolvi o pré-processamento, treino e deploy do modelo com avaliação contínua.",
      test_online_button: "Testar Online",
      view_github_button: "Ver no GitHub",
      view_mvp_button: "Abrir MVP",
      project3_title: "Fake Data API",
      project3_desc: "Uma API para gerar dados fictícios de pessoas e empresas. Ideal para testes com usuários anônimos.",
      project3_impact: "Geração de milhares de registros sintéticos em poucos segundos para testes.",
      project3_contrib: "Construi a API com FastAPI e autenticação, além da geração customizada de dados.",
      project4_title: "Removedor de Pontos do CNPJ",
      project4_desc: "Extensão para Chrome que simplifica a cópia de CNPJs formatados. Hoje com mais de 300 usuários.",
      project4_impact: "300+ usuários ativos e nota 5 estrelas na Web Store, economizando ~20s por cópia.",
      project4_contrib: "Criei a extensão end-to-end, UI simples e publicação na Chrome Web Store.",
      view_webstore_button: "Ver na Web Store",
      project_suaclinica_desc: "Plataforma inteligente desenvolvida no Techstars Startup Weekend Health Floripa 2025 para automatizar agendamentos e atendimentos em clínicas de saúde, reduzindo etapas operacionais e erros manuais. Backend em Python (FastAPI) integrado ao n8n para orquestrar fluxos automatizados, diminuindo tarefas repetitivas e aumentando a eficiência do time. Utiliza modelos da OpenAI para entender mensagens em linguagem natural — inclusive por voz — e realizar agendamentos automáticos via WhatsApp, tornando a jornada do paciente mais ágil, humanizada e orientada por dados.",
      project_suaclinica_impact: "Fluxo fim a fim entregue em 54h de hackathon com agendamento automático.",
      project_suaclinica_contrib: "Liderei o backend e integrações com n8n/OpenAI, garantindo fluxo fim a fim em 54h de hackathon.",
      project_promoove_desc: "HRTech focada em transformar processos de seleção e gestão de talentos por meio de IA. A solução nasce de um problema real: recrutamentos longos, pouca visibilidade interna e dificuldade de enxergar quem as pessoas realmente são além do currículo. Analisa histórias, competências e trajetórias de forma humanizada, gerando insights que apoiam decisões mais justas e eficientes. O projeto envolve pesquisa de mercado, desenho da solução, matriz RPU e prototipação com backend em Python/FastAPI e modelos da OpenAI.",
      project_promoove_impact: "MVP online para avaliação rápida de candidatos com análise assistida por IA.",
      project_promoove_contrib: "Modelei fluxos de avaliação, prototipei backend e automações de análise de histórias com LLMs.",
      project_mooose_desc: "Plataforma gratuita de correção de redações para o ENEM, focada em acessibilidade e impacto social. Permite que estudantes enviem redações em PDF, foto ou texto e recebam feedback detalhado por competência, utilizando modelos de linguagem para análise semântica e geração de comentários claros e didáticos. Inclui painel de acompanhamento, ranking de redações e integrações com ferramentas de analytics.",
      project_mooose_impact: "Centenas de redações corrigidas com feedback médio em menos de 1 min.",
      project_mooose_contrib: "Desenhei arquitetura, APIs e pipeline de correção automática, integrando LLMs e analytics.",
      open_mooose_button: "Acessar Mooose",
      experience_title: "Experiência Profissional",
      exp1_title: "Dígitro - Estagiário em Desenvolvimento de IA",
      exp1_date: "Abr 2025 - Atual",
      exp1_b1: "Avaliação e comparação de LLMs para diagnósticos de chamadas VoIP, reduzindo tempo de análise.",
      exp1_b2: "Construção de pipelines de experimentação com métricas de qualidade e automação.",
      exp1_b3: "Pesquisa e implementação de melhorias de prompts e fluxos para produtos internos.",
      exp2_title: "Nexxera - Operador de Implantação",
      exp2_date: "Dez 2023 - Abr 2025",
      exp2_b1: "Automatizei rotinas com Shell Script/Python para reduzir tempo de implantação.",
      exp2_b2: "Analisei layouts de arquivos para integrações financeiras e bancárias.",
      exp2_b3: "Atuei no suporte técnico a clientes garantindo estabilidade das entregas.",
      exp3_title: "Nexxera - Jovem Aprendiz (Implantação)",
      exp3_date: "Jan 2022 - Dez 2023",
      exp3_b1: "Apoio ao cadastro e onboarding de clientes em sistemas internos.",
      exp3_b2: "Suporte a implantações e testes funcionais.",
      exp3_b3: "Aprendizado de processos de negócio e melhores práticas de atendimento.",
      recommendations_title: "Recomendações",
      rec1_role: "Presidente e fundador do Grupo Nexxees",
      rec1_text: `"Matheus, fico muito feliz pela tua trajetória e por ter contribuído com o início da tua carreira. Grandes talentos seguirão novos caminhos, e o mundo oferece grandes oportunidades. Parabéns, siga em frente e conquiste teus sonhos."`,
      rec2_role: "Gerente de Implantação - Nexxera",
      rec2_text: `"Obrigada pelo tempo que esteve conosco. Desde o seu início como jovem aprendiz, você sempre demonstrou muito respeito e comprometimento. Você é um grande profissional e tem um futuro muito promissor."`,
      rec3_role: "Tech Leader - Nexxera",
      rec3_text: `"Tive o prazer de ser Tech Lead durante toda a evolução do Matheus na Nexxera. Possui muita facilidade de aprendizagem e sempre busca soluções com agilidade. Um grande profissional que terá um futuro brilhante."`,
      contact_title: "Contato",
      contact_subtitle: "Vamos conversar! Entre em contato comigo através dos canais abaixo.",
      contact_email: "matheussilvano2005@gmail.com",
      contact_whatsapp: "(48) 99858-4035",
      contact_linkedin: "LinkedIn",
      footer_text: "© 2024 Matheus Silvano. Todos os direitos reservados.",
      interview_ia_button: "Entreviste minha IA",
      radar_title: "Stack Atual",
      radar_proficient: "Tenho Proficiência",
      radar_learning: "Estudando Agora",
      radar_on_radar: "No Radar",
      courses_page_title: "Cursos & Certificações",
      courses_page_subtitle: "Uma visão geral das trilhas de estudo que fortalecem minha base",
      courses_scroll: "Ver cursos",
      back_to_portfolio_button: "← Voltar ao portfólio",
      courses_main_title: "Formações & Trilhas",
      cert_featured_label: "Destaques em IA",
      cert_featured_title: "Certificações",
      cert_featured_desc: "Badges verificados em IA generativa e uso responsável, com links diretos para validação.",
      validate_cert_button: "Validar certificação",
      courses_intro: "Abaixo estão alguns dos cursos mais relevantes que concluí. Cada card traz o nome do curso, instituição, ano e, quando disponível, o certificado anexo.",
      courses_search_label: "Buscar cursos e certificações",
      courses_search_placeholder: "Buscar por curso, instituição ou ano",
      courses_search_empty: "Nenhum curso encontrado para sua busca.",
      courses_python_title: "Python & Programação Geral",
      courses_ai_title: "Inteligência Artificial & Machine Learning",
      courses_db_title: "Banco de Dados & SQL",
      courses_web_title: "Desenvolvimento Web & JavaScript",
      courses_security_title: "Segurança da Informação",
      courses_linux_title: "Linux & Shell Script",
      courses_version_control_title: "Controle de Versão (Git, GitHub, GitLab)",
      courses_devops_title: "Containerização & DevOps",
      courses_awards_title: "Reconhecimentos & Prêmios",
      featured_projects_title: "Projetos em destaque",
      featured_mooose: "Correção automática de redações com LLMs, centenas de correções e painel para estudantes.",
      featured_promoove: "MVP em produção para avaliação de talentos com IA, focado em histórias e competências.",
      featured_toxic: "Modelo treinado do zero em dataset de comentários, com pipeline de NLP e deploy em Docker.",
      goal_title: "O que estou buscando",
      goal_text: "Hoje busco oportunidades em back-end / IA aplicada (LLMs, automação, MLOps) em times que queiram testar rápido e colocar em produção.",
      contact_fab_label: "Fale comigo",
      institution_label: "Instituição:",
      year_label: "Ano:",
      view_certificate_button: "Ver certificado",
      view_mod1_button: "Ver Mod 01",
      view_mod2_button: "Ver Mod 02",
      courses_recruiter_note: "Se você é recrutador(a), os cursos mais alinhados para vagas de back-end/IA são:",
      courses_recruiter_item1: "MLOps: Implantação e Operação de Modelos",
      courses_recruiter_item2: "LangChain: Agentes de IA e Apps com LLMs",
      courses_recruiter_item3: "GitLab CI: Pipelines e Continuous Delivery",
      courses_recruiter_item4: "Banco de Dados/SQL com PostgreSQL",
      courses_recruiter_item5: "Docker para Desenvolvedores",
      course_star_label: "⭐ Mais relevante",
      chat_title: "Assistente Virtual",
      chat_status: "Online",
      chat_intro: "Olá! 👋 Sou o assistente virtual do Matheus. Posso te mostrar rápido os cursos e certificações mais relevantes para a vaga.",
      quick_reply_ia: "Quais projetos mostram melhor sua experiência com back-end?",
      quick_reply_python: "Como você usou LLMs na prática?",
      quick_reply_devops: "Você já trabalhou com Docker/MLOps em produção?",
      chat_input_placeholder: "Digite sua pergunta...",
      chat_cta_bubble: "Converse comigo!",
      chat_initial_message: "Olá! 👋 Posso te indicar projetos que mostram bem minha experiência com IA, back-end e MLOps, conforme o que você estiver buscando.",
      chat_q1: "Quais projetos mostram melhor sua experiência com back-end?",
      chat_q2: "Como você usou LLMs na prática?",
      chat_q3: "Você já trabalhou com Docker/MLOps em produção?"
    },
    en: {
      hero_subtitle: "AI & Back-end Developer",
      hero_pitch: "I build APIs, automations, and AI-driven systems that cut manual work and deliver insights in production.",
      nav_about: "About",
      nav_tech: "Technologies",
      nav_projects: "Projects",
      nav_experience: "Experience",
      nav_recommendations: "Recommendations",
      nav_contact: "Contact",
      courses_button: "Courses & Certifications",
      download_cv_button: "Download CV",
      about_me_scroll: "About Me",
      about_me_title: "About Me",
      about_me_p1: "AI Developer at Dígitro Tecnologia and Information Systems student at UFSC. I research, build, and evaluate language models focused on solutions that create real impact for products and customers.",
      about_me_p2: "Experience with Python, FastAPI, machine learning, natural language processing, and computer vision. I like to bridge theory and practice, building APIs, automations, and tools that help people and teams work better.",
      impact_title: "Impact in numbers",
      impact_mooose: "3,500+ essays graded, 1,400 unique users, average feedback time in 38s.",
      impact_digitro: "Benchmarked 9+ LLMs for VoIP diagnostics; analysis time dropped from 12 min to 45s.",
      impact_cnpj: "300+ Web Store users, cutting the time to copy formatted CNPJ by ~20s per use.",
      tech_scroll: "Technologies",
      tech_title: "Technologies",
      tech_description: "Hands-on experience with REST APIs using <strong>Python</strong>, <strong>FastAPI</strong>, and <strong>Django</strong>. Skilled in version control with <strong>Git</strong>, database integration (<strong>PostgreSQL</strong> and <strong>Oracle</strong>), and containerization with <strong>Docker</strong>. Familiar with DevOps practices and AI stacks including <strong>Scikit-learn</strong>, <strong>TensorFlow</strong>, <strong>PyTorch</strong>, <strong>OpenCV</strong>, <strong>pandas</strong>, <strong>NumPy</strong>, <strong>LangChain</strong>, and <strong>spaCy</strong>, applying machine learning, deep learning, NLP, and computer vision techniques in practical projects.",
      projects_scroll: "Projects",
      projects_title: "Projects",
      projects_ia_title: "AI & LLMs",
      projects_backend_title: "Back-end & APIs",
      projects_tools_title: "Tools & Extensions",
      project_cognita_desc: "Web application built in 24 hours for the Education track of the AI Challenge Hackathon (SECCOM UFSC + DOOOR). The suite boosts students' studies with smart tools for essay correction and study material lookup, all powered by state-of-the-art language models.",
      project_cognita_impact: "Functional delivery in a 24h hackathon with AI-powered essay correction.",
      project_cognita_contrib: "Owned backend architecture (FastAPI), orchestration, and prompt evaluation.",
      coming_soon_button: "Coming soon",
      in_dev_button: "In development — ask for details",
      project1_title: "Real Time Face Recognizer",
      project1_desc: "A local face recognition system with OpenCV and LBPH. Ideal for computer vision projects that identify faces in real time.",
      project1_impact: "Real-time recognition running locally with low response time.",
      project1_contrib: "Implemented the live pipeline for capture, feature extraction, and identification with OpenCV.",
      view_gitlab_button: "View on GitLab",
      project2_title: "Toxic Content Detector",
      project2_desc: "ML project for detecting toxic comments with a model trained from scratch on a custom dataset using NLP, logistic regression, and TF-IDF.",
      project2_impact: "Proprietary model trained from scratch; Dockerized pipeline ready for online tests.",
      project2_contrib: "Built preprocessing, training, and deployment with continuous evaluation.",
      test_online_button: "Test Online",
      view_github_button: "View on GitHub",
      view_mvp_button: "Open MVP",
      project3_title: "Fake Data API",
      project3_desc: "An API that generates fictitious data about people and companies. Ideal for tests with anonymous users.",
      project3_impact: "Generates thousands of synthetic records in seconds for testing.",
      project3_contrib: "Built the FastAPI service with auth plus customizable data generation.",
      project4_title: "CNPJ Dot Remover",
      project4_desc: "Chrome extension that simplifies copying formatted CNPJs. Currently used by over 300 people.",
      project4_impact: "300+ active users and 5-star rating in the Web Store, saving ~20s per copy.",
      project4_contrib: "Created the extension end-to-end, lightweight UI, and Chrome Web Store publish.",
      view_webstore_button: "View on Web Store",
      project_suaclinica_desc: "Smart platform built at Techstars Startup Weekend Health Floripa 2025 to automate scheduling and service in health clinics, reducing operational steps and manual errors. Python (FastAPI) backend integrated with n8n to orchestrate automated flows, cutting repetitive tasks and boosting team efficiency. Uses OpenAI models to understand natural-language and voice messages and make automatic WhatsApp bookings, making the patient journey faster, more human, and data-driven.",
      project_suaclinica_impact: "End-to-end flow delivered in 54h of hackathon with automatic scheduling.",
      project_suaclinica_contrib: "Led backend and n8n/OpenAI integrations, delivering end-to-end flow in 54 hours.",
      project_promoove_desc: "HRTech focused on transforming talent selection and management through AI. It tackles real pains: long hiring cycles, low internal visibility, and difficulty seeing people beyond the resume. It analyzes stories, skills, and journeys in a human way, generating insights for fairer and more efficient decisions. The project covers market research, solution design, RPU matrix, and prototyping with a Python/FastAPI backend and OpenAI models.",
      project_promoove_impact: "Online MVP for quick candidate assessment with AI-assisted analysis.",
      project_promoove_contrib: "Modeled evaluation flows, prototyped backend, and automated story analysis with LLMs.",
      project_mooose_desc: "Free essay grading platform for the ENEM focused on accessibility and social impact. Students can send essays in PDF, photo, or text and receive detailed feedback per competency, using language models for semantic analysis and clear, didactic comments. Includes tracking dashboard, essay ranking, and integrations with analytics tools.",
      project_mooose_impact: "Hundreds of essays graded with average feedback under 1 minute.",
      project_mooose_contrib: "Designed architecture, APIs, and automated grading pipeline, integrating LLMs and analytics.",
      open_mooose_button: "Open Mooose",
      experience_title: "Professional Experience",
      exp1_title: "Dígitro - AI Development Intern",
      exp1_date: "Apr 2025 - Present",
      exp1_b1: "Evaluated and compared LLMs for VoIP call diagnostics, cutting analysis time.",
      exp1_b2: "Built experimentation pipelines with quality metrics and automation.",
      exp1_b3: "Researched and implemented prompt/workflow improvements for internal products.",
      exp2_title: "Nexxera - Implementation Operator",
      exp2_date: "Dec 2023 - Apr 2025",
      exp2_b1: "Automated routines with Shell Script/Python to reduce implementation time.",
      exp2_b2: "Analyzed file layouts for financial/banking integrations.",
      exp2_b3: "Provided technical support to clients ensuring delivery stability.",
      exp3_title: "Nexxera - Young Apprentice (Implementation)",
      exp3_date: "Jan 2022 - Dec 2023",
      exp3_b1: "Supported client onboarding and data entry in internal systems.",
      exp3_b2: "Assisted deployments and functional testing.",
      exp3_b3: "Learned business processes and customer support best practices.",
      recommendations_title: "Recommendations",
      rec1_role: "President and founder of the Nexxees Group",
      rec1_text: `"Matheus, I am very happy about your journey and to have contributed to the start of your career. Great talents will follow new paths, and the world offers great opportunities. Congratulations—keep moving forward and conquer your dreams."`,
      rec2_role: "Implementation Manager - Nexxera",
      rec2_text: `"Thank you for the time you spent with us. Since your start as a young apprentice, you have always shown great respect and commitment. You are an excellent professional and have a very promising future."`,
      rec3_role: "Tech Leader - Nexxera",
      rec3_text: `"I had the pleasure of being Tech Lead throughout Matheus's evolution at Nexxera. He learns fast and always looks for solutions with agility. A great professional who will have a brilliant future."`,
      contact_title: "Contact",
      contact_subtitle: "Let's talk! Reach out through the channels below.",
      contact_email: "matheussilvano2005@gmail.com",
      contact_whatsapp: "(48) 99858-4035",
      contact_linkedin: "LinkedIn",
      footer_text: "© 2024 Matheus Silvano. All rights reserved.",
      interview_ia_button: "Interview my AI",
      radar_title: "Current Stack",
      radar_proficient: "Proficient",
      radar_learning: "Learning Now",
      radar_on_radar: "On My Radar",
      courses_page_title: "Courses & Certifications",
      courses_page_subtitle: "An overview of the study paths that strengthen my foundation in Python, AI, data, back-end, DevOps, and security.",
      courses_scroll: "View courses",
      back_to_portfolio_button: "← Back to portfolio",
      courses_main_title: "Education & Learning Paths",
      cert_featured_label: "AI Highlights",
      cert_featured_title: "Certifications",
      cert_featured_desc: "Verified badges in generative AI and responsible use, with direct validation links.",
      validate_cert_button: "Verify credential",
      courses_intro: "Here are some of the most relevant courses I have completed. Each card shows the course name, institution, year, and certificate when available.",
      courses_search_label: "Search courses and certifications",
      courses_search_placeholder: "Search by course, institution, or year",
      courses_search_empty: "No courses match your search.",
      courses_python_title: "Python & General Programming",
      courses_ai_title: "Artificial Intelligence & Machine Learning",
      courses_db_title: "Databases & SQL",
      courses_web_title: "Web Development & JavaScript",
      courses_security_title: "Information Security",
      courses_linux_title: "Linux & Shell Script",
      courses_version_control_title: "Version Control (Git, GitHub, GitLab)",
      courses_devops_title: "Containerization & DevOps",
      courses_awards_title: "Awards & Recognitions",
      featured_projects_title: "Featured projects",
      featured_mooose: "LLM-powered essay grading with hundreds of corrections and a student dashboard.",
      featured_promoove: "Production MVP to assess talent with AI, focusing on stories and skills.",
      featured_toxic: "Model trained from scratch on comment data, with NLP pipeline and Docker deploy.",
      goal_title: "What I’m looking for",
      goal_text: "I’m seeking roles in back-end / applied AI (LLMs, automation, MLOps) with teams that want to test fast and ship to production.",
      contact_fab_label: "Talk to me",
      institution_label: "Institution:",
      year_label: "Year:",
      view_certificate_button: "View certificate",
      view_mod1_button: "View Module 01",
      view_mod2_button: "View Module 02",
      courses_recruiter_note: "If you’re a recruiter, the most relevant courses for back-end/AI roles are:",
      courses_recruiter_item1: "MLOps: Deploying and Operating ML Models",
      courses_recruiter_item2: "LangChain: AI Agents and LLM Apps",
      courses_recruiter_item3: "GitLab CI: Pipelines and Continuous Delivery",
      courses_recruiter_item4: "Databases/SQL with PostgreSQL",
      courses_recruiter_item5: "Docker for Developers",
      course_star_label: "⭐ Most relevant",
      chat_title: "Virtual Assistant",
      chat_status: "Online",
      chat_intro: "Hi! 👋 I'm Matheus's assistant. I can quickly surface the most relevant courses and certs for the role.",
      quick_reply_ia: "Which projects best show your back-end experience?",
      quick_reply_python: "How have you used LLMs in practice?",
      quick_reply_devops: "Have you run Docker/MLOps in production?",
      chat_input_placeholder: "Type your question...",
      chat_cta_bubble: "Talk to me!",
      chat_initial_message: "Hi! 👋 I can point you to projects that showcase my AI, back-end, and MLOps experience based on what you need.",
      chat_q1: "Which projects best show your back-end experience?",
      chat_q2: "How have you used LLMs in practice?",
      chat_q3: "Have you run Docker/MLOps in production?"
    },
    es: {
      hero_subtitle: "Desarrollador de IA y Back-end",
      hero_pitch: "Construyo APIs, automatizaciones y sistemas con IA que reducen trabajo manual y generan insights en producción.",
      nav_about: "Sobre mí",
      nav_tech: "Tecnologías",
      nav_projects: "Proyectos",
      nav_experience: "Experiencia",
      nav_recommendations: "Recomendaciones",
      nav_contact: "Contacto",
      courses_button: "Cursos y Certificaciones",
      download_cv_button: "Descargar CV",
      about_me_scroll: "Sobre mí",
      about_me_title: "Sobre mí",
      about_me_p1: "Desarrollador de IA en Dígitro Tecnologia y estudiante de Sistemas de Información en la UFSC. Trabajo en investigación, desarrollo y evaluación de modelos de lenguaje, enfocándome en soluciones que generen impacto real en productos y clientes.",
      about_me_p2: "Tengo experiencia con Python, FastAPI, aprendizaje automático, procesamiento de lenguaje natural y visión por computador. Me gusta unir teoría y práctica, construyendo APIs, automatizaciones y herramientas que ayuden a personas y equipos a trabajar mejor.",
      impact_title: "Impacto en números",
      impact_mooose: "3.500+ redacciones corregidas, 1.400 usuarios únicos, feedback promedio en 38s.",
      impact_digitro: "Comparados 9+ modelos LLM para diagnóstico VoIP; tiempo de análisis bajó de 12 min a 45s.",
      impact_cnpj: "300+ usuarios en la Web Store, reduciendo el tiempo de copiar CNPJ formateado en ~20s por uso.",
      tech_scroll: "Tecnologías",
      tech_title: "Tecnologías",
      tech_description: "Experiencia práctica con APIs REST usando <strong>Python</strong>, <strong>FastAPI</strong> y <strong>Django</strong>. Dominio de control de versiones con <strong>Git</strong>, integración con bases de datos (<strong>PostgreSQL</strong> y <strong>Oracle</strong>) y contenedores con <strong>Docker</strong>. Familiaridad con prácticas de DevOps y stacks de IA, incluidos <strong>Scikit-learn</strong>, <strong>TensorFlow</strong>, <strong>PyTorch</strong>, <strong>OpenCV</strong>, <strong>pandas</strong>, <strong>NumPy</strong>, <strong>LangChain</strong> y <strong>spaCy</strong>, aplicando técnicas de machine learning, deep learning, PLN y visión por computador en proyectos prácticos.",
      projects_scroll: "Proyectos",
      projects_title: "Proyectos",
      projects_ia_title: "IA & LLMs",
      projects_backend_title: "Back-end & APIs",
      projects_tools_title: "Herramientas & Extensiones",
      project_cognita_desc: "Aplicación web creada en 24 horas para la pista de Educación del Hackathon AI Challenge (SECCOM UFSC + DOOOR). La suite potencia los estudios de los alumnos con herramientas inteligentes para corregir redacciones y consultar materiales, todo impulsado por modelos de lenguaje de última generación.",
      project_cognita_impact: "Entrega funcional en 24h de hackathon con corrección inteligente de redacciones.",
      project_cognita_contrib: "Responsable de la arquitectura backend (FastAPI), orquestación y evaluación de prompts.",
      in_dev_button: "En desarrollo — pide detalles",
      project1_title: "Real Time Face Recognizer",
      project1_desc: "Sistema local de reconocimiento facial con OpenCV y LBPH. Ideal para proyectos de visión por computador que identifican rostros en tiempo real.",
      project1_impact: "Reconocimiento en tiempo real corriendo localmente con baja latencia.",
      project1_contrib: "Implementé el pipeline en vivo de captura, extracción de features e identificación con OpenCV.",
      view_gitlab_button: "Ver en GitLab",
      project2_title: "Toxic Content Detector",
      project2_desc: "Proyecto de ML para detectar comentarios tóxicos con un modelo entrenado desde cero en un dataset propio usando PLN, regresión logística y TF-IDF.",
      project2_impact: "Modelo propio entrenado desde cero; pipeline dockerizado listo para pruebas online.",
      project2_contrib: "Desarrollé el preprocesamiento, entrenamiento y deploy del modelo con evaluación continua.",
      test_online_button: "Probar en línea",
      view_github_button: "Ver en GitHub",
      view_mvp_button: "Abrir MVP",
      project3_title: "Fake Data API",
      project3_desc: "API para generar datos ficticios de personas y empresas. Ideal para pruebas con usuarios anónimos.",
      project3_impact: "Genera miles de registros sintéticos en segundos para pruebas.",
      project3_contrib: "Construí la API con FastAPI y autenticación, además de la generación personalizada de datos.",
      project4_title: "Removedor de Puntos del CNPJ",
      project4_desc: "Extensión para Chrome que simplifica copiar CNPJs formateados. Actualmente con más de 300 usuarios.",
      project4_impact: "300+ usuarios activos y nota 5 estrellas en la Web Store, ahorrando ~20s por copia.",
      project4_contrib: "Creé la extensión de punta a punta, UI simple y publicación en la Chrome Web Store.",
      view_webstore_button: "Ver en la Web Store",
      project_suaclinica_desc: "Plataforma inteligente creada en el Techstars Startup Weekend Health Floripa 2025 para automatizar turnos y atenciones en clínicas de salud, reduciendo pasos operativos y errores manuales. Backend en Python (FastAPI) integrado con n8n para orquestar flujos automatizados, disminuyendo tareas repetitivas y aumentando la eficiencia del equipo. Usa modelos de OpenAI para entender mensajes en lenguaje natural —incluso por voz— y realizar agendamientos automáticos vía WhatsApp, haciendo el recorrido del paciente más ágil, humano y orientado por datos.",
      project_suaclinica_impact: "Flujo de punta a punta entregado en 54h de hackathon con agendamiento automático.",
      project_suaclinica_contrib: "Lideré el backend e integraciones con n8n/OpenAI, entregando el flujo completo en 54h de hackathon.",
      project_promoove_desc: "HRTech enfocada en transformar selección y gestión de talentos mediante IA. Resuelve problemas reales: procesos largos, poca visibilidad interna y dificultad de ver a las personas más allá del currículum. Analiza historias, competencias y trayectorias de forma humanizada, generando insights para decisiones más justas y eficientes. El proyecto abarca investigación de mercado, diseño de solución, matriz RPU y prototipado con backend en Python/FastAPI y modelos de OpenAI.",
      project_promoove_impact: "MVP online para evaluar candidatos rápidamente con análisis asistido por IA.",
      project_promoove_contrib: "Modelé flujos de evaluación, prototipé backend y automatizaciones de análisis de historias con LLMs.",
      project_mooose_desc: "Plataforma gratuita de corrección de redacciones para el ENEM, enfocada en accesibilidad e impacto social. Permite que los estudiantes envíen redacciones en PDF, foto o texto y reciban feedback detallado por competencia, usando modelos de lenguaje para análisis semántico y comentarios claros y didácticos. Incluye panel de seguimiento, ranking de redacciones e integraciones con herramientas de analítica.",
      project_mooose_impact: "Centenas de redacciones corregidas con feedback promedio menor a 1 minuto.",
      project_mooose_contrib: "Diseñé la arquitectura, APIs y pipeline de corrección automática, integrando LLMs y analítica.",
      open_mooose_button: "Abrir Mooose",
      experience_title: "Experiencia Profesional",
      exp1_title: "Dígitro - Pasante en Desarrollo de IA",
      exp1_date: "Abr 2025 - Actual",
      exp1_b1: "Evaluación y comparación de LLMs para diagnósticos de llamadas VoIP, reduciendo tiempo de análisis.",
      exp1_b2: "Construcción de pipelines de experimentación con métricas de calidad y automatización.",
      exp1_b3: "Investigación e implementación de mejoras de prompts y flujos para productos internos.",
      exp2_title: "Nexxera - Operador de Implementación",
      exp2_date: "Dic 2023 - Abr 2025",
      exp2_b1: "Automaticé rutinas con Shell Script/Python para reducir el tiempo de implantación.",
      exp2_b2: "Analicé layouts de archivos para integraciones financieras y bancarias.",
      exp2_b3: "Di soporte técnico a clientes garantizando estabilidad en las entregas.",
      exp3_title: "Nexxera - Joven Aprendiz (Implementación)",
      exp3_date: "Ene 2022 - Dic 2023",
      exp3_b1: "Apoyo al registro y onboarding de clientes en sistemas internos.",
      exp3_b2: "Soporte a implantaciones y pruebas funcionales.",
      exp3_b3: "Aprendizaje de procesos de negocio y buenas prácticas de atención.",
      recommendations_title: "Recomendaciones",
      rec1_role: "Presidente y fundador del Grupo Nexxees",
      rec1_text: `"Matheus, me alegra mucho tu trayectoria y haber contribuido al inicio de tu carrera. Los grandes talentos seguirán nuevos caminos y el mundo ofrece grandes oportunidades. Felicitaciones, sigue adelante y conquista tus sueños."`,
      rec2_role: "Gerente de Implementación - Nexxera",
      rec2_text: `"Gracias por el tiempo que estuviste con nosotros. Desde tu inicio como aprendiz siempre mostraste mucho respeto y compromiso. Eres un gran profesional y tienes un futuro muy prometedor."`,
      rec3_role: "Tech Leader - Nexxera",
      rec3_text: `"Tuve el placer de ser Tech Lead durante toda la evolución de Matheus en Nexxera. Aprende con mucha facilidad y siempre busca soluciones con agilidad. Un gran profesional con un futuro brillante."`,
      contact_title: "Contacto",
      contact_subtitle: "Hablemos. Ponte en contacto conmigo a través de los canales abajo.",
      contact_email: "matheussilvano2005@gmail.com",
      contact_whatsapp: "(48) 99858-4035",
      contact_linkedin: "LinkedIn",
      footer_text: "© 2024 Matheus Silvano. Todos los derechos reservados.",
      interview_ia_button: "Entrevista a mi IA",
      radar_title: "Stack Actual",
      radar_proficient: "Tengo Dominio",
      radar_learning: "Estudiando Ahora",
      radar_on_radar: "En el Radar",
      courses_page_title: "Cursos y Certificaciones",
      courses_page_subtitle: "Una vista general de las rutas de estudio que fortalecen mi base en Python, IA, datos, back-end, DevOps y seguridad.",
      courses_scroll: "Ver cursos",
      back_to_portfolio_button: "← Volver al portafolio",
      courses_main_title: "Formaciones y Rutas",
      cert_featured_label: "Destacados en IA",
      cert_featured_title: "Certificaciones",
      cert_featured_desc: "Insignias verificadas en IA generativa y uso responsable, con enlaces directos para validación.",
      validate_cert_button: "Validar certificación",
      courses_intro: "A continuación están algunos de los cursos más relevantes que concluí. Cada tarjeta trae el nombre del curso, institución, año y, cuando disponible, el certificado.",
      courses_search_label: "Buscar cursos y certificaciones",
      courses_search_placeholder: "Buscar por curso, institución o año",
      courses_search_empty: "Ningún curso coincide con tu búsqueda.",
      courses_python_title: "Python y Programación General",
      courses_ai_title: "Inteligencia Artificial y Machine Learning",
      courses_db_title: "Bases de Datos y SQL",
      courses_web_title: "Desarrollo Web y JavaScript",
      courses_security_title: "Seguridad de la Información",
      courses_linux_title: "Linux y Shell Script",
      courses_version_control_title: "Control de Versiones (Git, GitHub, GitLab)",
      courses_devops_title: "Contenerización y DevOps",
      courses_awards_title: "Reconocimientos y Premios",
      featured_projects_title: "Proyectos destacados",
      featured_mooose: "Corrección de redacciones con LLMs, cientos de correcciones y panel para estudiantes.",
      featured_promoove: "MVP en producción para evaluar talentos con IA, enfocado en historias y competencias.",
      featured_toxic: "Modelo entrenado desde cero en dataset de comentarios, con pipeline de PLN y deploy en Docker.",
      goal_title: "Lo que estoy buscando",
      goal_text: "Busco oportunidades en back-end / IA aplicada (LLMs, automatización, MLOps) en equipos que quieran probar rápido y poner en producción.",
      contact_fab_label: "Háblame",
      institution_label: "Institución:",
      year_label: "Año:",
      view_certificate_button: "Ver certificado",
      view_mod1_button: "Ver Mód 01",
      view_mod2_button: "Ver Mód 02",
      courses_recruiter_note: "Si eres reclutador(a), los cursos más alineados para roles de back-end/IA son:",
      courses_recruiter_item1: "MLOps: Implantación y Operación de Modelos",
      courses_recruiter_item2: "LangChain: Agentes de IA y Apps con LLMs",
      courses_recruiter_item3: "GitLab CI: Pipelines y Continuous Delivery",
      courses_recruiter_item4: "Bases de Datos/SQL con PostgreSQL",
      courses_recruiter_item5: "Docker para Desarrolladores",
      course_star_label: "⭐ Más relevante",
      chat_title: "Asistente Virtual",
      chat_status: "En línea",
      chat_intro: "¡Hola! 👋 Soy el asistente de Matheus. Puedo mostrar rápido los cursos y certificaciones más relevantes para la vacante.",
      quick_reply_ia: "¿Qué proyectos muestran mejor tu experiencia en back-end?",
      quick_reply_python: "¿Cómo usaste LLMs en la práctica?",
      quick_reply_devops: "¿Ya trabajaste con Docker/MLOps en producción?",
      chat_input_placeholder: "Escribe tu pregunta...",
      chat_cta_bubble: "¡Habla conmigo!",
      chat_initial_message: "¡Hola! 👋 Puedo señalar proyectos que muestran bien mi experiencia con IA, back-end y MLOps según lo que busques.",
      chat_q1: "¿Qué proyectos muestran mejor tu experiencia en back-end?",
      chat_q2: "¿Cómo usaste LLMs en la práctica?",
      chat_q3: "¿Ya trabajaste con Docker/MLOps en producción?"
    }
  };

  // --- LÓGICA PARA TROCA DE IDIOMA ---
  const languageSelector = document.getElementById("languageSelector");
  const flags = languageSelector.querySelectorAll(".lang-flag");

  function setLanguage(lang) {
    const chosenLang = translations[lang] ? lang : "pt";
    document.documentElement.lang = chosenLang;
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    
    elementsToTranslate.forEach(el => {
      const key = el.dataset.translate;
      const translatedText = translations[chosenLang]?.[key];
      if (!translatedText) return;

      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translatedText;
      } else {
        el.innerHTML = translatedText;
      }
    });

    const cvDownloader = document.getElementById("cvDownloader");
    if (cvDownloader) {
      const cvPath = chosenLang === "en" 
        ? "english_cv_matheus_silvano_pereira.pdf" 
        : "cv_matheus_silvano_pereira.pdf";
      cvDownloader.href = cvPath;
    }

    flags.forEach(flag => {
      if (flag.dataset.lang === chosenLang) {
        flag.classList.add("active");
      } else {
        flag.classList.remove("active");
      }
    });

    localStorage.setItem("language", chosenLang);
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

  // --- LÓGICA PARA O CARROSSEL DE RECOMENDAÇÕES ---
  const recommendationsCarousel = document.querySelector("#recommendations .carousel-container");
  if (recommendationsCarousel) {
    const track = recommendationsCarousel.querySelector(".carousel-track");
    const nextButton = recommendationsCarousel.querySelector(".carousel-button.next");
    const prevButton = recommendationsCarousel.querySelector(".carousel-button.prev");
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
  const browserLang = navigator.language ? navigator.language.slice(0, 2).toLowerCase() : "pt";
  const defaultLang = ["pt", "en", "es"].includes(browserLang) ? browserLang : "pt";
  const savedLang = localStorage.getItem("language") || defaultLang;
  setLanguage(savedLang);

  // --- LÓGICA PARA ANIMAÇÃO DE SCROLL (REVEAL ON SCROLL) ---
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 
  });
  revealElements.forEach(element => {
    observer.observe(element);
  });

  // --- LÓGICA PARA EFEITO DE DIGITAÇÃO ---
  function typeWriter(element) {
    if (!element) return;
    const key = element.getAttribute('data-translate');
    const lang = localStorage.getItem("language") || 'pt';
    const text = translations[lang][key] || '';
    
    element.setAttribute('data-translate-text', text);
    const textArray = text.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
      setTimeout(() => {
        element.innerHTML += letter === ' ' ? '&nbsp;' : letter;
      }, 90 * i);
    });
  }
  const heroSubtitle = document.querySelector('.hero-subtitle');
  typeWriter(heroSubtitle);
  
  // --- LÓGICA PARA EFEITO 3D NOS CARDS ---
  const projectCards = document.querySelectorAll('.card');
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;
      
      card.style.transform = `translateY(-10px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      setTimeout(() => {
        card.style.transform = '';
      }, 400);
    });
  });

  // --- LÓGICA DO CHATBOT ---
  const chatContainer = document.querySelector('.chat-container');
  const chatOpenBtn = document.querySelector('.chat-open-btn');
  const chatCloseBtn = document.querySelector('.chat-close-btn');
  const chatFullscreenBtn = document.querySelector('.chat-fullscreen-btn');
  const chatBox = document.getElementById('chat-box');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');
  const topNav = document.querySelector('.top-nav');

  let threadId = null;
  const apiUrl = 'https://api.matheussilvano.dev/ask';
  // const apiUrl = 'http://127.0.0.1:8000/ask';

  if (topNav) {
    document.body.classList.add('has-top-nav');
  }

  chatBox.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-reply-btn')) {
        const question = e.target.innerText;
        handleSendMessage(question);
    }
  });

  chatOpenBtn.addEventListener('click', () => chatContainer.classList.toggle('open'));
  chatCloseBtn.addEventListener('click', () => chatContainer.classList.remove('open'));
  chatFullscreenBtn.addEventListener('click', () => {
      chatContainer.classList.toggle('fullscreen');
      const icon = chatFullscreenBtn.querySelector('i');
      if (chatContainer.classList.contains('fullscreen')) {
          icon.classList.remove('fa-expand');
          icon.classList.add('fa-compress');
      } else {
          icon.classList.remove('fa-compress');
          icon.classList.add('fa-expand');
      }
  });
  
  const addMessage = (content, sender) => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('chat-message', sender);
      
      let formattedMessage = content
          .replace(/\n/g, '<br>')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
      
      messageElement.innerHTML = `<p>${formattedMessage}</p>`;
      chatBox.appendChild(messageElement);
      chatBox.scrollTop = chatBox.scrollHeight;
  };
  
  const showTypingIndicator = () => {
      const typingElement = document.createElement('div');
      typingElement.classList.add('chat-message', 'assistant', 'typing-indicator');
      typingElement.innerHTML = '<span></span><span></span><span></span>';
      chatBox.appendChild(typingElement);
      chatBox.scrollTop = chatBox.scrollHeight;
  };

  const handleSendMessage = async (questionOverride = null) => {
      const question = questionOverride || userInput.value.trim();
      if (!question) return;

      addMessage(question, 'user');
      
      if (!questionOverride) {
          userInput.value = '';
      }

      const quickRepliesContainer = document.querySelector('.quick-replies');
      if (quickRepliesContainer) {
          quickRepliesContainer.remove();
      }

      showTypingIndicator();

      let assistantMessageParagraph = null;

      try {
          const response = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ question: question, thread_id: threadId }),
          });

          if (!response.ok) throw new Error('Erro na API: ' + response.statusText);

          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let fullResponse = '';

          while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              
              const chunk = decoder.decode(value, { stream: true });
              const lines = chunk.split('\n\n').filter(line => line.trim() !== '');

              for (const line of lines) {
                  if (line.startsWith('data:')) {
                      const dataStr = line.substring(5);
                      try {
                          const data = JSON.parse(dataStr);

                          if (data.event === 'thread_id') {
                              threadId = data.data;
                          } else if (data.event === 'text_chunk') {
                              if (!assistantMessageParagraph) {
                                  chatBox.querySelector('.typing-indicator')?.remove();
                                  const msgElement = document.createElement('div');
                                  msgElement.classList.add('chat-message', 'assistant');
                                  assistantMessageParagraph = document.createElement('p');
                                  msgElement.appendChild(assistantMessageParagraph);
                                  chatBox.appendChild(msgElement);
                              }
                              fullResponse += data.data;
                              assistantMessageParagraph.innerHTML = fullResponse
                                  .replace(/\n/g, '<br>')
                                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                              chatBox.scrollTop = chatBox.scrollHeight;
                          } else if (data.event === 'tool_call' && data.data.name === 'navigateToSection') {
                              const sectionId = data.data.arguments.sectionId;
                              document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                      } catch (e) {
                          console.error("Erro ao processar JSON:", dataStr, e);
                      }
                  }
              }
          }
      } catch (error) {
          console.error("Falha ao contatar a API:", error);
          chatBox.querySelector('.typing-indicator')?.remove();
          addMessage("Desculpe, não consegui me conectar. Tente novamente mais tarde.", 'assistant');
      }
  };

  sendBtn.addEventListener('click', () => handleSendMessage());
  userInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSendMessage();
  });

  // --- BOTÕES QUE ABREM O CHAT E DISPARAM PERGUNTAS ---
  const chatTriggerButtons = document.querySelectorAll(".chat-trigger-btn");
  const openChatAndAsk = (question) => {
    if (chatContainer) chatContainer.classList.add("open");
    if (question) handleSendMessage(question);
  };
  chatTriggerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const q = btn.dataset.question || "";
      openChatAndAsk(q);
    });
  });

  // --- LÓGICA DE ENGAJAMENTO PROATIVO ---
  function showProactiveNotification(notificationText, question) {
      const triggerWrapper = document.querySelector('.chat-trigger-wrapper');
      if (!triggerWrapper) return;

      triggerWrapper.querySelector('.chat-proactive-notification')?.remove();

      const notification = document.createElement('div');
      notification.className = 'chat-proactive-notification';
      
      const textSpan = document.createElement('span');
      textSpan.textContent = notificationText;
      
      const actionButton = document.createElement('button');
      actionButton.className = 'proactive-ask-btn';
      actionButton.textContent = 'Perguntar à IA';
      
      notification.appendChild(textSpan);
      notification.appendChild(actionButton);
      triggerWrapper.appendChild(notification);

      setTimeout(() => notification.classList.add('visible'), 100);

      const removeNotification = () => {
          notification.classList.remove('visible');
          setTimeout(() => notification.remove(), 500);
      };

      const notificationTimeout = setTimeout(removeNotification, 10000);

      actionButton.addEventListener('click', (e) => {
          e.stopPropagation();
          clearTimeout(notificationTimeout);
          chatContainer.classList.add('open');
          handleSendMessage(question);
          removeNotification();
      });
  }

  const proactiveSections = {
      'about': {
          notificationText: "Percebi que você está lendo sobre mim. Quer saber mais?",
          question: "Qual é a sua principal motivação na carreira?",
          triggered: false
      },
      'tech': {
          notificationText: "Percebi que está vendo as tecnologias que domino. Quer detalhes?",
          question: "Como você aplica o Python em seus projetos práticos?",
          triggered: false
      },
      'projects': {
          notificationText: "Percebi que você está vendo meus projetos. Quer saber mais sobre algum deles?",
          question: "Me fale em detalhes sobre o projeto 'Cognita Suite'.",
          triggered: false
      },
      'experience': {
          notificationText: "Percebi que está vendo minha trajetória profissional. Alguma dúvida?",
          question: "Quais são suas principais responsabilidades na Dígitro?",
          triggered: false
      },
      'contact': {
          notificationText: "Percebi que chegou na seção de contato. Prefere tirar uma dúvida por aqui?",
          question: "Quais são as melhores formas de entrar em contato para oportunidades profissionais?",
          triggered: false
      }
  };

  const proactiveObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          const sectionId = entry.target.id;
          const sectionConfig = proactiveSections[sectionId];
          if (!sectionConfig) return;

          if (entry.isIntersecting && !sectionConfig.triggered) {
              sectionConfig.timer = setTimeout(() => {
                  if (!chatContainer.classList.contains('open')) {
                      showProactiveNotification(sectionConfig.notificationText, sectionConfig.question);
                  }
                  sectionConfig.triggered = true;
                  proactiveObserver.unobserve(entry.target);
              }, 5000);
          } else {
              clearTimeout(sectionConfig.timer);
          }
      });
  }, { threshold: 0.6 });

  Object.keys(proactiveSections).forEach(id => {
      const el = document.getElementById(id);
      if (el) proactiveObserver.observe(el);
  });
  
  // --- BUSCA EM CURSOS ---
  const courseSearchInput = document.getElementById("courseSearchInput");
  if (courseSearchInput) {
    const courseCards = Array.from(document.querySelectorAll("#courses .card"));
    const emptyState = document.getElementById("courseSearchEmptyState");

    const normalizeText = (value) => value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const filterCourses = (searchValue) => {
      const query = normalizeText(searchValue.trim());
      let visibleCount = 0;

      courseCards.forEach((card) => {
        const title = card.querySelector(".card-title")?.innerText || "";
        const meta = Array.from(card.querySelectorAll("p")).map((p) => p.innerText).join(" ");
        const haystack = normalizeText(`${title} ${meta}`);
        const shouldShow = query === "" || haystack.includes(query);

        card.style.display = shouldShow ? "" : "none";
        if (shouldShow) visibleCount += 1;
      });

      if (emptyState) {
        emptyState.hidden = visibleCount !== 0;
      }
    };

    courseSearchInput.addEventListener("input", (event) => {
      filterCourses(event.target.value);
    });

    filterCourses(courseSearchInput.value);
  }

  // --- MINIATURAS DOS CERTIFICADOS EM CURSOS ---
  const courseCardsWithPreview = document.querySelectorAll("#courses .card[data-preview]");
  courseCardsWithPreview.forEach((card) => {
    if (card.querySelector(".certificate-thumb")) return;
    const src = card.dataset.preview;
    if (!src) return;

    const thumb = document.createElement("div");
    thumb.className = "certificate-thumb";

    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = src;
    const title = card.querySelector(".card-title")?.innerText?.trim();
    img.alt = title ? `Certificado ${title}` : "Prévia do certificado";

    thumb.appendChild(img);
    const content = card.querySelector(".card-content");
    if (content) {
      card.insertBefore(thumb, content);
    } else {
      card.insertBefore(thumb, card.firstChild);
    }
  });
  
  // --- FAB DE CONTATO ---
  const contactFab = document.getElementById("contactFab");
  if (contactFab) {
    contactFab.addEventListener("click", () => {
      const isMobile = window.innerWidth < 768;
      const url = isMobile 
        ? "https://wa.me/5548998584035"
        : "https://www.linkedin.com/in/matheussilvano/";
      window.open(url, "_blank");
    });
  }
  
  // --- ANIMAÇÃO DE FUNDO SEGUINDO O MOUSE ---
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const { clientX: x, clientY: y } = e;
      heroSection.style.setProperty('--mouse-x', `${x}px`);
      heroSection.style.setProperty('--mouse-y', `${y}px`);
    });
  }
});
