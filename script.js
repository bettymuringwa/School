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

// Load the footer.html into the #footer div
document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});

//Load for banner 
var i = 0;
var path = [];
path[0] = "images/ig5.jpg";
path[1] = "images/science.jpg";
path[2] = "images/culture.jpg";
path[3] = "images/sports1.jpg";
path[4] = "images/boarding.jpg";

function swapImage() {
    document.slide.src = path[i];
    i = (i + 1) % path.length; // loops back to 0
}

// change image every 3 seconds
window.onload = function() {
    setInterval(swapImage, 2000);
};
//end of banner code

/*start of counter code with fade-in integration*/
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  let countersStarted = false; // to prevent multiple triggers

  function startCounters() {
    if (countersStarted) return; // already started
    countersStarted = true;

    counters.forEach(counter => {
      counter.innerText = "0";
       const showPlus = counter.getAttribute("data-plus") === "true";

      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100; // number of increment for each step till you reach target number e.g 600/50=12 steps

        if (current < target) {
          counter.innerText = `${Math.ceil(current + increment)}`;
          setTimeout(updateCounter, 30); // delay between increments
        } else {
          counter.innerText = showPlus ? `${target}+` : `${target}`; // stop exact  ly at target
        }
      };

      updateCounter();
    });
  }

  // Observe when the counters section enters view
  const counterSection = document.querySelector(".counters");
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounters();
      }
    });
  }, { threshold: 0.5 });

  counterObserver.observe(counterSection);
});
/*end of counter code*/


// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
// End of fade-in on scroll

// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when user scrolls down 100px
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// End of back to top button code

// Change navbar style on scroll
window.addEventListener("scroll", function() {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {   // when scrolled down 50px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
//end of navbar scroll code

//admissions
// accordion
document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
//end of admissions

// Load the nav.html into the #navbar div
document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Once navbar is loaded, highlight the current page
      const links = document.querySelectorAll('#navbar a'); // select links inside navbar
      const currentPage = window.location.pathname.split('/').pop(); // get current page file name

      links.forEach(link => {
        if(link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
    })
    .catch(error => console.error("Error loading navbar:", error));
});
//end of nav highlight code

// Load the nav.html into the #navbar div
document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      const links = document.querySelectorAll('#navbar a'); // all links inside navbar
      const currentPage = window.location.pathname.split('/').pop(); // current file

      links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');

          // Check if link is inside a dropdown
          const dropdown = link.closest('.dropdown'); 
          if (dropdown) {
            const span = dropdown.querySelector('span');
            if (span) {
              span.classList.add('active'); // highlight parent span
            }
          }
        }
      });
    })
    .catch(error => console.error("Error loading navbar:", error));
});
//end of nav highlight code