export function darkMode() {
    let toggle = document.querySelector('label[for="toggle"]');
    toggle.style.transform = 'rotate(720deg)';
    toggle.style.color = '#ccc';
    toggle.innerText = '☼';

    document.documentElement.setAttribute('style', 
        `--background-color: var(--primary-color);
        --tertiary-color: #e45858;`);

    document.getElementById('mode-label').innerText = 'Light Mode';
    document.getElementById('plus').style.color = '#ffffff50';
    
    document.querySelectorAll('.nav-icons').forEach(function(item) {
        item.style.filter = 'invert(94%) sepia(3%) saturate(23%) hue-rotate(12deg) brightness(89%) contrast(87%)';
    });
    document.querySelectorAll('h1').forEach(function(item) {
        item.style.color = '#ccc';
    });
    document.querySelectorAll('p').forEach(function(item) {
        item.style.color = '#ccc';
    });
    document.getElementById('counter').style.color = 'var(--primary-color)';
};

export function lightMode() {
    let toggle = document.querySelector('label[for="toggle"]');
    toggle.style.transform = '';
    toggle.style.color = '';
    toggle.innerHTML = '&#9790;';

    document.documentElement.setAttribute('style', '');

    document.getElementById('mode-label').innerText = 'Dark Mode';
    document.getElementById('plus').style.color = '';

    document.querySelectorAll('.nav-icons').forEach(function(item) {
        item.style.filter = '';
    });
    document.querySelectorAll('h1').forEach(function(item) {
        item.style.color = '';
    });
    document.querySelectorAll('p').forEach(function(item) {
        item.style.color = '';
    });
    document.getElementById('counter').style.color = '';
};
