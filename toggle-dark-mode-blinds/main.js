let title = window.tTitle;
let store = window.store;
var storeOpened = true;

function initStore() {
  for (var i = 0; i < 25; i++) {
    var brillant = document.createElement("div");
    brillant.className = "brillant";
    store.appendChild(brillant);
  }
}

initStore();
function toggle() {
  if (storeOpened) {
    storeOpened = false;
    store.className = "closed";
    boucle.className = "closed";
    setTimeout(function () {
      title.className = "closed";
    }, 600);
    setTimeout(function () {
      boucle.className = "reopen";
    }, 2000);
  } else {
    storeOpened = true;
    store.className = "opened";
    boucle.className = "opened";
    setTimeout(function () {
      title.className = "opened";
    }, 600);
  }
}

window.boucle.addEventListener("click", toggle);
