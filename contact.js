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
