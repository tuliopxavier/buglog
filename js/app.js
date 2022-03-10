import { openForm, closeForm, openLogin, closeLogin, addButtonValidate, resetInputs } from "./forms.js"
import { lightMode, darkMode } from "./toggleDarkMode.js";
import { removeCard, addCard } from "./cards.js";
import inputCounter from "./inputCounter.js"

// ADD REMOVE CARD FEATURE
removeCard();

// NAV LINKS
document.querySelector('#exit-btn').onclick = () => { location.reload(); };
document.querySelector('#logo').addEventListener('click', () => { window.scrollTo(0, 0); });

// OPEN/CLOSE LOGIN
document.getElementById('login-btn').onclick = openLogin();
document.getElementById('close-login').onclick = closeLogin();

// OPEN/CLOSE ADD CARD MODAL
document.getElementById('btn-open-form').onclick = openForm();
document.getElementById('btn-close-form').onclick = closeForm();

// ADD COUNTER AT DESCRIPTION INPUT
document.getElementById("descricao").addEventListener('input', inputCounter);

// SELECT ADD CARD BUTTON 
let addNewItem = document.getElementById("btn_Salvar");
addNewItem.addEventListener("click", addCard);

// CHECK IF INPUT IS EMPTY (USER NEED TO ADD SOMETHING)
let btnWraper = document.getElementById("btn_Salvar_wraper");
let inputAddCard = document.querySelectorAll('.input-add-card');

btnWraper.addEventListener("mouseover", addButtonValidate);
addNewItem.addEventListener("focus", addButtonValidate);

// RESET BUTTON AND INPUTS AFTER CHECKING
inputAddCard.forEach(item => {
    item.addEventListener("mouseover", resetInputs);
    item.addEventListener("focus", resetInputs);
});



// DARK/LIGHT MODE
let toggle = document.getElementById('toggle');
toggle.addEventListener('change', () => {
    toggle.checked ? darkMode() : lightMode();
});
// TOGGLE DARK/LIGHT MODE ON THE LABEL DARK/LIGHT MODE
let modeLabel = document.querySelector('.toggle-dark-mode');
modeLabel.onclick = () => {
    toggle.checked = !toggle.checked;
    toggle.checked ? darkMode() : lightMode();
};

// RESPONSIVE MENU
document.getElementById('menu-button').onclick = () => {
    document.getElementById('menu-button').classList.toggle('open');
    document.getElementById('nav-items').classList.toggle('open');
}