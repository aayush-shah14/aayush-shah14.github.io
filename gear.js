const gear = document.querySelector(".gear");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let frame = 0;

function rotateGear() {
  frame = 0;
  gear.style.setProperty("--turn", reducedMotion.matches ? "0deg" : `${window.scrollY / 5}deg`);
}

function onScroll() {
  if (!frame && !reducedMotion.matches) frame = requestAnimationFrame(rotateGear);
}

window.addEventListener("scroll", onScroll, { passive: true });
reducedMotion.addEventListener("change", rotateGear);
rotateGear();
