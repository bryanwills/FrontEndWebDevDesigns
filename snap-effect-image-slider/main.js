const imgParent = document.querySelector(".img-container");
const root = document.querySelector(":root");
const numElement = document.querySelector(".index");

const preBtn = document.querySelector(".btn.pre");
const nxtBtn = document.querySelector(".btn.nxt");

let spanArr = [];
let timeArr = [];
let currentImage = 0;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 16; j++) {
    let span = document.createElement("div");
    imgParent.appendChild(span);
    span.className = "span";
    spanArr.push(span);
    timeArr.push(0.5 * (2 + ((8 - j) * 0.1 + i * 0.04)));
  }
}

const changeImage = () => {
  spanArr.map((item, i) => {
    item.style.animation = `disappear 1s ${timeArr[i]}s forwards 1`;

    setTimeout(() => {
      root.style.setProperty("--bg-img", `url(img/img${currentImage + 1}.jpg)`);
      item.style.animation = null;
      numElement.innerHTML = `0${currentImage + 1}`;
    }, 2300);
  });
  root.style.setProperty("--second-img", `url(img/img${currentImage + 1}.jpg)`);
};

preBtn.addEventListener("click", () => {
  if (currentImage !== 0) {
    currentImage--;
    changeImage();
  }
});

nxtBtn.addEventListener("click", () => {
  if (currentImage !== 4) {
    currentImage++;
    changeImage();
  }
});
