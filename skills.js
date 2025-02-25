gsap.from(".skill-container", {
  duration: 1.2,
  // y: -100,
  scale: 0,
  opacity: 0,
  ease: "sine.out",
});

gsap.from(".skill-container-2 div", {
  duration: 2,
  // y: -100,
  delay: 1,
  scale: 0,
  opacity: 0,
  ease: "back.out",
  stagger: 0.2,
});
