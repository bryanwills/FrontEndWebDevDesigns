const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const $$$ = (a) => Array.from(a);

const MAX_REPONSE = 2;

const LOREMS = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod totam dicta numquam provident at optio corrupti et unde. Neque, doloribus.",
  "Consectetur adipisicing elit. Dolor sunt necessitatibus ullam modi tempora quod temporibus ab recusandae debitis.",
  "Cum veritatis qui odit beatae nisi voluptates maiores eaque fuga sint in, culpa quibusdam harum ab facilis fuga aspernatur voluptate similique sapiente. Blanditiis sunt maiores dicta!",
];

const $commentaires = $("#commentaires");

const toggleLoading = (isLoading) => {
  if (isLoading) $("#loader").classList.add("loading");
  else $("#loader").classList.remove("loading");
};

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

class RUser {
  constructor() {
    this.commentaires = {};
  }

  load() {
    const ceci = this;
    if (!window.fetch) {
      console.err("");
      return;
    }
    fetch(`https://randomuser.me/api/?results=${MAX_REPONSE + 1}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        if (response.results && response.results.length > 0) {
          toggleLoading(false);
          const results = response.results;
          ceci.commentaires = {
            commentaire: { user: results[0], text: LOREMS[0] },
            responses: [
              { user: results[1], text: LOREMS[1] },
              { user: results[2], text: LOREMS[2] },
            ],
          };
        }
        ceci.createPost();
      });
  }

  createPostDom(data, parent = true) {
    const userData = data.user;
    const username = `${userData.name.first} ${userData.name.last}`;
    const $commentaire = document.createElement("div");
    $commentaire.classList.add("commentaire");
    const $commentaireLeft = document.createElement("div");
    $commentaireLeft.classList.add("left");
    const $commentaireRight = document.createElement("div");
    $commentaireRight.classList.add("right");
    const $commentaireImage = document.createElement("img");
    $commentaireImage.src = userData.picture.medium;
    $commentaireImage.alt = `Profile of ${userData.username}`;
    $commentaireLeft.appendChild($commentaireImage);
    const $commentaireUsername = document.createElement("label");
    $commentaireUsername.innerText = username;
    const $commentaireText = document.createElement("p");
    $commentaireText.innerText = data.text;
    $commentaireRight.appendChild($commentaireUsername);
    $commentaireRight.appendChild($commentaireText);
    if (parent) {
      $commentaire.classList.add("commentaire-parent");
      const $commentaireLoadResponse = document.createElement("button");
      $commentaireLoadResponse.addEventListener(
        "click",
        (e) => {
          const toggleResponsesButton = e.target;
          const responsesVisibles =
            toggleResponsesButton.dataset.responsesvisibles;
          const responses = $$$(
            toggleResponsesButton.parentNode.querySelectorAll(
              ".responses > .commentaire"
            )
          );
          responses.forEach((response, index) => {
            setTimeout(() => {
              if (responsesVisibles === "false") {
                response.classList.add("displayed");
              } else {
                response.classList.add("tempHide");
                setTimeout(() => {
                  response.classList.remove("tempHide");
                  response.classList.remove("displayed");
                }, 500);
              }
            }, 100 * index);
          });
          toggleResponsesButton.innerText =
            responsesVisibles !== "false"
              ? `Load responses (${MAX_REPONSE})`
              : "Hide responses";
          const newVisible = responsesVisibles === "false" ? true : false;
          toggleResponsesButton.setAttribute(
            "data-responsesVisibles",
            newVisible
          );
        },
        false
      );
      $commentaireLoadResponse.innerText = `Load responses (${MAX_REPONSE})`;
      $commentaireLoadResponse.setAttribute("data-responsesVisibles", false);
      $commentaireRight.appendChild($commentaireLoadResponse);
      const $commentaireResponses = document.createElement("div");
      $commentaireResponses.classList.add("responses");
      $commentaireRight.appendChild($commentaireResponses);
    }
    $commentaire.appendChild($commentaireLeft);
    $commentaire.appendChild($commentaireRight);
    return $commentaire;
  }

  createPost() {
    const $commentaire = this.createPostDom(this.commentaires.commentaire);
    this.commentaires.responses.forEach((response) => {
      const $response = this.createPostDom(response, false);
      $commentaire.querySelector(".responses").appendChild($response);
    });
    $commentaires.appendChild($commentaire);
    $(".commentaire-parent").classList.add("displayed");
  }
}

toggleLoading(true);
const user = new RUser();
user.load();

$("#toggleFullScreen").addEventListener(
  "click",
  () => {
    toggleFullScreen(document.body);
  },
  "false"
);
