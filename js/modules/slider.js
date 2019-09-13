const iconTestemonialPrev = document.getElementById('icon-testemonial-prev');
const iconTestemonialNext = document.getElementById('icon-testemonial-next');
const userTestemonialPrev = document.getElementById('user-testemonial-prev');
const userTestemonialNext = document.getElementById('user-testemonial-next');

const slideCounter = [1, 1];
const slideId = ['main__testemonial-wrapper1', 'main__testemonial-wrapper2'];

showSlides(1, 0);
showSlides(1, 1);

function plusSlides(slideNum, slideIndex) {
  showSlides(slideCounter[slideIndex] += slideNum, slideIndex);
}

function showSlides(slideNum, slideIndex) {
  const slide = [...document.getElementsByClassName(slideId[slideIndex])];

  if (slideNum > slide.length) {
    slideCounter[slideIndex] = 1;
  }

  if (slideNum < 1) {
    slideCounter[slideIndex] = slide.length;
  }

  slide.forEach((e) => e.style.display = 'none');
  slide[slideCounter[slideIndex] - 1].style.display = 'flex';
}

const carousel = {
  init: () => {
    iconTestemonialPrev.addEventListener('click', function() {
      plusSlides(-1, 0);
    });
    iconTestemonialNext.addEventListener('click', function() {
      plusSlides(1, 0);
    });
    userTestemonialPrev.addEventListener('click', function() {
      plusSlides(-1, 1);
    });
    userTestemonialNext.addEventListener('click', function() {
      plusSlides(1, 1);
    });
  },
};

export default carousel;
