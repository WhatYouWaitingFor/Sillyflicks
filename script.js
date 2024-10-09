const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  document.querySelector("header ul").classList.toggle("show");
});

const toTop = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  if (pageYOffset > 75) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

// event next click

next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
}
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive <= countItem) {
    itemActive = 0;
  }
  showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
  next.click();

}, 3000)
function showSlider() {
  // remove item active old

  let itemActiveOld = document.querySelector('.slider .list .item.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');

  // active new item
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');
}

clearInterval(refreshInterval);
refreshInterval = setInterval(() => {
  next.click();
}, 5000)



thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    itemActive = index;
    showSlider();
  })
})