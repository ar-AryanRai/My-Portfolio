const textElement = document.querySelector(".my-name");
const text = textElement.textContent.split("");

textElement.innerHTML = text
  .map((letter) => (letter === " " ? "&nbsp;&nbsp;" : `<span>${letter}</span>`))
  .join("");

gsap.from(".my-name span", {
  delay: 1,
  duration: 1,
  opacity: 0,
  stagger: 0.1,
  repeat: -1,
  repeatDelay: 1,
});

gsap.from(".image", {
  delay: 1,
  duration: 3,
  opacity: 0,
});

gsap.from(".blob p", {
  delay: 1,
  duration: 1,
  opacity: 0,
  stagger: 1,
});

gsap.from(".blob button", {
  delay: 2.5,
  duration: 1,
  opacity: 0,
});

// nav 2 animation (mobile)

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
