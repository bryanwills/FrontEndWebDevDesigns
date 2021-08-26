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

$$$($$(".page")).forEach((page, index) => {
  page.setAttribute("id", `page-${index + 1}`);
});

$("#toggleFullScreen").addEventListener(
  "click",
  () => {
    toggleFullScreen(document.body);
  },
  "false"
);
