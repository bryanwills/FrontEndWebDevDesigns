const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const $$$ = (a) => Array.from(a);

let spoil_hidden = true;

const getletter = (letter) => {
  const letter$ = document.createElement("b");
  const letter_i$ = document.createElement("i");
  letter_i$.innerText = letter;
  const letter_em$ = document.createElement("em");
  letter_em$.innerText = letter === " " ? " " : "*";
  letter$.appendChild(letter_i$);
  letter$.appendChild(letter_em$);
  return letter$;
};

$$$($$(".spoiler")).forEach((spoil) => {
  const textSpoil = spoil.innerText;
  spoil.innerHTML = "";
  for (var i = 0; i < textSpoil.length; i++) {
    spoil.appendChild(getletter(textSpoil.charAt(i)));
  }
});

function toggleSpoil() {
  $$$($$(".spoiler > b")).forEach((spoil, index) => {
    setTimeout(() => {
      if (spoil_hidden) {
        spoil.classList.add("active");
      } else {
        spoil.classList.remove("active");
      }
    }, 20 * index);
  });
  spoil_hidden = !spoil_hidden;
  $("#toggleSpoilLabel").innerText = `Toggle spoil ${
    !spoil_hidden ? "(Hide)" : "(Reveal)"
  }`;
}

toggleSpoil();
toggleSpoil();
