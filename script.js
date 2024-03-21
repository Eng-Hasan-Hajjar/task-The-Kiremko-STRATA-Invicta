document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".controls button");
    const images = document.querySelectorAll(".image-container img");
  
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const targetImage = document.querySelector(`.${button.id}`);
        images.forEach(image => image.classList.remove("active"));
        targetImage.classList.add("active");
      });
    });
  });
  