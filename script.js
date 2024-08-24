document.addEventListener("DOMContentLoaded", function () {
  // Check visibility of sections
  const sections = document.querySelectorAll("section");

  function checkSectionInView() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      } else {
        section.classList.remove("visible");
      }
    });
  }

  checkSectionInView();
  window.addEventListener("scroll", checkSectionInView);

  // Smooth scroll to contact section
  document
    .querySelector(".contact-button")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });

  // Parallax effect
  document.addEventListener("scroll", function () {
    const parallaxElements = document.querySelectorAll(".parallax");

    parallaxElements.forEach((element) => {
      const scrollPosition = window.scrollY;
      element.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
  });

  // Hover effect for project images
  const images = document.querySelectorAll(".project-img");

  images.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.style.transform = "scale(1.1)";
    });
    image.addEventListener("mouseleave", () => {
      image.style.transform = "scale(1)";
    });
  });

  // Tooltip effect
  const tooltips = document.querySelectorAll(".tooltip");

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseenter", function () {
      const tooltipText = this.querySelector(".tooltip-text");
      tooltipText.style.opacity = "1";
      tooltipText.style.visibility = "visible";
    });
    tooltip.addEventListener("mouseleave", function () {
      const tooltipText = this.querySelector(".tooltip-text");
      tooltipText.style.opacity = "0";
      tooltipText.style.visibility = "hidden";
    });
  });

  // Reveal effect
  document.addEventListener("scroll", function () {
    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach((element) => {
      const revealTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (revealTop < windowHeight - 100) {
        element.classList.add("revealed");
      } else {
        element.classList.remove("revealed");
      }
    });
  });

  // Slide-in effect
  document.addEventListener("scroll", function () {
    const slideInElements = document.querySelectorAll(".slide-in");

    slideInElements.forEach((element) => {
      const slideInTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (slideInTop < windowHeight - 100) {
        element.classList.add("slide-in-active");
      } else {
        element.classList.remove("slide-in-active");
      }
    });
  });
});

document.addEventListener("scroll", function () {
  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
});
