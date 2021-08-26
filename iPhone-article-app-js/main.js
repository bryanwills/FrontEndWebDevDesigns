let images = [
  "https://images.unsplash.com/photo-1566477479142-25be0f458ec9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixlib=rb-1.2.1&q=80&w=300",
  "https://images.unsplash.com/photo-1566600642168-1132dce7b38a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixlib=rb-1.2.1&q=80&w=300",
  "https://images.unsplash.com/photo-1565561491659-fc8ce20e9aa4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixlib=rb-1.2.1&q=80&w=300",
];

let loadingScreen = window.loadingScreen;
let loadingBar = window.loadingBar;
let mainScreen = window.mainScreen;
let articleScreen = window.articleScreen;
let articleFlou = window.articleFlou;
let articleCard = window.articleCard;
let closeArticle = window.closeArticle;
let articleCardImage = window.articleCardImage;
let articleCardParagraph = window.articleCardParagraph;

var oldScrollTop = 0;

let imageUrl = "https://source.unsplash.com/random/300x160";

function startLoading() {
  loadingBar.classList.add("load");
}
function stopLoading() {
  loadingScreen.classList.add("hide");
}
function removeLoading() {
  loadingScreen.classList.add("erase");
}

closeArticle.addEventListener(
  "click",
  function (event) {
    hideCardsArticle();
  },
  false
);

function hideCardsArticle() {
  mainScreen.classList.remove("noScroll");
  closeArticle.classList.remove("show");
  setTimeout(function () {
    articleCard.classList.remove("show");
    setTimeout(function () {
      articleFlou.classList.remove("show");
      setTimeout(function () {
        mainScreen.scrollTop = oldScrollTop;
      }, 100);
    }, 300);
  }, 300);
}

function showCardsArticle() {
  oldScrollTop = mainScreen.scrollTop;
  mainScreen.scrollTop = 0;
  articleFlou.classList.add("show");
  mainScreen.classList.add("noScroll");
  setTimeout(function () {
    articleCard.classList.add("show");
    setTimeout(function () {
      closeArticle.classList.add("show");
    }, 300);
  }, 300);
}

function setArticle(image) {
  articleCardImage.src = image;
}

function showArticle(image) {
  showCardsArticle();
  setArticle(image);
}

function generateArticle(image) {
  var article = document.createElement("div");
  article.className += "article";
  var articleImage = document.createElement("img");
  var articleTitle = document.createElement("label");
  var articleInfos = document.createElement("div");
  articleTitle.innerHTML = "Title article";
  var articleDesc = document.createElement("p");
  articleDesc.innerHTML = "Preview description article";
  articleImage.src = image;
  article.appendChild(articleImage);
  articleInfos.appendChild(articleTitle);
  articleInfos.appendChild(articleDesc);
  article.appendChild(articleInfos);
  articleScreen.appendChild(article);
  article.addEventListener(
    "click",
    function (event) {
      showArticle(image);
    },
    false
  );
  setTimeout(function () {
    article.classList.add("show");
  }, 100);
}

function addArticles() {
  let time = 120;
  setTimeout(function () {
    generateArticle(images[0]);
  }, time);
  setTimeout(function () {
    generateArticle(images[1]);
  }, time * 2);
  setTimeout(function () {
    generateArticle(images[2]);
  }, time * 3);
}

function initApp() {
  setTimeout(function () {
    startLoading();
    setTimeout(function () {
      stopLoading();
      setTimeout(function () {
        removeLoading();
        setTimeout(function () {
          addArticles();
        }, 100);
      }, 300);
    }, 2000);
  }, 500);
}

initApp();
