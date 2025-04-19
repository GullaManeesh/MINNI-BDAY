const image = document.querySelectorAll(".item");
const imageShow = document.querySelector(".imageShow");
const imgCon = document.querySelector(".imgCon");
const banner = document.querySelector(".banner");

let overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

image.forEach((box) => {
  box.addEventListener("click", function () {
    let img = box.querySelector("img");
    let src = img.getAttribute("src");
    imgCon.src = src;
    imageShow.classList.add("imageShowVisible");
    overlay.classList.add("overlayShow");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("overlayShow");
  imageShow.classList.remove("imageShowVisible");
});

let circle = document.querySelector(".circle");
let slider = document.querySelector(".slider2");
let list = document.querySelector(".list");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let items = document.querySelectorAll(".boxes");
let count = items.length;
let active = 1;
let leftTransform = 0;
let width_item = items[active].offsetWidth;

next.onclick = () => {
  active = active >= count - 1 ? count - 1 : active + 1;
  runCarousel();
};
prev.onclick = () => {
  active = active <= 0 ? active : active - 1;
  runCarousel();
};
function runCarousel() {
  prev.style.display = active == 0 ? "none" : "block";
  next.style.display = active == count - 1 ? "none" : "block";

  let old_active = document.querySelector(".item.active");
  if (old_active) old_active.classList.remove("active");
  items[active].classList.add("active");

  leftTransform = width_item * (active - 1) * -1;
  list.style.transform = `translateX(${leftTransform}px)`;
}
runCarousel();

// Set Text on a Circle
let textCircle = circle.innerText.split("");
circle.innerText = "";
textCircle.forEach((value, key) => {
  let newSpan = document.createElement("span");
  newSpan.innerText = value;
  let rotateThisSpan = (360 / textCircle.length) * (key + 1);
  newSpan.style.setProperty("--rotate", rotateThisSpan + "deg");
  circle.appendChild(newSpan);
});
