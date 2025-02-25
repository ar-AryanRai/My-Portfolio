const textElement = document.querySelector(".content p");
const text = textElement.textContent.split(" ");

textElement.innerHTML = text
  .map((letter) => (letter === " " ? "&nbsp;&nbsp;" : `<span>${letter}</span>`))
  .join(" ");

console.log(textElement.innerHTML);

const spanList = document.querySelectorAll(".content p span");
spanList.forEach((ele) => {
  const contentList = ele.textContent.split("");
  ele.innerHTML = contentList
    .map((letter) =>
      letter === " " ? "&nbsp;&nbsp;" : `<span>${letter}</span>`
    )
    .join("");

  console.log(ele.innerHTML);
});

gsap.from(".content p span span", {
  delay: 1.5,
  // duration: 3,
  // y: 100,
  opacity: 0,
  stagger: 0.02,
});

gsap.from(".left-side", {
  delay: 1,
  duration: 4,
  opacity: 0,
});

gsap.from(".left-side img", {
  delay: 1,
  duration: 1,
  opacity: 0,
});

gsap.from(".right-side", {
  delay: 1,
  duration: 4,
  opacity: 0,
});

gsap.from(".content h1", {
  delay: 1,
  duration: 1,
  scale: 0,
  opacity: 0,
});

gsap.from(".content .btn .download", {
  delay: 7,
  duration: 2,
  scale: 0,
  opacity: 0,
});
