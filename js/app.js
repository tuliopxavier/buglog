import { openForm, closeForm, openLogin, closeLogin } from "./openCloseForms.js"
import removeCard from "./removeCard.js"
import { lightMode, darkMode } from "./toggle.js";
import addCard from "./addCard.js";
import inputCounter from "./inputCounter.js"

// dark and light mode

let toggle = document.querySelector('#toggle');
toggle.addEventListener('change', function () {
    if (toggle.checked) {
        darkMode();
    } else {
        lightMode();
    };
});

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


