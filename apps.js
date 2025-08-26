// NavBar Elements
const body = document.querySelector("body"), // Select the <body> element //
      nav = document.querySelector("nav"), // Select the <nav> element (for the sidebar) //
      modeToggle = document.querySelector(".dark-light"), // Dark/Light mode toggle button //
      searchToggle = document.querySelector(".searchToggle"), // Search toggle (add in later version -- get it to work) //
      sidebarOpen = document.querySelector(".sidebarOpen"), // Hamburger open button //
      sidebarClose = document.querySelector(".sidebarClose"); // Hamburger close button //

// Load saved mode from localStorage
let getMode = localStorage.getItem("mode"); // Retrieve either "dark-mode" or "light-mode" from localStorage //

// Check if dark mode is saved in localStorage, and apply it //
if (getMode === "dark-mode") {
  body.classList.add("dark"); // Add the "dark" class to <body> to apply dark theme styles //
  modeToggle.classList.add("active"); // Add "active" class to  mode toggle button to show correct icon (sun/moon) //
} else {
  body.classList.remove("dark"); // Remove the "dark" class for light theme //
  modeToggle.classList.remove("active"); // Remove "active" class from  mode toggle button for light theme //
}

// Dark/Light Mode Toggle Event Listener //
modeToggle.addEventListener("click", () => {
  // Toggle the "active" class for the mode toggle button to change the icon (sun <-> moon) //
  modeToggle.classList.toggle("active");
  
  // Toggle the "dark" class on the <body> element to switch themes //
  body.classList.toggle("dark");

  // Check if dark mode is active and store it in localStorage //
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode"); // Store light mode in localStorage //
  } else {
    localStorage.setItem("mode", "dark-mode"); // Store dark mode in localStorage //
  }

  // Toggle visibility of the sun and moon icons based on the active mode //
  document.querySelector(".moon").classList.toggle("active"); // Show or hide the moon icon //
  document.querySelector(".sun").classList.toggle("active"); // Show or hide the sun icon //
});

// Open Sidebar Event Listener (Hamburger Menu) //
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active"); // Add "active" class to <nav> to display sidebar //
});

// Close Sidebar Event Listener (Close Button) //
sidebarClose.addEventListener("click", () => {
  nav.classList.remove("active"); // Remove "active" class from <nav> to hide  sidebar //
});

// Close Sidebar when clicking outside  menu or hamburger
body.addEventListener("click", e => {
  // Check if the click is outside the sidebar and  hamburger button //
  if (!e.target.closest(".menu") && !e.target.closest(".nav-bar") && !e.target.classList.contains("sidebarOpen")) {
    nav.classList.remove("active"); // Close the sidebar if user clicks outside //
  }
});

// Typewriter Effect for the Hero Section //
const text = "Where Every Click Bubbles with Possibility!"; // Text to apply Typwriter Effect //
const typewriterElement = document.getElementById("typewriter"); // Select element to display the typed text //
let index = 0; // Initialize an index to keep track of current character //

// Function to start typing effect //
function typeWriter() {
  if (index < text.length) { // Continue typing until all characters are shown //
    typewriterElement.innerHTML += text.charAt(index); // Append next character to <h1> element //
    index++; // Increment index to move to next character //
    setTimeout(typeWriter, 100); // Call function again after 100ms to type next character //
  }
}

window.addEventListener("load", () => {
  typeWriter(); // Start the typewriter effect when the page loads //
});

// Cursor Trail Effect (Bubble Cursor) //
// Initialize bubble cursor effect//
window.addEventListener("load", (event) => {
  new cursoreffects.bubbleCursor(); // Create new instance of bubble cursor effect //
});

