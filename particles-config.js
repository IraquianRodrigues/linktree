particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: { enable: true, value_area: 800 }
    },
    color: { value: ["#8e44ad", "#a569bd", "#e1bee7"] },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: { enable: false }
    },
    size: {
      value: 8,
      random: true,
      anim: { enable: false }
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
