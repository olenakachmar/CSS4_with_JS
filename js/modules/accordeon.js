const dropdownArr = [...document.getElementsByClassName('main__whatWeDo-dropdown')];
const panel = [...document.getElementsByClassName('main__whatWeDo-panel')];
const dropdownImage = document.querySelector('.main__whatWeDo-image').firstElementChild;
const arrowsList = [...document.getElementsByClassName('arrow')];

panel[0].style.display = 'flex';
arrowsList[0].classList = 'fas fa-chevron-up fa-2x';

const switchHandler = (evt) => {
  const evtId = evt.currentTarget.id;
  const arrow = evt.currentTarget.firstElementChild.lastElementChild
      .firstElementChild;

  if (evt.currentTarget.nextElementSibling.style.display === 'flex') {
    arrow.classList = 'fas fa-chevron-down fa-2x';
    hideAll();
    evt.currentTarget.nextElementSibling.style.display === 'none';
  } else {
    hideAll();
    arrow.classList = 'fas fa-chevron-up fa-2x';
    evt.currentTarget.nextElementSibling.style.display = 'flex';
  }

  switch (evtId) {
    case ('design'):
      dropdownImage.src = 'images/our-blog/img-1.jpg';
      break;
    case ('photography'):
      dropdownImage.src = 'images/what-we-do/img-1.jpg';
      break;
    case ('creativity'):
      dropdownImage.src = 'images/our-blog/img-2.jpg';
      break;
  }
};

const hideAll = () => {
  panel.forEach((e) => e.style.display = 'none');
  arrowsList.forEach((e) => e.classList = 'fas fa-chevron-down fa-2x');
};

const accordeon = {
  init: () => {
    dropdownArr.forEach((el) => el.addEventListener('click', switchHandler));
  },
};

export default accordeon;
