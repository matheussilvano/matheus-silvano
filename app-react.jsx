(() => {
  const { useSiteState } = window.AppHooks;
  const { PortfolioPage, CoursesPage, AllProjectsPage } = window.AppPages;

  function AppRouter() {
    const { lang, setLang, dark, setDark } = useSiteState();
    const page = document.body.dataset.page || "home";

    if (page === "courses") {
      return <CoursesPage lang={lang} setLang={setLang} dark={dark} setDark={setDark} />;
    }
    if (page === "all-projects") {
      return <AllProjectsPage lang={lang} setLang={setLang} dark={dark} setDark={setDark} />;
    }
    return <PortfolioPage lang={lang} setLang={setLang} dark={dark} setDark={setDark} />;
  }

  const root = ReactDOM.createRoot(document.getElementById("app-root"));
  root.render(<AppRouter />);
})();
