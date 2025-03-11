particlesJS("particles-js", {
  particles: {
    number: {
      value: 355,
      density: {
        enable: true,
        value_area: 789.15,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.49,
      random: false,
      anim: {
        enable: true,
        speed: 0.25,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 0.333,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 83.9,
        size: 1,
        duration: 3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

//mixitup
var mixer = mixitup(".itemsgrid", {
  selectors: {
    target: ".image-container",
  },
  load: {
    filter: ".all",
  },
});

document.querySelectorAll(".image-container").forEach((item) => {
  item.classList.add("all");
});

document.querySelectorAll(".tags a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const tags = document.querySelectorAll(".tags a");
    tags.forEach((tag) => {
      tag.classList.remove("active");
    });

    event.target.classList.add("active");

    const category = event.target.textContent
      .toLowerCase()
      .trim()
      .replace(" ", "");

    if (category === "all") {
      mixer.filter(".all");
    } else {
      mixer.filter("." + category);
    }
  });
});

//add padding to top of #porthome when menu is toggled

const navbarToggle = document.querySelector(".navbar-toggler");
const portHome = document.getElementById("porthome");

navbarToggle.addEventListener("click", () => {
  if (navbarToggle.getAttribute("aria-expanded") === "true") {
    portHome.style.paddingTop = "200px";
  } else {
    portHome.style.paddingTop = "0";
  }
});
