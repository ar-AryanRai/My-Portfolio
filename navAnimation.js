gsap.from("nav .left .current, nav .left .rest-opt", {
  delay: 0.5,
  duration: 1,
  opacity: 0,
  stagger: 0.1,
  y: -50,
});

gsap.to("nav .contact", {
  delay: 1.2,
  duration: 0.5,
  opacity: 1,
});
