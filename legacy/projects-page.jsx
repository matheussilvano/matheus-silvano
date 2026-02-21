(() => {
  const { PROJECTS, t } = window.AppData;
  const { useReveal } = window.AppHooks;
  const { Controls, Footer, ChatAssistant, ProjectCard } = window.AppComponents;

  function ProjectsPage({ lang, setLang, dark, setDark }) {
    useReveal();

    return (
      <>
        <header className="hero">
          <Controls lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
          <div className="hero-content">
            <h1 className="hero-title">{t(lang, "projects_page_title")}</h1>
            <p className="hero-subtitle">{t(lang, "projects_page_subtitle")}</p>
            <div className="hero-buttons">
              <a href="index.html" className="btn btn-secondary">{t(lang, "back_to_portfolio_button")}</a>
              <a href="all-projects.html" className="btn btn-primary">{t(lang, "view_all_projects_button")}</a>
            </div>
          </div>
        </header>

        <main>
          <div className="container">
            <section className="section">
              <h2 className="section-title reveal">{t(lang, "featured_projects_title")}</h2>
              <div className="project-grid">
                {PROJECTS.featured.map((project) => (
                  <div className="card reveal" key={project.title}>
                    <div className="card-image-container">
                      <img loading="lazy" src={project.image} alt={project.title} className="card-image" />
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{project.title}</h3>
                      <p>{project.desc}</p>
                      <div className="card-actions">
                        <a href={project.href} target="_blank" rel="noopener" className={`btn ${project.primary ? "btn-primary" : "btn-secondary"}`}>{project.btn}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card-actions" style={{ justifyContent: "center", marginTop: "2rem" }}>
                <a href="all-projects.html" className="btn btn-primary">{t(lang, "view_all_projects_button")}</a>
              </div>
            </section>
          </div>
        </main>

        <Footer lang={lang} />
        <ChatAssistant lang={lang} quickReplies={[t(lang, "chat_q1"), t(lang, "chat_q2"), t(lang, "chat_q3")]} intro={t(lang, "chat_initial_message")} />
      </>
    );
  }

  window.AppPages = { ...(window.AppPages || {}), ProjectsPage };
})();
