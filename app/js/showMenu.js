const menu = document.getElementsByClassName('header__menu')[0];
const page = document.getElementsByClassName('page')[0];

const showMenuHandler = () => {
  menu.classList.remove('animate__slideOutUp');
  menu.classList.add('visible', 'animate__animated', 'animate__slideInDown');
  page.classList.add('lock');
};

const hideMenuHandler = () => {
  menu.classList.remove('animate__slideInDown');
  menu.classList.add('animate__slideOutUp');
  page.classList.remove('lock');

  console.log('gtrh');

  setTimeout(() => {
    menu.classList.remove('visible');
  }, 1500)
};

document.getElementsByClassName('header__menubtn')[0].addEventListener('click', showMenuHandler);

document.getElementsByClassName('header__close')[0].addEventListener('click', hideMenuHandler);

document.getElementsByClassName('header__ul')[0].addEventListener('click', hideMenuHandler);
