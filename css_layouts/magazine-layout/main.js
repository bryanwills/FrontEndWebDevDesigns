const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const $$$ = (a) => Array.from(a);

let previousPage = 1;
let currentPage = 1;
let totalPage = null;

function toggleFullScreen(elem) {
  if (
    (document.fullScreenElement !== undefined &&
      document.fullScreenElement === null) ||
    (document.msFullscreenElement !== undefined &&
      document.msFullscreenElement === null) ||
    (document.mozFullScreen !== undefined && !document.mozFullScreen) ||
    (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)
  ) {
    if (elem.requestFullScreen) {
      elem.requestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

function updatePaginationLabel() {
  $(
    "#article-pagination > label"
  ).innerText = `Page ${currentPage} / ${totalPage}`;
}

function updatePage(direction) {
  previousPage = currentPage;
  if (direction === "next" && currentPage < totalPage) {
    currentPage += 1;
  } else if (direction === "prev" && currentPage > 1) {
    currentPage -= 1;
  }
  if (currentPage > 1) {
    $("#prev").classList.remove("hidden");
  } else {
    $("#prev").classList.add("hidden");
  }
  if (currentPage === totalPage) {
    $("#next").classList.add("hidden");
  } else {
    $("#next").classList.remove("hidden");
  }
  updatePaginationLabel();
  updatePageAction(direction);
}

function updatePageAction(direction) {
  $(`#page-${previousPage}`).classList.remove("active");
  $(`#page-${previousPage}`).classList.remove("right");
  $(`#page-${previousPage}`).classList.remove("left");
  $(`#page-${currentPage}`).classList.remove("right");
  $(`#page-${currentPage}`).classList.remove("left");
  $(`#page-${currentPage}`).classList.add("active");
  $(`#page-${currentPage}`).classList.add(
    direction === "next" ? "right" : "left"
  );
}

function initPagination() {
  const pageList = $$$($$(".page"));
  totalPage = pageList.length;
  pageList.forEach((page, index) => {
    page.setAttribute("id", `page-${index + 1}`);
  });
  $("#prev").addEventListener("click", () => updatePage("prev"), false);
  $("#next").addEventListener("click", () => updatePage("next"), false);
}

$("#toggleFullScreen").addEventListener(
  "click",
  () => toggleFullScreen(document.body),
  false
);

initPagination();
updatePaginationLabel();
