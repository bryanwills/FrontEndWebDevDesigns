const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const $$$ = (s) => Array.from(s);
class RUser {
  constructor() {
    this.user = {};
  }

  load() {
    const ceci = this;
    ceci.clearUser();
    if (!window.fetch) {
      console.err("");
      return;
    }
    fetch("https://randomuser.me/api/")
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setTimeout(() => {
          ceci.updateUser(response.results[0]);
          ceci.updateDom();
        }, 2500);
      });
  }

  clearUser() {
    $("#user-card").classList.add("loading");
    $("#user-infos-firstname").innerText = "";
    $("#user-infos-lastname").innerText = "";
    $("#user-infos-location").innerText = "";
  }

  updateUser(data) {
    this.user = data;
  }

  updateDom() {
    $("#user-card").classList.remove("loading");
    $("#user-picture-img").src = this.user.picture.large;
    $("#user-infos-firstname").innerText = this.user.name.first;
    $("#user-infos-lastname").innerText = this.user.name.last;
    $("#user-infos-location").innerText = this.user.location.country;
  }
}

const user = new RUser();
user.load();

const elements = $$$($$(".swatch"));
let backgroundChoiceDisplayed = true;
$("#updateBackground").addEventListener(
  "click",
  () => {
    elements.forEach((element, index) => {
      setTimeout(() => {
        if (backgroundChoiceDisplayed) element.classList.remove("displayed");
        else element.classList.add("displayed");
        if (index === elements.length - 1)
          backgroundChoiceDisplayed = !backgroundChoiceDisplayed;
      }, 100 * index);
    });
  },
  false
);

const duration = 150;
const profileBackground = $("#float-background");
elements.forEach((element) => {
  element.addEventListener(
    "click",
    (e) => {
      const element = e.target.dataset.classname;
      const className = profileBackground.dataset.classname;
      if (element !== className) {
        profileBackground.classList.add("move-down");
        setTimeout(() => {
          profileBackground.classList.add("move-up");
          profileBackground.classList.remove(className);
          profileBackground.classList.add(element);
          profileBackground.setAttribute("data-classname", element);
          setTimeout(() => {
            profileBackground.classList.remove("move-down");
            setTimeout(() => {
              profileBackground.classList.remove("move-up");
            }, duration / 2);
          }, duration);
        }, duration);
      }
    },
    false
  );
});
