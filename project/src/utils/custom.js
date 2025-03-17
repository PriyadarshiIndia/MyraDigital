// Custom JavaScript utilities

export const carousel = () => {

  const carousel = document.getElementById("carousel");
  const dots = document.querySelectorAll(".dot");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  let currentIndex = 0;
  const totalSlides = dots.length;

  function updateCarousel() {
    const translateXValue = -currentIndex * 100 + "%";
    carousel.style.transform = `translateX(${translateXValue})`;

    // Update dot indicators
    dots.forEach((dot, index) => {
      dot.classList.remove("bg-gray-400", "w-3", "h-3");
      dot.classList.add(index === currentIndex ? "bg-white" : "bg-gray-400");
      if (index === currentIndex) {
        dot.classList.add("w-4", "h-4");
      } else {
        dot.classList.add("w-3", "h-3");
      }
    });
  }

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  updateCarousel();
};

