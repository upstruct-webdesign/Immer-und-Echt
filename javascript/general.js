// Smooth Scrolling
let scrollTarget = 0;
let isScrolling = false;

window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    scrollTarget += e.deltaY;

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    if (scrollTarget < 0) scrollTarget = 0;
    if (scrollTarget > maxScroll) scrollTarget = maxScroll;

    if (!isScrolling) smoothScroll();
  },
  { passive: false }
);

function smoothScroll() {
  isScrolling = true;
  const current = window.scrollY;
  const distance = scrollTarget - current;

  const step = distance * 0.1;

  window.scrollTo(0, current + step);

  if (Math.abs(distance) > 0.5) {
    requestAnimationFrame(smoothScroll);
  } else {
    isScrolling = false;
  }
}