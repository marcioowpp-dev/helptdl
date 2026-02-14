const icons = [
    { icon: "💧", text: "Água", speak: "Eu quero água" },
    { icon: "🚽", text: "Banheiro", speak: "Quero ir ao banheiro" },
    { icon: "🍽️", text: "Comer", speak: "Eu quero comer" },
    { icon: "🧸", text: "Brincar", speak: "Eu quero brincar" },
    { icon: "😴", text: "Dormir", speak: "Estou com sono" },
    { icon: "🤕", text: "Ajuda", speak: "Preciso de ajuda" }
];

// Voz
function speakText(text) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
}

// Modal Toggle
function toggleLogin() {
    const modal = document.getElementById("login-modal");
    modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
}

// Render App
const container = document.getElementById("icons-container");
icons.forEach(item => {
    const card = document.createElement("div");
    card.className = "icon-card";
    card.innerHTML = `<span class="icon">${item.icon}</span><div class="label">${item.text}</div>`;
    card.onclick = () => speakText(item.speak);
    container.appendChild(card);
});