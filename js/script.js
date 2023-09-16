const prev = document.querySelector(".offer__slider-prev");
const next = document.querySelector(".offer__slider-next");
const slides = document.querySelectorAll(".offer__slide");
const currentView = document.querySelector("#current");
const totalView = document.querySelector("#total");
const tabcontnets = document.querySelectorAll(".tabcontent");
const tabheaders = document.querySelectorAll(".tabheader__item");
const tabheader_active = document.querySelectorAll(".tabheader__item_active");
const input = document.querySelectorAll(".order__input");
const btn = document.querySelector(".btn_white");
const modal = document.querySelector(".modal");

let slideIndex = 0;
totalView.innerHTML = slides.length >= 10 ? slides.length : `0${slides.length}`;

function slideShow(n) {
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => slide.classList.add("fade", "hide"));
  slides[slideIndex].classList.remove("hide");
  currentView.innerHTML =
    slideIndex + 1 >= 10 ? slideIndex + 1 : `0${slideIndex + 1}`;
}

slideShow();

prev.onclick = () => {
  slideIndex--;
  slideShow(slideIndex);
};
next.onclick = () => {
  slideIndex++;
  slideShow(slideIndex);
};
// 1
let firtsContent = 0;
tabcontnets.forEach((content, i) => {
  content.dataset.type = tabheaders[i].innerHTML;
  content.classList.add("hide");
  tabcontnets[firtsContent].classList.remove("hide");

  tabheaders[i].onclick = () => {
    for (let i = 0; i < tabcontnets.length; i++) {
      tabcontnets[i].classList.add("fade", "hide");
    }
    content.classList.remove("hide");

    for (let i = 0; i < tabheaders.length; i++) {
      tabheaders[i].classList.remove("tabheader__item_active");
    }
    tabheaders[i].classList.add("tabheader__item_active");
  };
});
// 2
input.forEach((inp) => {
  if (inp.getAttribute("type") === "phone") {
    inp.oninput = (e) => {
      if (isNaN(e.target.value)) {
        inp.style.border = "1px solid red";
      } else {
        inp.style.border = "none";
      }
    };
  }
});
// 3
btn.onclick = () => {
  modal.classList.add("show", 'fade');
};
