let slideIndex = 0;
const slides = document.querySelectorAll('.slider-card');

function showSlide(n) {
  slideIndex = n;

  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  slides.forEach(slide => slide.style.display = 'none');
  slides[slideIndex].style.display = 'block';
}

document.querySelector('.next').onclick = () => showSlide(slideIndex + 1);
document.querySelector('.prev').onclick = () => showSlide(slideIndex - 1);

// Auto slide
setInterval(() => showSlide(slideIndex + 1), 5000);

// Menu
document.getElementById("menuToggle").onclick = () => {
  document.getElementById("navMenu").classList.toggle("active");
};

// Init
showSlide(slideIndex);
