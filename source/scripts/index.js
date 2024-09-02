/* document.addEventListener('DOMContentLoaded', () => {
 const btn = document.querySelector('.main-nav__toggle--open');
  btn.classList.remove('main-nav__toggle--open');
  document.documentElement.addEventListener('resize', () => {
    if(this.clientWidth < 768) {
      btn.style.display = 'grid !important';
    } else {
      btn.classList.remove('main-nav__toggle--open');
    }
  });
}); */
const nav = document.querySelector('.main-nav__list');
nav.insertAdjacentHTML('beforeBegin', '<button class="main-nav__toggle" type="button" onclick="this.classList.toggle(\'main-nav__toggle--open\')"><div class="main-nav__toggle-line"></div><span class="visually-hidden">Открыть меню</span></button>');
nav.classList.remove('no-js');
