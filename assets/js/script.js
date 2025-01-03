var typed = new Typed(".site-description", {
  strings: [
    "Hello!",
    "You can call me Aung.",
    "Software Engineer",
    "Working Hard to Evolve",
  ],
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
  typeSpeed: 60,
  showCursor: true,
  cursorChar: "|",
  startDelay: 100,
  backSpeed: 20,
  shuffle: false,
  backDelay: 1000,
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    new SweetScroll({});
    particlesJS("particles-js", {
      particles: {
        number: { value: 40, density: { enable: !0, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "polygon",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: !1,
          anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
        },
        size: {
          value: 3,
          random: !0,
          anim: {
            enable: !1,
            speed: 19.18081918081918,
            size_min: 0.1,
            sync: !1,
          },
        },
        line_linked: {
          enable: !0,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 4,
          direction: "none",
          random: !0,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: { enable: !1, rotateX: 600, rotateY: 1200 },
        },
        nb: 80,
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: !0, mode: "repulse" },
          onclick: { enable: !0, mode: "push" },
          resize: !0,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: !0,
    });
    var gistMetas = document.querySelectorAll('.gist-meta');
  
    gistMetas.forEach(meta => {
        // Get all links within each .gist-meta
        const links = meta.getElementsByTagName('a');
        
        // Check if there's a second link (index 1)
        if (links[1]) {
            links[1].textContent = 'denteyon/README.md';
            links[1].href = 'https://github.com/denteyon/denteyon/blob/master/README.md';
        }
    });
  },
  !1
);
