export function darkMode() {
    let toggle = document.querySelector('label[for="toggle"]');
    toggle.style.transform = 'rotate(720deg)';
    toggle.innerText = '☼';


    document.documentElement.setAttribute('style', 
        `--background-color: var(--primary-color);
        --tertiary-color: #e45858;`);

    document.querySelector('label').style.color = '#ccc';
    document.querySelector('span').style.color = '#ffffff50';

    document.querySelectorAll('.nav-icons').forEach(function(item) {
        item.style.filter = 'invert(94%) sepia(3%) saturate(23%) hue-rotate(12deg) brightness(89%) contrast(87%)';
    });
    document.querySelectorAll('h1').forEach(function(item) {
        item.style.color = '#ccc';
    });
    document.querySelectorAll('p').forEach(function(item) {
        item.style.color = '#ccc';
    });
};

export function lightMode() {
    let toggle = document.querySelector('label[for="toggle"]');
    toggle.style.transform = '';
    toggle.innerHTML = '&#9790;';

    document.documentElement.setAttribute('style', '');

    document.querySelector('label').style.color = '';
    document.querySelector('span').style.color = '';

    document.querySelectorAll('.nav-icons').forEach(function(item) {
        item.style.filter = '';
    });
    document.querySelectorAll('h1').forEach(function(item) {
        item.style.color = '';
    });
    document.querySelectorAll('p').forEach(function(item) {
        item.style.color = '';
    });
};

let toggle = document.querySelector('#toggle');

toggle.addEventListener('change', function() {
    if (toggle.checked) {
        darkMode();
    } else {
        lightMode();
    };
});
