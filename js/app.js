import { openForm, closeForm, openLogin, closeLogin, addButtonValidate, resetInputs } from "./forms.js"
import { lightMode, darkMode } from "./toggleDarkMode.js";
import { addCard, removeCard } from "./cards.js";
import inputCounter from "./inputCounter.js"

// dark and light mode
let toggle = document.getElementById('toggle');
toggle.addEventListener('change', () => {
    toggle.checked ? darkMode() : lightMode();
});
// para ativar dark mode ao clicar no texto dark/light mode
let modeLabel = document.getElementById('mode-label');
modeLabel.onclick = () => {
    toggle.checked = !toggle.checked;
    toggle.checked ? darkMode() : lightMode();
};

// adicionando funcionalidade de remover cards para
removeCard();

// nav links
document.querySelector('#exit-btn').onclick = () => { location.reload(); };
document.querySelector('#logo').addEventListener('click', () => { window.scrollTo(0, 0); });

// abrir e fechar login
document.getElementById('login-btn').onclick = openLogin;
document.getElementById('fechar').onclick = closeLogin;

//selecionar o botão de adicionar card
let addNewItem = document.getElementById("btn_Salvar");
addNewItem.addEventListener("click", addCard);

// adicionar o contador no input de descrição
let descricao = document.getElementById("descricao");
descricao.addEventListener('input', inputCounter);

// abrir e fechar modal de adicionar card
let btnOpenForm = document.getElementById('btn-open-form');
let btnCloseForm = document.getElementById('btn-close-form');
btnOpenForm.onclick = openForm();
btnCloseForm.onclick = closeForm();

// verificando se tem algum input vazio (o usuário precisa inserir alguma informação)

let btnWraper = document.getElementById("btn_Salvar_wraper");
let inputAddCard = document.querySelectorAll('.input-add-card');

btnWraper.addEventListener("mouseover", addButtonValidate);
addNewItem.addEventListener("focus", addButtonValidate);

// resetando o botão e inputs após verificação
inputAddCard.forEach(item => {
    item.addEventListener("mouseover", resetInputs);
    item.addEventListener("focus", resetInputs);
});

