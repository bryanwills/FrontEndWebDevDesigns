const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
    //create DOM elements
    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    // attaching all elements
    {
      imgElement.appendChild(document.createTextNode(""));
      h1.appendChild(document.createTextNode(movies[slideIndex].name));
      p.appendChild(document.createTextNode(movies[slideIndex].des));
      content.appendChild(h1);
      content.appendChild(p);
      slide.appendChild(content);
      slide.appendChild(imgElement);
      carousel.appendChild(slide);
    }
  }
  {
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  }
  for (let i = 0; i < 3; i++) {
    createSlide();
  }

  setInterval(() => {
    createSlide();
  }, 3000);
};

// card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
