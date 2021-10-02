const contents = [...document.querySelectorAll(".content")];

const circle = document.querySelector(".circle");
const container = document.querySelector(".container");
const toggleBtn = document.querySelector(".toggle");

let index;

contents.forEach((item, i) => {
  item.addEventListener("click", () => {
    if (!item.className.includes("big")) {
      item.classList.toggle("big");
      index = i;
      setTimeout(() => {
        circle.classList.toggle("hide");
        setTimeout(() => {
          container.classList.toggle("active");
          toggleBtn.style.display = "block";
          setTimeout(() => {
            let heading = contents[index].children[0];
            heading.style.opacity = 1;
          }, 1000);
        }, 500);
      }, 1000);
    }
  });
});

toggleBtn.addEventListener("click", () => {
  toggleBtn.style.display = null;
  let heading = contents[index].children[0];
  heading.style.opacity = null;
  setTimeout(() => {
    container.classList.toggle("active");
    setTimeout(() => {
      circle.classList.toggle("hide");
      setTimeout(() => {
        contents[index].classList.toggle("big");
        contents[index].style.zIndex = 8;
        setTimeout(() => {
          contents[index].style.zIndex = null;
        }, 1000);
      }, 500);
    }, 1000);
  }, 1000);
});
