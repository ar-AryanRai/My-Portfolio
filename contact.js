gsap.from(".top-side", {
  duration: 1,
  delay: 1,
  y: -100,
  opacity: 0,
  ease: "bounce",
});

gsap.from(".bottom .left-side img", {
  duration: 1,
  delay: 1.5,
  x: -200,
  opacity: 0,
  stagger: 0.2,
});

gsap.from(".bottom .right-side div", {
  duration: 1,
  delay: 1.5,
  x: 200,
  opacity: 0,
  stagger: 0.2,
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
