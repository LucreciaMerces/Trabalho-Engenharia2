
let appState = {
    mode: 'login', // 'login' ou 'register'
    userType: 'adopter' // 'adopter' ou 'ngo'
};


const toggleButtons = document.querySelectorAll('.toggle-btn');
const userTypeButtons = document.querySelectorAll('.user-type-btn');
const loginForm = document.getElementById('loginForm');
const nameGroup = document.getElementById('nameGroup');
const nameLabel = document.getElementById('nameLabel');
const nameInput = document.getElementById('name');
const submitText = document.getElementById('submitText');


document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
});


function initializeEventListeners() {
   
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => handleToggleMode(btn));
    });

   
    userTypeButtons.forEach(btn => {
        btn.addEventListener('click', () => handleUserTypeChange(btn));
    });

    
    loginForm.addEventListener('submit', handleFormSubmit);
}


function handleToggleMode(button) {
    const mode = button.getAttribute('data-mode');
    appState.mode = mode;

   
    toggleButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    
    if (mode === 'register') {
        nameGroup.style.display = 'block';
        nameInput.required = true;
        submitText.textContent = '🎉 Criar conta';
    } else {
        nameGroup.style.display = 'none';
        nameInput.required = false;
        submitText.textContent = '✨ Entrar';
    }

    updateNameLabel();
}

function handleUserTypeChange(button) {
    const type = button.getAttribute('data-type');
    appState.userType = type;

  
    userTypeButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    updateNameLabel();
    updatePlaceholders();
}


function updateNameLabel() {
    if (appState.userType === 'adopter') {
        nameLabel.textContent = 'Seu nome';
        nameInput.placeholder = 'João Silva';
    } else {
        nameLabel.textContent = 'Nome da ONG';
        nameInput.placeholder = 'ONG Patinhas Felizes';
    }
}


function updatePlaceholders() {
   
}


function handleFormSubmit(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = nameInput.value;

   
    const user = {
        id: Date.now().toString(),
        email: email,
        name: name || email.split('@')[0],
        type: appState.userType,
        adoptionsCount: 0,
        approvedAdoptions: []
    };

    if (appState.mode === 'login') {
        
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const foundUser = users.find(u => u.email === email);

        if (foundUser) {
            console.log('Login realizado:', foundUser);
            localStorage.setItem('currentUser', JSON.stringify(foundUser));
            showSuccessMessage('Login realizado com sucesso!');
            
            
            setTimeout(() => {
                window.location.href = 'feed.html';
                alert('Redirecionando para a página principal...');
            }, 1500);
        } else {
            showErrorMessage('Usuário não encontrado. Faça seu cadastro!');
        }
    } else {
        // Lógica de cadastro
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find(u => u.email === email);

        if (existingUser) {
            showErrorMessage('Email já cadastrado. Faça login!');
        } else {
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            console.log('Cadastro realizado:', user);
            showSuccessMessage('Cadastro realizado com sucesso!');
            
           setTimeout(() => {
    window.location.href = 'feed.html';
}, 1500);
        }
    }
}


function showSuccessMessage(message) {
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(to right, #10b981, #059669);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);

    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


function showErrorMessage(message) {
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(to right, #ef4444, #dc2626);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    notification.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    document.body.appendChild(notification);

   
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}


const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
