let currentIndex = 0;

function nextSlide() {
  const slides = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slides img').clientWidth;
  const totalSlides = document.querySelectorAll('.slides img').length;

  if (currentIndex < totalSlides - 3) {
    currentIndex++;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
}

function prevSlide() {
  const slides = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slides img').clientWidth;

  if (currentIndex > 0) {
    currentIndex--;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
}
