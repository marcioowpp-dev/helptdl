// Lista de ícones e frases
// O professor pode editar SOMENTE esta parte
const icons = [
    {
        icon: "💧",
        text: "Água",
        speak: "Eu quero água"
    },
    {
        icon: "🚽",
        text: "Banheiro",
        speak: "Quero ir ao banheiro"
    },
    {
        icon: "🍽️",
        text: "Comer",
        speak: "Eu quero comer"
    },
    {
        icon: "🧸",
        text: "Brincar",
        speak: "Eu quero brincar"
    },
    {
        icon: "😴",
        text: "Dormir",
        speak: "Estou com sono"
    },
    {
        icon: "🤕",
        text: "Ajuda",
        speak: "Preciso de ajuda"
    }
];

// Função para falar o texto
function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
}

// Gerar os botões na tela
const container = document.getElementById("icons-container");

icons.forEach(item => {
    const card = document.createElement("div");
    card.className = "icon-card";

    card.innerHTML = `
        <div class="icon">${item.icon}</div>
        <div class="label">${item.text}</div>
    `;

    card.addEventListener("click", () => {
        speakText(item.speak);
    });

    container.appendChild(card);
});
