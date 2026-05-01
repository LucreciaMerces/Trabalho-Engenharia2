
function abrirModal() {
    const modal = document.getElementById('modal-pet');
    modal.style.display = 'flex';
}


function fecharModal() {
    const modal = document.getElementById('modal-pet');
    modal.style.display = 'none';
}


window.onclick = function(event) {
    const modal = document.getElementById('modal-pet');
    if (event.target == modal) {
        fecharModal();
    }
}

document.querySelector('.btn-save-pet').addEventListener('click', (e) => {
    e.preventDefault();
    
   
    alert(" o Animal foi cadastrado com sucesso! ");
    
    
    const countDisp = document.getElementById('count-disp');
    let atual = parseInt(countDisp.innerText);
    countDisp.innerText = atual + 1;

    fecharModal();
});
