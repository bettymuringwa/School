// script.js

// Load the nav.html into the #navbar div
document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
});
