// Popup y slider automático

let popup = document.querySelector('.popup');
let popupContent = document.querySelector('.popup-content');
let slider = document.querySelector('.slider');
let sliderImg = document.createElement('img');
slider.appendChild(sliderImg);

let currentIndex = 0;
let interval;

function showPopup(imgSrc) {
  const images = servicios[imgSrc];
  currentIndex = 0;
  sliderImg.src = images[currentIndex];

  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImg.src = images[currentIndex];
  }, 5000);

  popup.style.display = 'flex';
}
document.addEventListener("DOMContentLoaded", () => {
  const serviciosImgs = document.querySelectorAll(".servicios img.servicio");
  const popups = document.querySelectorAll(".popup");
  
  serviciosImgs.forEach((img, index) => {
    img.addEventListener("click", () => {
      popups[index].style.display = "flex";
    });
  });

  popups.forEach(popup => {
    const cerrar = popup.querySelector(".cerrar");
    cerrar.addEventListener("click", () => {
      popup.style.display = "none";
    });

    // Cerrar popup si clickeas fuera del contenido
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
});
function closePopup() {
  popup.style.display = 'none';
  clearInterval(interval);
}

document.querySelectorAll('.servicio').forEach(img => {
  img.addEventListener('click', () => {
    const src = img.getAttribute('src');
    showPopup(src);
  });
});

document.querySelector('.cerrar').addEventListener('click', closePopup);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePopup();
});
