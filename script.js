// Lista de ícones e frases configuráveis
const icons = [
    { icon: "💧", text: "Água", speak: "Eu quero água" },
    { icon: "🚽", text: "Banheiro", speak: "Quero ir ao banheiro" },
    { icon: "🍽️", text: "Comer", speak: "Eu quero comer" },
    { icon: "🧸", text: "Brincar", speak: "Eu quero brincar" },
    { icon: "😴", text: "Dormir", speak: "Estou com sono" },
    { icon: "🤕", text: "Ajuda", speak: "Preciso de ajuda" }
];

// Função principal de voz
function speakText(text) {
    // Interrompe qualquer fala anterior para não encavalar o som
    window.speechSynthesis.cancel(); 

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    speech.rate = 0.9; // Velocidade levemente reduzida para clareza no TDL
    speech.pitch = 1.0;
    window.speechSynthesis.speak(speech);
}

// Renderização dos cards no container
const container = document.getElementById("icons-container");

icons.forEach(item => {
    const card = document.createElement("div");
    card.className = "icon-card";
    
    // Acessibilidade: define o card como um botão para leitores de tela
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Pedir ${item.text}`);

    card.innerHTML = `
        <span class="icon" aria-hidden="true">${item.icon}</span>
        <div class="label">${item.text}</div>
    `;

    // Evento de clique
    card.addEventListener("click", () => {
        speakText(item.speak);
    });

    // Suporte para teclado (Enter)
    card.addEventListener("keypress", (e) => {
        if (e.key === "Enter") speakText(item.speak);
    });

    container.appendChild(card);
});