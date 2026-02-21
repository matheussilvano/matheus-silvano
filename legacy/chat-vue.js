(() => {
  const { createApp, nextTick } = Vue;

  createApp({
    data() {
      return {
        open: false,
        fullscreen: false,
        input: "",
        quickReplies: [
          "Quais projetos mostram melhor sua experiência com back-end?",
          "Como você usou LLMs na prática?",
          "Você já trabalhou com Docker/MLOps em produção?"
        ],
        messages: [
          {
            sender: "assistant",
            text: "Olá! 👋 Posso te indicar projetos que mostram bem minha experiência com IA, back-end e MLOps, conforme o que você estiver buscando."
          }
        ]
      };
    },
    computed: {
      containerClass() {
        return {
          "chat-container": true,
          open: this.open,
          fullscreen: this.fullscreen
        };
      }
    },
    methods: {
      toggleChat() {
        this.open = !this.open;
      },
      closeChat() {
        this.open = false;
      },
      toggleFullscreen() {
        this.fullscreen = !this.fullscreen;
      },
      addMessage(text, sender) {
        this.messages.push({ text, sender });
        nextTick(() => {
          const box = this.$refs.chatBox;
          if (box) box.scrollTop = box.scrollHeight;
        });
      },
      replyFor(question) {
        const q = question.toLowerCase();
        if (q.includes("back-end") || q.includes("backend")) {
          return "Os projetos que melhor mostram back-end são Mooose, PROMOOVE e Fake Data API. Neles eu modelei APIs com FastAPI, integrações e fluxos de produção.";
        }
        if (q.includes("llm") || q.includes("ia")) {
          return "Usei LLMs em produção no Mooose e na Dígitro, com foco em avaliação de respostas, pipelines de observabilidade e melhoria de prompts.";
        }
        if (q.includes("docker") || q.includes("mlops")) {
          return "Sim. Trabalhei com Docker em projetos de ML e com práticas de MLOps para deploy, monitoramento e avaliação contínua de modelos.";
        }
        if (q.includes("cognita")) {
          return "Cognita Suite foi um projeto de hackathon entregue em 24h com backend em FastAPI e recursos de IA para apoio aos estudos.";
        }
        if (q.includes("sua clínica") || q.includes("clinica")) {
          return "Sua Clínica foi desenvolvida em hackathon com FastAPI, n8n e OpenAI para automatizar agendamentos e atendimento.";
        }
        return "Posso te detalhar projetos de IA, experiência com FastAPI, RAG, Docker e MLOps. Me diga qual área você quer aprofundar.";
      },
      sendMessage(override) {
        const question = (override || this.input).trim();
        if (!question) return;
        this.addMessage(question, "user");
        this.input = "";
        setTimeout(() => {
          this.addMessage(this.replyFor(question), "assistant");
        }, 220);
      },
      onOpenChat(event) {
        this.open = true;
        const question = event?.detail;
        if (question) this.sendMessage(question);
      }
    },
    mounted() {
      window.addEventListener("open-chat", this.onOpenChat);
    },
    beforeUnmount() {
      window.removeEventListener("open-chat", this.onOpenChat);
    },
    template: `
      <div>
        <div :class="containerClass">
          <div class="chat-header">
            <div class="chat-avatar">
              <img loading="lazy" src="assistant_logo.png" alt="Avatar do Assistente" class="chat-avatar-img">
            </div>
            <div class="chat-header-title">
              <h3>Assistente Virtual</h3>
              <span>Online</span>
            </div>
            <div class="chat-header-buttons">
              <button class="chat-fullscreen-btn" aria-label="Tela cheia" @click="toggleFullscreen">
                <i class="fa-solid" :class="fullscreen ? 'fa-compress' : 'fa-expand'"></i>
              </button>
              <button class="chat-close-btn" aria-label="Fechar chat" @click="closeChat">&times;</button>
            </div>
          </div>

          <div class="chat-box" ref="chatBox">
            <div v-for="(message, index) in messages" :key="index" class="chat-message" :class="message.sender">
              <p>{{ message.text }}</p>
            </div>
            <div class="quick-replies" v-if="messages.length < 3">
              <button v-for="item in quickReplies" :key="item" class="quick-reply-btn" @click="sendMessage(item)">
                {{ item }}
              </button>
            </div>
          </div>

          <div class="chat-input-area">
            <input type="text" v-model="input" placeholder="Digite sua pergunta..." @keypress.enter="sendMessage()">
            <button aria-label="Enviar mensagem" @click="sendMessage()">
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>

        <div class="chat-trigger-wrapper">
          <span class="chat-cta-bubble">Converse comigo!</span>
          <button class="chat-open-btn" aria-label="Abrir chat" @click="toggleChat">
            <img loading="lazy" src="assistant_logo.png" alt="Abrir chat" class="chat-open-icon">
          </button>
        </div>
      </div>
    `
  }).mount("#vue-chat-root");
})();
