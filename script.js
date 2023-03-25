// Slider
const slider = function () {
  const slides = document.querySelectorAll(".gallery--2");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  const headerlinks = document.querySelector(".header__link");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        ////inserts the dots into html
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    ///right btn
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    ///left btn
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    ///creating events for using arow keys to move slides
    if (e.key === "ArrowLeft") prevSlide(); ///links with left arow
    e.key === "ArrowRight" && nextSlide(); ///links with right arow
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric", //long
  year: "numeric",
  // weekday: 'long',
};
const locale = navigator.language; //ur browsers date
// console.log(locale);
const headerDate = document.querySelector(".header__date");
headerDate.textContent = new Intl.DateTimeFormat(
  locale, //to customize d dates for each acct
  options
).format(now);

const submit = document.querySelector(".dark__icon");
const firstAnchor = document.querySelector("first");
const secondAnchor = document.querySelector("second");
const feedBackBox = document.querySelector(".comment");
const searchFeedback = document.querySelector(".coment-p");

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key === "Enter") {
    const input = document
      .querySelector(".dark__search-input")
      .value.toLowerCase();
    // input.textContent = '';
    if (input.includes("hai")) {
      window.location = "hair.html";
    } else if (input.includes("knot")) {
      window.location = "braids.html";
    } else if (input.includes("bra")) {
      window.location = "braids.html";
    } else if (input.includes("nat")) {
      window.location = "hair.html";
    } else if (input.includes("4c")) {
      window.location = "hair.html";
    } else if (input.includes("ped")) {
      window.location = "nails.html";
    } else if (input.includes("mani")) {
      window.location = "nails.html";
    } else if (input.includes("nail")) {
      window.location = "nails.html";
    } else if (input.includes("acy")) {
      window.location = "nails.html";
    }
  } else {
    feedBackBox.style.opacity = "1";
    searchFeedback.textContent = "Item not found";
  }
});

const headerlinks = document.querySelector(".header__link");
const openTab = function (headerlink) {
  const headerlinks = document.querySelector(".header__link");
  const headerlis = document.querySelector(".header__li");
  for (headerlink of headerlinks) {
    headerlink.classList.remove("active-link");

    // headerlink.currentTarget.classList.add("active-link");
  }
  headerlinks.currentTarget.classList.add("active-link");
};
openTab();

// headerlinks.addEventListener("click", function (e) {
//   e.currentTarget.classList.add("active-link");
// });
// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });
// const interval = 4000; // duration(speed) of the slide
// let timer = setInterval(goToSlide, interval);
// curSlide = (curSlide + 1) % section.length; // update the index number
// if (n != undefined) {
//   clearInterval(timer);
//   timer = setInterval(goToSlide, interval);
//   curSlide = n;
// }

// var currentImg = 0; // index of the first image
// const interval = 4000; // duration(speed) of the slide
// var timer = setInterval(goToSlide, interval);

// currentImg = (currentImg + 1) % section.length; // update the index number

//   if (n != undefined) {
//     clearInterval(timer);
//     timer = setInterval(goToSlide, interval);
//     curSlide = n;
//   }
//   // currentImg = n;
//  // section[curSlide].style.opacity = 1;
//   dotContainer[curSlide].className += " active";

// var section = document.querySelectorAll(".gallery--2");
// var dots = document.querySelectorAll(".dot");
// var currentImg = 0; // index of the first image
// const interval = 4000; // duration(speed) of the slide
// var timer = setInterval(changeSlide, interval);
// // const images = document.querySelector(".section2-images");

// function changeSlide(n) {
//   for (var i = 0; i < section.length; i++) {
//     // reset
//     section[i].style.opacity = 0;
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   currentImg = (currentImg + 1) % section.length; // update the index number

//   if (n != undefined) {
//     clearInterval(timer);
//     timer = setInterval(changeSlide, interval);
//     currentImg = n;
//   }
//   // currentImg = n;

//   section[currentImg].style.opacity = 1;
//   dots[currentImg].className += " active";
// }
