function openModal() {
    var modalContainer = document.querySelector('.modal-container');
    modalContainer.classList.add('show');
    document.body.style.overflow = 'hidden'; // Запрет прокрутки фона
}

function closeModal() {
    var modalContainer = document.querySelector('.modal-container');
    modalContainer.classList.remove('show');
    document.body.style.overflow = ''; // Восстановление прокрутки фона
}

let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 1390;
    if (offset > 6600) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 1390;
    if (offset < 0) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});