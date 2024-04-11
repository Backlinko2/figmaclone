console.log('working');
import Shery from "sheryjs";
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });



  const sliderContainer = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function updateSlider() {
    const offset = -currentIndex * slideWidth;
    sliderContainer.style.transform = `translateX(${offset}px)`;
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds