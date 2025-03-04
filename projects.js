gsap.from(".btns .contact-me, .btns .other-projects", {
  delay: 2.2,
  duration: 1,
  ease: "power1.out",
  opacity: 0,
});

gsap.from(".swiper-container", {
  delay: 1.2,
  duration: 2,
  ease: "power1.out",
  opacity: 0,
});

gsap.from(".swiper-wrapper div", {
  delay: 1.5,
  duration: 2,
  ease: "power1.out",
  opacity: 0,
  stagger: 0.1,
});

const open = document.querySelector(".nav2 .fa-bars");
const close = document.querySelector(".nav2 .fa-xmark");

open.addEventListener("click", () => {
  gsap.to(".options-list", {
    x: 0,
    duration: 0.5,
    onStart: () => {
      document.querySelector(".options-list").style.display = "flex";
    },
  });
});

close.addEventListener("click", () => {
  gsap.to(".options-list", {
    x: 200,
    duration: 0.5,
    onComplete: () => {
      document.querySelector(".options-list").style.display = "none";
    },
  });
});
