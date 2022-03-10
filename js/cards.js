import { handleClickOutsideForm } from "./forms.js"
import { darkMode, lightMode } from "./toggleDarkMode.js"

export function addCard(e) {
    e.preventDefault();

    let url = document.getElementById("url_img");
    let titulo = document.getElementById("titulo");
    let descricao = document.getElementById("descricao");

    let addCard = document.getElementById('btn-open-form');
    let sectionCard = document.getElementsByClassName('card')

    let formModal = document.querySelector("#form-modal");
    
    // CHECK IF URL IS INSERTED AND ADD DEFAULT IMAGE
    if (url.value.trim() == "") {
        url.value = "./img/buglog.jpg";
    };

    // CHECK IF HAVE TITLE AND ADD BUG NUMBER
    if (titulo.value.trim() == "") {
        titulo.value = `Bug #${sectionCard.length + 1}`;
    };

    // CHECK IF HAVE DESCRIPTION
    if (descricao.value.trim() == "") {
        descricao.value = '...sem descrição...';
    };

    // RESET COUNTER
    let counter = document.getElementById("counter");
    let counterCircle = document.querySelector('#counter-container span');
    if (counter.length != 0) {
        counter.innerText = 130;
        counter.style.color = '';
        counterCircle.style.borderColor = '';
    };
    
    // ADD CARD
    addCard.insertAdjacentHTML('afterend', `
    <article class="main-card card">
    <div class="card-image">
        <img src="${url.value}" alt=""/>
    </div>
    <h1 class="title">${titulo.value}</h1>
    <p class="description">${descricao.value}</p>
    <button class='remove-btn'>&#215</button>
    </article>
    
    `);

    // CARD ANIMATION - SMOOTH IN 
    document.querySelector('.card').style.opacity = 0;
    document.querySelector('.card').style.transition = 'all .5s ease';
    setTimeout(()=>{
        document.querySelector('.card').style.opacity = 1;
    },200);
    
    // RETURN INPUTS TO DEFAULT (EMPTY)
    url.value = "";
    titulo.value = "";
    descricao.value = "";

    // ADD REMOVE CARD FEATURE TO THE NEW CARD
    removeCard();

    // REMOVE CLICK OUTSIDE FUNCTION LISTENER
    document.removeEventListener('click', handleClickOutsideForm, false);

    // ADD DARK/LIGHT MODE WHEN CREATE A NEW CARD
    toggle.checked ? darkMode() : lightMode();
    
    // CLOSE MODAL
    formModal.style.display = "none";
};

export function removeCard() {
    let removeButton = document.querySelectorAll('.remove-btn');
    let card = document.querySelectorAll('.card');
    for (let i = 0; i < card.length; i++) {
        removeButton[i].addEventListener('click', () => { 
            card[i].style.opacity = 0;
            card[i].style.transform = 'rotate(-20deg) translate(-10rem, -10rem)';
            setTimeout(()=>{
                card[i].remove();
            }, 500); 
        });
    };
};
