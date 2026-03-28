
const chats = {
    "ONG Amigos dos Bichos": { status: "Online", messages: [] },
    "Lar dos Peludos": { status: "Online", messages: [] },
    "Patinhas Solidárias": { status: "Offline", messages: [] }
};

let activeContact = null;

const contactListEl = document.getElementById('contactList');
const chatContainerEl = document.getElementById('chatContainer');
const currentPartnerNameEl = document.getElementById('currentPartnerName');
const currentPartnerStatusEl = document.getElementById('currentPartnerStatus');
const messageForm = document.getElementById('messageForm');
const userInput = document.getElementById('userInput');


function renderContacts() {
    contactListEl.innerHTML = "";
    Object.keys(chats).forEach(name => {
        const div = document.createElement('div');
        div.className = `contact-item ${activeContact === name ? 'active' : ''}`;
        div.innerHTML = `
            <div class="avatar-pink"><i class="fas fa-building"></i></div>
            <div class="contact-info">
                <strong>${name}</strong>
                <span>${chats[name].messages.length > 0 ? "Conversa ativa" : "Iniciar conversa"}</span>
            </div>
        `;
        div.onclick = () => selectChat(name);
        contactListEl.appendChild(div);
    });
}


function selectChat(name) {
    activeContact = name;
    currentPartnerNameEl.innerText = name;
    currentPartnerStatusEl.innerText = chats[name].status;
    
    renderContacts();
    renderMessages();
}


function renderMessages() {
    chatContainerEl.innerHTML = "";
    const messages = chats[activeContact].messages;

    if (messages.length === 0) {
        chatContainerEl.innerHTML = `
            <div class="empty-state">
                <p>Nenhuma mensagem com ${activeContact}.<br>Diga olá!</p>
            </div>`;
    } else {
        messages.forEach(text => {
            const msgDiv = document.createElement('div');
            msgDiv.className = "msg-me";
            msgDiv.innerText = text;
            chatContainerEl.appendChild(msgDiv);
        });
       
        chatContainerEl.scrollTop = chatContainerEl.scrollHeight;
    }
}


messageForm.onsubmit = (e) => {
    e.preventDefault();
    const text = userInput.value.trim();

    if (!activeContact) {
        alert("Selecione um perfil primeiro!");
        return;
    }

    if (text !== "") {
        chats[activeContact].messages.push(text); 
        userInput.value = ""; 
        renderMessages(); 
        renderContacts(); 
    }
};


renderContacts();