// Hamburger Button
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const navLinks = document.querySelectorAll('.nav-link'); // Get all the links in the menu

    // Toggle the mobile menu when the hamburger is clicked
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("-translate-x-full"); // Slide in/out
    });

    // Add event listener to each nav link to close the menu and highlight the selected link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Remove the active classes from all links
            navLinks.forEach(link => link.classList.remove('bg-neutral-900', 'text-white', 'font-bold'));

            // Add active class to the clicked link
            link.classList.add('bg-neutral-900', 'text-white', 'font-bold');

            // Close the mobile menu after selecting an option
            mobileMenu.classList.add("-translate-x-full"); // Slide the menu out
        });
    });
});

// Taking navbar height into account when clicking on navbar links
document.addEventListener("DOMContentLoaded", function () {
    // Handle the smooth scroll for anchor links
    const links = document.querySelectorAll("a[href^='#']");
  
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        // Get the height of the navbar, ensuring it's correct for any screen size
        const navbar = document.querySelector("nav");
        const navbarHeight = navbar.offsetHeight;
  
        // Check if the page is in mobile or desktop view and adjust navbar height accordingly
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
  
        // Close the hamburger menu if it's open (on mobile)
        const hamburgerMenu = document.querySelector(".hamburger-menu");
        if (hamburgerMenu) {
          hamburgerMenu.classList.add("hidden"); // Hide the menu
        }
      });
    });
  
    // Handle toggling the hamburger menu visibility
    const navbarToggleButton = document.querySelector(".navbar-toggle"); // Adjust based on your hamburger button class
  
    navbarToggleButton.addEventListener("click", function () {
      const hamburgerMenu = document.querySelector(".hamburger-menu");
      hamburgerMenu.classList.toggle("hidden"); // Toggle the visibility of the menu
    });
  });  

// Navbar to remain highlighted depending on which page