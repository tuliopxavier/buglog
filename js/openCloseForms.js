import inputCounter from "./inputCounter.js"

// abrir e fechar formulário de adicionar card
export function openForm(){
    document.getElementById('btn-open-form').addEventListener("click", () => {
        document.getElementById('form-modal').style.display = "flex";
        setTimeout(() => { document.addEventListener("click", handleClickOutside, false) },200);
    });
};

export function closeForm(){
    document.getElementById('btn-close-form').addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById('form-modal').style.display = "none";
        document.removeEventListener('click', handleClickOutside, false);
        
        // retornar os inputs ao padrão (vazio)
        document.getElementById("url_img").value = "";
        document.getElementById("titulo").value = "";
        document.getElementById("descricao").value = "";
        // reseta contador
        if (counter.length != 0) {
            counter.innerText = 130;
            counter.style.color = '';
            document.querySelector('#counter-container span').style.borderColor = '';
        };
    });
};

export const handleClickOutside = (event) => {
    let form = document.getElementById('form');

    if (!form.contains(event.target)) {
        document.getElementById('form-modal').style.display = 'none';
        document.removeEventListener('click', handleClickOutside, false);
    };
};


// abrir e fechar login 

export let openLogin = () => {
    const modal = document.getElementById('login-modal-container')
    modal.classList.add('mostrar')
};

export let closeLogin = () => {
    const modal = document.getElementById('login-modal-container');
    modal.classList.remove('mostrar')
};

