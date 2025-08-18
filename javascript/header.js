/* Hero Section */
let slideImages = document.querySelectorAll(".slide-container .slides img");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let counter = 0;
let isAnimating = false;

function resetAnimations() {
  slideImages.forEach((img) => (img.style.animation = ""));
}

function slideNext() {
  if (isAnimating) return;
  isAnimating = true;

  resetAnimations();
  slideImages[counter].style.animation = "next1 1s ease-in forwards";

  counter = (counter + 1) % slideImages.length;
  slideImages[counter].style.animation = "next2 1s ease-in forwards";

  slideImages[counter].addEventListener(
    "animationend",
    () => {
      isAnimating = false;
    },
    { once: true }
  );
}

function slidePrev() {
  if (isAnimating) return;
  isAnimating = true;

  resetAnimations();
  slideImages[counter].style.animation = "prev1 1s ease-in forwards";

  counter = (counter - 1 + slideImages.length) % slideImages.length;
  slideImages[counter].style.animation = "prev2 1s ease-in forwards";

  slideImages[counter].addEventListener(
    "animationend",
    () => {
      isAnimating = false;
    },
    { once: true }
  );
}

next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);