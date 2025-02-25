gsap.from(".btns .contact-me, .btns .other-projects", {
  delay: 2.2,
  duration: 1,
  ease: "power1.out",
  opacity: 0,
});

gsap.from(".swiper-container", {
  delay: 1.7,
  duration: 2,
  ease: "power1.out",
  opacity: 0,
});

gsap.from(".swiper-wrapper div", {
  delay: 1.7,
  duration: 2,
  ease: "power1.out",
  opacity: 0,
  stagger: 0.1,
});
