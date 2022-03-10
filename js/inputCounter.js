// COUNT INPUT CHARACTERS
export default function inputCounter() {
    let counter = document.getElementById("counter");
    let counterCircle = document.querySelector('#counter-container span');
    
    counter.innerText = `${130 - descricao.value.length}`;

    // CHECK WHEN COUNTER HIT 10 REMAIN CHARACTERS AND SET RED
    if (descricao.value.length >= 120) {
        counter.style.color = 'var(--tertiary-color)';
        counterCircle.style.borderColor = 'var(--tertiary-color)';
    } else {
        counter.style.color = '';
        counterCircle.style.borderColor = '';
    };
};