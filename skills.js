gsap.from(".skill-container", {
  duration: 1.2, 
  scale: 0.2,
  opacity: 0,
});

gsap.from(".skill-container-2 div", {
  duration: 2,
  delay: 1,
  scale: 0.2,
  opacity: 0,
  ease: "back.out",
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
