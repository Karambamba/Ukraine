const images = document.querySelectorAll("#slider img");
const title = document.querySelector("#title");
let currentIndex = 0;
const interval = 10000;

function changeImage() {
  images[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = 1;
}

images.forEach((img, index) => {
  img.style.opacity = index === currentIndex ? 1 : 0;
});

setInterval(changeImage, interval);

const h1 = document.getElementById("titleCounter");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      h1.classList.add("visible");
      observer.unobserve(h1);
    }
  });
});

observer.observe(h1);

function start() {
  window.setInterval(timer, 50);
}

function timer() {
  var elem = document.getElementById("counter");
  elem.value = parseInt(elem.value) - 1;
}
