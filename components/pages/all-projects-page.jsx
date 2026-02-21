(() => {
  const { useState } = React;
  const { PROJECTS, t } = window.AppData;
  const { useReveal, useCardTilt } = window.AppHooks;
  const { Controls, Footer, ChatAssistant, ProjectCard, ScrollArrow } = window.AppComponents;

  function AllProjectsPage({ lang, setLang, dark, setDark }) {
    const [activeFeed, setActiveFeed] = useState("ai");
    const feeds = [
      { id: "ai", label: t(lang, "projects_ia_title"), items: PROJECTS.ai },
      { id: "other", label: t(lang, "projects_other_title"), items: [...PROJECTS.backend, ...PROJECTS.tools] }
    ];
    const currentFeed = feeds.find((feed) => feed.id === activeFeed) || feeds[0];

    useReveal(activeFeed);
    useCardTilt(activeFeed);

    return (
      <>
        <header className="hero">
          <Controls lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
          <div className="hero-content">
            <h1 className="hero-title">{t(lang, "all_projects_page_title")}</h1>
            <p className="hero-subtitle">{t(lang, "all_projects_page_subtitle")}</p>
            <div className="hero-buttons">
              <a href="index.html" className="btn btn-primary">{t(lang, "back_to_portfolio_button")}</a>
            </div>
          </div>
          <ScrollArrow href="#all-projects-section" label={t(lang, "projects_title")} prompt={t(lang, "next_section_label")} />
        </header>

        <main>
          <div className="container">
            <section id="all-projects-section" className="section">
              <h2 className="section-title reveal">{t(lang, "all_projects_page_title")}</h2>

              <div className="project-feed-tabs reveal" role="tablist" aria-label={t(lang, "projects_title")}>
                {feeds.map((feed) => (
                  <button
                    key={feed.id}
                    type="button"
                    role="tab"
                    aria-selected={activeFeed === feed.id}
                    className={`project-feed-tab ${activeFeed === feed.id ? "active" : ""}`}
                    onClick={() => setActiveFeed(feed.id)}
                  >
                    {feed.label}
                  </button>
                ))}
              </div>

              <h3 className="project-subtitle reveal">{currentFeed.label}</h3>
              <div className="project-feed-grid">
                {currentFeed.items.map((project) => (
                  <ProjectCard key={`${activeFeed}-${project.title}`} lang={lang} project={project} />
                ))}
              </div>
            </section>
          </div>
        </main>

        <Footer lang={lang} />
        <ChatAssistant lang={lang} quickReplies={[t(lang, "chat_q1"), t(lang, "chat_q2"), t(lang, "chat_q3")]} intro={t(lang, "chat_initial_message")} />
      </>
    );
  }

  window.AppPages = { ...(window.AppPages || {}), AllProjectsPage };
})();
