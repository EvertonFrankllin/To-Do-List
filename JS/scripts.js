
const button = document.querySelector('.button-add-task'); // Aqui eu estou acessando a minha classe dentro do HTML
const input = document.querySelector('.task-inp');// Aqui eu estou acessando a minha classe dentro do HTML

function addInpPeloButton() {
    alert('Botão clicado');
}

button.addEventListener("click", addInpPeloButton);
//esse evento fica de olho no botão e o evento de click deixa válido apenas quando o botão foin clicado.
// E toda vez que o botão for clicado eu quero chamar uma função.

