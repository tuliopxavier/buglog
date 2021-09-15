import { openForm, closeForm, openLogin, closeLogin, addButtonValidate, resetInputs } from "./forms.js"
import { lightMode, darkMode } from "./toggleDarkMode.js";
import { removeCard, addCard } from "./cards.js";
import inputCounter from "./inputCounter.js"

// adicionando funcionalidade de remover cards
removeCard();

// nav links
document.querySelector('#exit-btn').onclick = () => { location.reload(); };
document.querySelector('#logo').addEventListener('click', () => { window.scrollTo(0, 0); });

// abrir e fechar login
document.getElementById('login-btn').onclick = openLogin();
document.getElementById('close-login').onclick = closeLogin();

// abrir e fechar modal de adicionar card;
document.getElementById('btn-open-form').onclick = openForm();
document.getElementById('btn-close-form').onclick = closeForm();

// adicionar o contador no input de descrição
document.getElementById("descricao").addEventListener('input', inputCounter);

//selecionar o botão de adicionar card
let addNewItem = document.getElementById("btn_Salvar");
addNewItem.addEventListener("click", addCard);

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



// dark and light mode
let toggle = document.getElementById('toggle');
toggle.addEventListener('change', () => {
    toggle.checked ? darkMode() : lightMode();
});
// para ativar dark mode ao clicar no texto dark/light mode
let modeLabel = document.querySelector('.toggle-dark-mode');
modeLabel.onclick = () => {
    toggle.checked = !toggle.checked;
    toggle.checked ? darkMode() : lightMode();
};
