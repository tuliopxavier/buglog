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
        let counter = document.getElementById("counter");
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


// formulario de adicionar bugs - verificando se tem algum input vazio (o usuário precisa inserir alguma informação)
let url = document.getElementById("url_img");
let titulo = document.getElementById("titulo");
let inputAddCard = document.querySelectorAll('.input-add-card');


export const addButtonValidate = () => {
    if (descricao.value.trim() == "" && titulo.value.trim() == "" && url.value.trim() == "") {
        document.getElementById("btn_Salvar").disabled = true;
        document.getElementById("btn_Salvar").style.color = 'var(--tertiary-color)';
        document.getElementById("btn_Salvar").innerText = 'Preencha pelo menos um campo';
        document.getElementById("btn_Salvar").style.boxShadow = '0px 0px 0px 1px var(--tertiary-color)';
        document.getElementById("btn_Salvar").style.fontSize = '.75rem';
        inputAddCard.forEach(item => { item.style.boxShadow = '0px 0px 0px 1px var(--tertiary-color)'; });
    } else if (descricao.value.trim() != "" || titulo.value.trim() != "" || url.value.trim() != "") {
        document.getElementById("btn_Salvar").removeAttribute("disabled");
    }
};

export const resetInputs = () => {
    document.getElementById("btn_Salvar").style.color = '';
    document.getElementById("btn_Salvar").innerText = 'Adicionar';
    document.getElementById("btn_Salvar").style.boxShadow = '';
    document.getElementById("btn_Salvar").style.fontSize = '';
    inputAddCard.forEach(item => { item.style.boxShadow = ''; });
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

