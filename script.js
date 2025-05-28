const menu = document.getElementById('menu');
const btn_menu = document.getElementById('btn-menu');
const openPopUp = document.getElementById('openPopUp');
const closePopUp = document.getElementById('pop-up-close');
const popUp = document.getElementById('pop-up');
const btn_promo = document.getElementById('btn-promo');
const promo = document.getElementById('promo');


btn_menu.addEventListener('click', function(e){
    e.preventDefault();
    menu.classList.toggle('active');
});

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !btn_menu.contains(e.target)) {
        menu.classList.remove('active');
    }
});

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
});

closePopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.remove('active');
});


document.addEventListener('click', function (e) {
    if (!promo.contains(e.target) && !btn_promo.contains(e.target)) {
        promo.classList.remove('active');
    }
});


btn_promo.addEventListener('click', function (e)  {
    e.preventDefault();
    if (promo.classList.contains('active')) {
        promo.classList.remove('active');

        // Затримка перед встановленням display: none
        setTimeout(() => {
            promo.style.display = 'none';
        }, 500); // Час повинен відповідати тривалості анімації
    } else {
        promo.style.display = 'flex'; // Встановлюємо display: flex
        setTimeout(() => {
            promo.classList.add('active'); // Додаємо клас після короткої затримки
        }, 10); // Невелика затримка для активації transition
    }
});
