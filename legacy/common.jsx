(() => {
  const { useEffect, useRef, useState } = React;
  const { ASSETS, API_URL, t } = window.AppData;

  function Controls({ lang, setLang, dark, setDark }) {
    return (
      <div className="header-controls">
        <div className="language-selector" id="languageSelector">
          <img src={ASSETS.flagPt} alt="Bandeira do Brasil" className={`lang-flag ${lang === "pt" ? "active" : ""}`} onClick={() => setLang("pt")} />
          <img src={ASSETS.flagEn} alt="Bandeira Reino Unido" className={`lang-flag ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")} />
          <img src={ASSETS.flagEs} alt="Bandeira Espanha" className={`lang-flag ${lang === "es" ? "active" : ""}`} onClick={() => setLang("es")} />
        </div>
        <button id="darkModeToggle" aria-label="Alternar modo escuro/claro" onClick={() => setDark((d) => !d)}>{dark ? "☀️" : "🌙"}</button>
      </div>
    );
  }

  function Footer({ lang }) {
    return <footer className="footer"><p>{t(lang, "footer_text")}</p></footer>;
  }

  function ChatAssistant({ lang, quickReplies, intro }) {
    const [open, setOpen] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [messages, setMessages] = useState([{ sender: "assistant", text: intro }]);
    const [input, setInput] = useState("");
    const [sending, setSending] = useState(false);
    const threadIdRef = useRef(null);
    const boxRef = useRef(null);

    useEffect(() => {
      if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }, [messages]);

    useEffect(() => {
      const handler = (event) => {
        setOpen(true);
        const question = (event && event.detail) || "";
        if (question) sendMessage(question);
      };
      window.addEventListener("open-chat", handler);
      return () => window.removeEventListener("open-chat", handler);
    }, []);

    const addMessage = (sender, text) => {
      setMessages((prev) => prev.concat([{ sender, text }]));
    };

    const patchLastAssistant = (newText) => {
      setMessages((prev) => {
        const copy = prev.slice();
        for (let i = copy.length - 1; i >= 0; i -= 1) {
          if (copy[i].sender === "assistant") {
            copy[i] = { ...copy[i], text: newText };
            return copy;
          }
        }
        return copy.concat([{ sender: "assistant", text: newText }]);
      });
    };

    const sendMessage = async (override) => {
      const question = (override || input).trim();
      if (!question || sending) return;

      addMessage("user", question);
      setInput("");
      setSending(true);

      let assistantText = "";
      addMessage("assistant", "...");

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question, thread_id: threadIdRef.current })
        });

        if (!response.ok || !response.body) {
          throw new Error(`Erro de conexão: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const chunks = buffer.split("\n\n");
          buffer = chunks.pop() || "";

          chunks.forEach((chunk) => {
            const line = chunk.trim();
            if (!line.startsWith("data:")) return;

            const jsonStr = line.slice(5).trim();
            if (!jsonStr || jsonStr === "[DONE]") return;

            try {
              const payload = JSON.parse(jsonStr);
              if (payload.thread_id) {
                threadIdRef.current = payload.thread_id;
              }

              if (payload.type === "content.delta") {
                const delta = payload.data && payload.data.delta ? payload.data.delta : "";
                assistantText += delta;
                patchLastAssistant(assistantText || "...");
              } else if (payload.answer) {
                assistantText += payload.answer;
                patchLastAssistant(assistantText);
              } else if (payload.data && payload.data.content) {
                assistantText += payload.data.content;
                patchLastAssistant(assistantText);
              } else if (payload.type === "tool.call" && payload.data && payload.data.arguments && payload.data.arguments.sectionId) {
                const section = document.getElementById(payload.data.arguments.sectionId);
                if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            } catch (err) {
              // ignore malformed chunk
            }
          });
        }

        if (!assistantText.trim()) {
          patchLastAssistant("Não consegui gerar resposta agora. Tente novamente em alguns segundos.");
        }
      } catch (err) {
        patchLastAssistant("Falha ao conectar com a IA no momento. Tente novamente.");
      } finally {
        setSending(false);
      }
    };

    return (
      <>
        <div className={`chat-container ${open ? "open" : ""} ${fullscreen ? "fullscreen" : ""}`}>
          <div className="chat-header">
            <div className="chat-avatar"><img src={ASSETS.assistant} alt="Avatar do Assistente" className="chat-avatar-img" /></div>
            <div className="chat-header-title"><h3>{t(lang, "chat_title")}</h3><span>{t(lang, "chat_status")}</span></div>
            <div className="chat-header-buttons">
              <button className="chat-fullscreen-btn" aria-label="Tela cheia" onClick={() => setFullscreen((v) => !v)}><i className={`fa-solid ${fullscreen ? "fa-compress" : "fa-expand"}`}></i></button>
              <button className="chat-close-btn" aria-label="Fechar chat" onClick={() => setOpen(false)}>&times;</button>
            </div>
          </div>
          <div className="chat-box" id="chat-box" ref={boxRef}>
            {messages.map((m, idx) => (
              <div key={`${m.sender}-${idx}`} className={`chat-message ${m.sender}`}><p>{m.text}</p></div>
            ))}
            {messages.length <= 2 && (
              <div className="quick-replies">
                {quickReplies.map((qr) => <button key={qr} className="quick-reply-btn" onClick={() => sendMessage(qr)}>{qr}</button>)}
              </div>
            )}
          </div>
          <div className="chat-input-area">
            <input type="text" id="user-input" value={input} placeholder={t(lang, "chat_input_placeholder")} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => { if (e.key === "Enter") sendMessage(); }} />
            <button id="send-btn" aria-label="Enviar mensagem" onClick={() => sendMessage()} disabled={sending}><i className="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>
        <div className="chat-trigger-wrapper">
          <span className="chat-cta-bubble">{t(lang, "chat_cta_bubble")}</span>
          <button className="chat-open-btn" aria-label="Abrir chat" onClick={() => setOpen((v) => !v)}><img src={ASSETS.assistant} alt="Abrir chat" className="chat-open-icon" /></button>
        </div>
      </>
    );
  }

  function ProjectCard({ lang, project }) {
    return (
      <div className="card reveal">
        <div className="card-image-container"><img loading="lazy" src={project.image} alt={project.title} className="card-image" /></div>
        <div className="card-content">
          <h3 className="card-title">{project.title}</h3>
          <p>{project.desc}</p>
          <p className="card-impact">{project.impact}</p>
          <p className="card-contrib">{project.contrib}</p>
          <div className="tech-stack">{project.stack.map((s) => <span key={`${project.title}-${s}`}>{s}</span>)}</div>
          <div className="card-actions">
            {project.actions ? project.actions.map((a) => (
              <a key={`${project.title}-${a.label}`} href={a.href} target="_blank" rel="noopener" className={`btn ${a.primary ? "btn-primary" : "btn-secondary"}`}>{a.label}</a>
            )) : <button className="btn btn-secondary chat-trigger-btn" onClick={() => window.dispatchEvent(new CustomEvent("open-chat", { detail: project.ask }))}>{t(lang, "in_dev_button")}</button>}
          </div>
        </div>
      </div>
    );
  }

  function CourseCard({ lang, item }) {
    return (
      <div className="card reveal">
        {item.preview ? <div className="certificate-thumb"><img src={item.preview} alt={item.title} /></div> : null}
        <div className="card-content">
          <h3 className="card-title">{item.title}</h3>
          {item.star ? <span className="course-star">{t(lang, "course_star_label")}</span> : null}
          <p><strong>{t(lang, "institution_label")}:</strong> {item.institution}</p>
          <p><strong>{t(lang, "year_label")}:</strong> {item.year}</p>
          <div className="card-actions">
            {item.multiActions ? item.multiActions.map((act) => <a key={act.href} href={act.href} target="_blank" rel="noopener" className="btn btn-primary">{t(lang, act.labelKey)}</a>) : <a href={item.cert} target="_blank" rel="noopener" className="btn btn-primary">{t(lang, "view_certificate_button")}</a>}
          </div>
        </div>
      </div>
    );
  }

  window.AppComponents = {
    ...(window.AppComponents || {}),
    Controls,
    Footer,
    ChatAssistant,
    ProjectCard,
    CourseCard
  };
})();
