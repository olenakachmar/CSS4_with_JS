const modal = document.getElementById('myModal');
const images = [...document.getElementsByClassName('main__portfolio-list-elem')];
const modalImg = document.getElementById('moduleImg');

const closeModal = () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'visible';
};

function openModal() {
  modal.style.display = 'flex';
  modalImg.src = this.children[0].src;
  document.body.style.overflow = 'hidden';
}

const modalWindow = {
  init: () => {
    images.forEach((e) => e.addEventListener('click', openModal));
    modal.addEventListener('click', closeModal);
  },
};

export default modalWindow;
