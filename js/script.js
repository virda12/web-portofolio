// Dua teks animasi ketik
const topText = "Selamat Datang ";
const bottomText = "Di Portofolio Saya";

const topElement = document.getElementById("animated-title-top");
const bottomElement = document.getElementById("animated-title-bottom");

let topIndex = 0;
let bottomIndex = 0;

function typeTop() {
  if (topIndex < topText.length) {
    topElement.textContent += topText.charAt(topIndex);
    topIndex++;
    setTimeout(typeTop, 80);
  } else {
    topElement.style.borderRight = "none";
    setTimeout(typeBottom, 400); // jeda sebelum mulai baris kedua
  }
}

function typeBottom() {
  if (bottomIndex < bottomText.length) {
    bottomElement.textContent += bottomText.charAt(bottomIndex);
    bottomIndex++;
    setTimeout(typeBottom, 80);
  } else {
    bottomElement.style.borderRight = "none";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  topElement.style.borderRight = "2px solid #007bff";
  bottomElement.style.borderRight = "2px solid #007bff";
  typeTop();
});
