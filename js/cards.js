import { handleClickOutside } from "./forms.js"

export function addCard(e) {
    // previnir o comportamento padrão de carregamento
    e.preventDefault();

    //selecionar o id dos campos
    let url = document.getElementById("url_img");
    let titulo = document.getElementById("titulo");
    let descricao = document.getElementById("descricao");

    // selecionar campo onde colocaremos os cards
    let addCard = document.getElementById('btn-open-form');
    let sectionCard = document.getElementsByClassName('card')

    //Selecionando o modal
    let formModal = document.querySelector("#form-modal");
    
    //verificando se não foi adicionado url e adiciona uma imagem padrão
    if (url.value.trim() == "") {
        url.value = "./img/buglog.jpg";
    };

    // verificando se está sem título e adiciona o número do bug
    if (titulo.value.trim() == "") {
        titulo.value = `Bug #${sectionCard.length + 1}`;
    };

    // verificando se está sem descrição
    if (descricao.value.trim() == "") {
        descricao.value = '...';
    };

    // reseta contador
    let counter = document.getElementById("counter");
    let counterCircle = document.querySelector('#counter-container span');
    if (counter.length != 0) {
        counter.innerText = 130;
        counter.style.color = '';
        counterCircle.style.borderColor = '';
    };
    
    //Inserimos cards
    
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

    // Fazer o card aparecer de forma suave
    document.querySelector('.card').style.opacity = 0;
    document.querySelector('.card').style.transition = 'all .5s ease';
    setTimeout(()=>{
        document.querySelector('.card').style.opacity = 1;
    },200);
    
    // retornar os inputs ao padrão (vazio)
    url.value = "";
    titulo.value = "";
    descricao.value = "";

    // adiciona a funcionalidade de apagar ao cartão recém criado
    removeCard();

    // removendo o listener de fechar o form ao clicar fora
    document.removeEventListener('click', handleClickOutside, false);
    
    // fecha o modal
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