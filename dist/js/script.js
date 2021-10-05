window.addEventListener('DOMContentLoaded', function() { 
     // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
           modal = document.querySelector('.popup');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
       modal.classList.add('show');
        modal.classList.remove('hide');
       document.body.style.overflow = 'hidden';
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '' ) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.header-menu'),
      closeElem = document.querySelector('.header-burger-close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});