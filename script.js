// When the DOM content is fully loaded, run the revealSections function
document.addEventListener("DOMContentLoaded", function () {
  revealSections();
});

// Function to reveal all child elements of .hero-section
function revealSections() {
  // Select all child elements of .hero-section
  const elements = document.querySelectorAll(".hero-section > *");

  // Add 'show' class to each child element, revealing them
  elements.forEach((element) => {
    element.classList.add("show");
  });
}

// When the DOM content is fully loaded, run the revealOnScroll function
document.addEventListener("DOMContentLoaded", function () {
  revealOnScroll();
});

// Function to reveal elements on scroll
function revealOnScroll() {
  // Select all elements to be revealed on scroll
  const elementsToShow = document.querySelectorAll(
    ".section-one, .location-map, .about-us-content, .before-after, .reviews-content, .iPhones-mobile, form, .date-time, .iPhones-desktop"
  );

  // Loop through each element to check if it should be revealed
  elementsToShow.forEach((element) => {
    // Get the distance between the top of the element and the top of the viewport
    const elementTop = element.getBoundingClientRect().top;
    // Get the height of the viewport
    const windowHeight = window.innerHeight;

    // If the element is within 75% of the viewport height, reveal it
    if (elementTop < windowHeight * 0.75) {
      element.classList.add("show");
    }
  });
}

// Add event listener to window for scroll events
window.addEventListener("scroll", revealOnScroll);
