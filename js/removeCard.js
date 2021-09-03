export default function removeCard() {
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

removeCard();