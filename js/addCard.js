import removeCard from "./removeCard.js";
import { handleClickOutside } from "./openCloseForms.js"

export default function addCard(e) {
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

    //checa se não foi adicionado url e adiciona uma imagem padrão
    if (url.value == "") {
        url.value = "./img/buglog.jpg";
    };

    // checa se está sem título e adiciona o número do bug
    if (titulo.value == "") {
        titulo.value = `Bug #${sectionCard.length + 1}`;
    };

    // checa se está sem descrição
    if (descricao.value == "") {
        descricao.value = '...';
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