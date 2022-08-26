
// tabs
$(function() {
  $('.tabs__btn').on('click', function(e) {
    e.preventDefault();

    $('.tabs__btn').removeClass('tabs__btn--active');
    $('.cottages__body').removeClass('cottages__body--active');

    $(this).addClass('tabs__btn--active');
    $($(this).attr('href')).addClass('cottages__body--active');
  });
});


// Burger handler

(function () {
  const burgerItem = document.querySelector('.menu__icon');  
  const menu = document.querySelector('.menu__list');
  const menuLinks = document.querySelectorAll('.menu__link');
  const menuButton = document.querySelector('.menu__btn-fill');


  burgerItem.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    menu.classList.toggle('menu__list--active');
    burgerItem.classList.toggle('menu__icon--active');
  });

  if(window.innerWidth <= 992) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('menu__list--active');
        burgerItem.classList.remove('menu__icon--active');
        document.body.classList.remove('_lock');
      }); 
    }
    menuButton.addEventListener('click', () => {
      menu.classList.remove('menu__list--active');
      burgerItem.classList.remove('menu__icon--active');
      document.body.classList.remove('_lock');
    });
  }
}());

