// script.js
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");
  const html = document.documentElement;

  console.log("Script loaded!"); // Debugging

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    html.classList.add("dark");
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
    console.log("Dark mode enabled on load."); // Debugging
  } else {
    html.classList.remove("dark");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
    console.log("Light mode enabled on load."); // Debugging
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");

    // Save theme preference in localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Toggle icons
    moonIcon.classList.toggle("hidden", !isDark);
    sunIcon.classList.toggle("hidden", isDark);

    console.log(`Theme toggled to ${isDark ? "dark" : "light"} mode.`); // Debugging
  });
});
