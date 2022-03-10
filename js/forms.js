// OPEN/CLOSE ADD CARD FORM
export function openForm(){
    document.getElementById('btn-open-form').addEventListener("click", () => {
        document.getElementById('form-modal').style.display = "flex";
        setTimeout(() => { document.addEventListener("click", handleClickOutsideForm, false) },200);
    });
};

export function closeForm(){
    document.getElementById('btn-close-form').addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById('form-modal').style.display = "none";
        document.removeEventListener('click', handleClickOutsideForm, false);
        
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
        resetInputs();
    });
};

export const handleClickOutsideForm = (event) => {
    let form = document.getElementById('form');

    if (!form.contains(event.target)) {
        document.getElementById('form-modal').style.display = 'none';
        document.removeEventListener('click', handleClickOutsideForm, false);
    };
    resetInputs();
};


// ADD CARD FORM - CHECKING EMPTY INPUT (USER NEED TO ADD SOMETHING)
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


// OPEN/CLOSE LOGIN 

export function openLogin() {
    document.getElementById('login-btn').addEventListener("click", () => {
        document.getElementById('login-modal').style.display = 'flex';
        setTimeout(() => { document.addEventListener("click", handleClickOutsideLogin, false) },200);
    });
};

export function closeLogin() {
    document.getElementById('close-login').addEventListener("click", (e) => {
        document.getElementById('login-modal').style.display = 'none';
        document.removeEventListener('click', handleClickOutsideLogin, false);
    });
};

export const handleClickOutsideLogin = (event) => {
    let login = document.getElementById('login');

    if (!login.contains(event.target)) {
        document.getElementById('login-modal').style.display = 'none';
        document.removeEventListener('click', handleClickOutsideLogin, false);
    };
};

