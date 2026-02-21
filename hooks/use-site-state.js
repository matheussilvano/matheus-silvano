(() => {
  const { useEffect, useState } = React;
  const { TEXT } = window.AppData;

  function useSiteState() {
    const savedLang = localStorage.getItem("language");
    const [lang, setLang] = useState(TEXT[savedLang] ? savedLang : "pt");
    const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
      localStorage.setItem("language", lang);
      document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
      localStorage.setItem("theme", dark ? "dark" : "light");
      document.body.classList.toggle("dark", dark);
    }, [dark]);

    return { lang, setLang, dark, setDark };
  }

  window.AppHooks = { ...(window.AppHooks || {}), useSiteState };
})();
