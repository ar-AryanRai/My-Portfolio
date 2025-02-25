const textElement = document.querySelector(".my-name");
const text = textElement.textContent.split("");

textElement.innerHTML = text
  .map((letter) => (letter === " " ? "&nbsp;&nbsp;" : `<span>${letter}</span>`))
  .join("");

gsap.from(".my-name span", {
  delay: 1,
  duration: 1,
  opacity: 0,
  stagger: 0.2,
  repeat: -1,
  repeatDelay: 1,
});

gsap.from(".image", {
  delay: 1,
  duration: 5,
  opacity: 0,
});

gsap.from(".blob p", {
  delay: 1,
  duration: 1.2,
  opacity: 0,
  stagger: 1,
});

gsap.from(".blob button", {
  delay: 3,
  duration: 2,
  opacity: 0,
});
