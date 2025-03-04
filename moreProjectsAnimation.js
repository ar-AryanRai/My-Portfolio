document.querySelectorAll(".container div").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(el, { scale: 1.2, duration: 0.4 });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(el, { scale: 1, duration: 0.4 });
  });
});

gsap.from(".container", {
  delay: 1,
  duration: 2,
  // y: -100,
  scale: 0,
  opacity: 0,
  // ease: 'bounce'
});

gsap.from(".container div, .topic", {
  delay: 2,
  duration: 2,
  scale: 0,
  opacity: 0,
  ease: "back.out",
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

function openStart() {
  gsap.from(".notification", {
    duration: 2,
    delay: 4,
    x: 380,
    opacity: 0,
    ease: "bounce.out",
    onStart: () => {
      document.querySelector(".notification").style.display = "block";
    },
  });

  gsap.to(".notification", {
    duration: 1,
    delay: 8,
    x: 380,
    opacity: 0,
    onComplete: () => {
      document.querySelector(".notification").style.display = "none";
    },
  });
}

openStart();
