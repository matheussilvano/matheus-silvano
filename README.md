# Portfólio

Este é o código-fonte do meu portfólio pessoal, uma página da web interativa para mostrar minhas habilidades, projetos e experiência profissional.

![image](https://github.com/user-attachments/assets/1be6b791-94f1-4a41-bc5b-ad7966899d4c)

## Sobre o Projeto

O portfólio foi criado como uma página única com um design moderno e responsivo. A navegação é fluida, com seções que detalham minha trajetória como desenvolvedor, meus principais projetos e recomendações de colegas de trabalho.

## Funcionalidades

  * **Design Responsivo:** Totalmente adaptável para visualização em desktops, tablets e smartphones.
  * **Tema Escuro/Claro:** Alternância entre os modos claro e escuro para uma melhor experiência do usuário.
  * **Seções Detalhadas:**
      * **Sobre Mim:** Uma breve introdução sobre minhas paixões e foco profissional em IA e desenvolvimento back-end.
      * **Projetos:** Uma grade no estilo masonry/pinterest exibindo meus principais trabalhos com links para o código-fonte e demonstrações ao vivo.
      * **Experiência Profissional:** Uma linha do tempo interativa destacando minha carreira.
      * **Recomendações:** Um carrossel com depoimentos de profissionais com quem trabalhei.
  * **Animações e Efeitos Visuais:** Animações sutis para melhorar a interatividade, como efeitos de *hover* em botões e cards de projeto.

## Tecnologias Utilizadas

  * **Front-End:**
      * React 18 (via CDN + Babel)
      * CSS3
      * JavaScript (ES6+)
  * **Back-End (integração de IA):**
      * API externa em `https://api.matheussilvano.dev/ask`
  * **Ferramentas e Outros:**
      * **Versionamento:** Git

## Estrutura

  * `index.html`: shell da página principal (renderizada por React).
  * `cursos.html`: shell da página de cursos/certificações (renderizada por React).
  * `all-projects.html`: página com todos os projetos (incluindo os destacados).
  * `app-react.jsx`: bootstrap do app e roteador por página.
  * `data/site-data.js`: dados e constantes do site (textos, assets, projetos, cursos etc.).
  * `hooks/use-site-state.js`: estado global de idioma/tema.
  * `hooks/use-reveal.js`: animação de reveal por interseção.
  * `components/layout.jsx`: componentes de layout compartilhados (`Controls`, `Footer`).
  * `components/cards.jsx`: componentes de cards (`ProjectCard`, `CourseCard`).
  * `components/chat-assistant.jsx`: componente de chat com streaming da API de IA.
  * `components/pages/home-page.jsx`: composição da página principal.
  * `components/pages/courses-page.jsx`: composição da página de cursos.
  * `style.css`: estilos globais desktop-first + ajustes mobile-friendly.
  * `assets/`: organização de imagens, PDFs, badges e certificados.
  * `legacy/`: código antigo preservado para referência (`script.js`, `chat-vue.js`, `common.jsx` legado, páginas de projetos legadas).

## Como Executar

- Acesse o portfólio online [clicando aqui](https://matheussilvano.github.io/matheus-silvano/)

## Contato

  * **E-mail:** matheussilvano2005@gmail.com
  * **LinkedIn:** [in/matheussilvano/](https://www.linkedin.com/in/matheussilvano/)
