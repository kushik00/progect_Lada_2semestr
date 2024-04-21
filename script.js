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