const scroll_button = document.querySelector("#scroll-up");
const sections = document.querySelectorAll("section[id]");


// Whe the page in scrolling
window.onscroll = () => {
  scrollUp();
  scrollActive();
};
scrollUp();
scrollActive();

// Back to top button
scroll_button.onclick = () => {
  document.body.scrollUp = 0;
  document.documentElement.scrollTop = 0;
}

// Scroll Reveal config
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: false
});

sr.reveal(".home-header, .section-title", {delay: 600});
sr.reveal(".home-footer", {delay: 700});
sr.reveal(".home-image", {delay: 900, origin: "top"});

sr.reveal(
  ".sponsor-image, .products-card, .footer-logo, .footer-content, .footer-copy",
  {origin: "top", interval: 100}
);
sr.reveal(".specs-data, .discount-animate", {origin: "left", interval: 100});
sr.reveal(".specs-image, .discount-image", {origin: "right"});
sr.reveal(".case-image", {origin: "top"});
sr.reveal(".case-data");


function scrollUp() {
  if(scrollY >= 200) {
    scroll_button.style.bottom = "5rem";
  } else {
    scroll_button.style.bottom = "-100%";
  }
}

function scrollActive() {
  const scrollY = window.pageYOffset; // ???

  sections.forEach(e => {
    const sectionHeight = e.offsetHeight;
    const sectionTop = e.offsetTop - 50;

    const sectionId = e.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`a[href="#${sectionId}"]`).classList.add("nav-link_active");
    } else {
      document.querySelector(`a[href="#${sectionId}"]`).classList.remove("nav-link_active");
    }
  });
}
