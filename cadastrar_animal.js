const modalAdicionar = document.getElementById('modalAdicionar');
const btnAbrirModal = document.getElementById('btnAbrirModal');
const btnFecharModal = document.getElementById('btnFecharModal');
const btnCancelarModal = document.getElementById('btnCancelarModal');
const formNovoAnimal = document.getElementById('formNovoAnimal');


function abrirModal() {
    if (modalAdicionar) {
        modalAdicionar.classList.add('active');
    }

    const inputNome = document.getElementById('nomeAnimal');
    if (inputNome) inputNome.focus();
}

// Fechar modal
function fecharModal() {
    if (modalAdicionar) {
        modalAdicionar.classList.remove('active');
    }
}


if (btnAbrirModal) {
    btnAbrirModal.addEventListener('click', abrirModal);
}

if (btnFecharModal) {
    btnFecharModal.addEventListener('click', fecharModal);
}

if (btnCancelarModal) {
    btnCancelarModal.addEventListener('click', fecharModal);
}


if (modalAdicionar) {
    modalAdicionar.addEventListener('click', (e) => {
        if (e.target === modalAdicionar) {
            fecharModal();
        }
    });
}


document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && modalAdicionar && modalAdicionar.classList.contains('active')) {
        fecharModal();
    }
});


if (formNovoAnimal) {
    formNovoAnimal.addEventListener('submit', (e) => {
        e.preventDefault();

        alert("✅ Animal cadastrado com sucesso!");

        formNovoAnimal.reset();
        fecharModal();
    });
}
