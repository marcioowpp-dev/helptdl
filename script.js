const icons = [
    { icon: "💧", text: "Água", speak: "Eu quero água" },
    { icon: "🚽", text: "Banheiro", speak: "Quero ir ao banheiro" },
    { icon: "🍽️", text: "Comer", speak: "Eu quero comer" },
    { icon: "🧸", text: "Brincar", speak: "Eu quero brincar" },
    { icon: "😴", text: "Dormir", speak: "Estou com sono" },
    { icon: "🤕", text: "Ajuda", speak: "Preciso de ajuda" }
];

function speakText(text) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "pt-BR";
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
}

function entrarNaEscola() {
    const escola = document.getElementById('select-escola');
    if (!escola.value) return alert("Selecione uma escola");

    document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
    document.getElementById('escola-tag').innerText = `UNIDADE: ${escola.options[escola.selectedIndex].text}`;
    
    const container = document.getElementById("icons-container");
    container.innerHTML = "";
    icons.forEach(item => {
        const card = document.createElement("div");
        card.className = "icon-card";
        card.innerHTML = `<span style="font-size: 3.5rem; display:block; margin-bottom:10px;">${item.icon}</span><strong>${item.text}</strong>`;
        card.onclick = () => speakText(item.speak);
        container.appendChild(card);
    });
}

function toggleModal(id) {
    const m = document.getElementById(id);
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}

// Lógica de Login para Apresentação
document.getElementById('login-form').onsubmit = (e) => {
    e.preventDefault();
    const cpf = document.getElementById('login-cpf').value;
    const senha = document.getElementById('login-senha').value;

    if(cpf === "123.123.123-12" && senha === "23") {
        alert("Acesso Autorizado! Bem-vindo ao Perfil do Tutor. Agora você pode editar os cards desta escola.");
        toggleModal('login-modal');
    } else {
        alert("CPF ou Senha incorretos.");
    }
};