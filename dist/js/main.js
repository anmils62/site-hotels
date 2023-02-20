// burger
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burger').addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('is-active')
    });
});

// pop-up 
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.querySelector('.header__popup'),
        popupForm = document.querySelector('.header__popup-form'),
        openPopupButton = document.querySelectorAll('.js-popup'),
        closePopup = document.querySelector('.header__close-popup');
       
    openPopupButton.forEach((button) => {
        button.addEventListener('click', () => {
            popup.classList.add('active');
        })
    });

    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
        if(e.target === popup) {
            popup.classList.remove('active');
        }
    });
});


// раздел услуги. раскрытие карточек при нажатии на кнопку 'Показать все'
document.addEventListener('DOMContentLoaded', function() {
    const buttonShowAll = document.getElementById('btn-all'),
        serviceCard = document.querySelectorAll('.services-mobile');      

    serviceCard.forEach((card) =>  {
        buttonShowAll.addEventListener('click', () => {
            card.classList.toggle('services-active');
        })
    })

    buttonShowAll.addEventListener('click', () => {
        if (buttonShowAll.innerHTML === 'Показать все') {
            buttonShowAll.innerHTML = 'Скрыть';
        } else {
            buttonShowAll.innerHTML = 'Показать все';
        }
    })
});

// раздел размещение. раскрытие карточек при нажатии на кнопку
document.addEventListener('DomContentLoaded', function () {
    const placementCard = document.querySelectorAll('.none-card');
    const linkShowAll = document.getElementById('link-all');

    placementCard.forEach((cards) => {
        linkShowAll.addEventListener('click', () => {
            cards.classList.toggle('card-active');
        })
    })
});

   


    
