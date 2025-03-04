const navLinks = document.querySelectorAll(
  ".rest-opt, .contact, .contact-me, .other-projects"
);

// Function to animate and redirect
const navigateTo = (path) => {
  gsap.to("body", {
    opacity: 0,
    duration: 0.6,
    onComplete: () => (window.location.href = path),
  });
};

// Fade-in effect when a new page loads
gsap.to("body", { opacity: 1, duration: 1 });

// Attach event listeners to all nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    let targetClass = event.target.classList;

    if (targetClass.contains("home")) navigateTo("index.html");
    else if (targetClass.contains("about")) navigateTo("aboutMe.html");
    else if (targetClass.contains("contact")) navigateTo("contact.html");
    else if (targetClass.contains("contact-me")) navigateTo("contact.html");
    else if (targetClass.contains("other-projects"))
      navigateTo("moreProjects.html");
    else if (targetClass.contains("projects")) navigateTo("projects.html");
    else if (targetClass.contains("skills")) navigateTo("skills.html");
  });
});
