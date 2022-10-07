import "../styles/styles.css";

// import initNavigation from "./components/navigation";
import initHeaderTilt from "./components/header";
// import initImageParallax from "./animations/imageParallax";

gsap.registerPlugin(ScrollTrigger);

// const pageBackground = select(".fill-background");

// init main fn
// function init() {}
// init();

window.addEventListener("DOMContentLoaded", () => {
  // initNavigation();
  // initHoverReveal();
  // initImageParallax();
  initHeaderTilt();
});

// no window.addEventListener('load') because we are using imagesLoaded for preloading
if (module.hot) {
  module.hot.accept();
}
