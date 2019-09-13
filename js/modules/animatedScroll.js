/* eslint-disable max-len */
const animatedScroll = {
  init: () => {
    const nav = document.querySelector('.header__navbar');
    const headerHeight = document.getElementsByClassName('header')[0].offsetHeight;

    window.scrollY >= headerHeight ?
      nav.classList.add('header__navbar--scroll') :
      nav.classList.remove('header__navbar--scroll');
  },
};

export default animatedScroll;

