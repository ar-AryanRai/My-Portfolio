const textElement = document.querySelector(".content p");

document.querySelector(".download").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "./files/Aryan_Resume_1.pdf"; // Replace with your file URL
  link.download = "Aryan-Resume.pdf"; // Rename the file if needed
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

console.log(window.innerWidth);

if (window.innerWidth <= 430) {
  textElement.innerHTML = `I'm Aryan Rai, a passionate self taught frontend
        developer dedicated to craf-ting engaging, user-centric web exp-eriences. My commitment to learning and
        exploring new technologies emp-owers me to specialize in creating &nbsp &nbsp &nbsp &nbsp responsive,
        interactive websites that &nbsp captivate users using HTML, CSS, Tail-wind, JavaScript, Reactjs, and GSAP.`;
} else {
  textElement.innerHTML = `I'm Aryan Rai, a passionate self taught frontend developer dedicated to crafting engaging, user-centric web experie-nces. My commitment to learning and exploring new tech-nologies empowers me to specialize in creating responsive, interactive websites that captivate users using HTML, CSS, Tailwind, JavaScript, Reactjs, and GSAP.`;
}

const text = textElement.textContent.split(" ");

textElement.innerHTML = text
  .map((letter) => `<span>${letter}</span>`)
  .join(" ");

const spanList = document.querySelectorAll(".content p span");
spanList.forEach((ele) => {
  const contentList = ele.textContent.split("");
  ele.innerHTML = contentList
    .map((letter) =>
      letter === " " ? "&nbsp;&nbsp;" : `<span>${letter}</span>`
    )
    .join("");
});

gsap.from(".content p span span", {
  delay: 1.2,
  opacity: 0,
  stagger: 0.02,
});

gsap.from(".left-side", {
  delay: 1,
  duration: 2,
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
  duration: 0.5,
  scale: 0,
  opacity: 0,
});

gsap.from(".content .btn .download", {
  delay: 7,
  duration: 1,
  scale: 0,
  opacity: 0,
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
