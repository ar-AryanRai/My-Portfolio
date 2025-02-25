// import Swiper from "swiper";

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow", // Enables the 3D effect
  // grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto", // Adjusts slide size automatically
  coverflowEffect: {
    rotate: 45, // Angle of rotation for the side slides
    stretch: 0, // Adjust spacing between slides
    depth: 450, // 3D depth effect
    modifier: 1, // Strength of the 3D effect
    slideShadows: true, // Adds shadows to slides
  },
  loop: true, // Infinite loop mode
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: {
    invert: false, // Change to `true` if the scroll direction feels reversed
    sensitivity: 1, // Adjust sensitivity (higher = faster scroll)
    releaseOnEdges: true, // Allows scrolling to continue after the last slide
  },
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
