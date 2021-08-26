const countapi = require("countapi-js");

countapi.visits().then((result) => {
  console.log(result.value);
});

countapi.update("bryanwills.dev", +1).then((result) => {
  console.log(result.value);
});

const count = document.getElementById("count");

updateVisitCount();
function updateVisitCount() {
  fetch("https://api.countapi.xyz/update/bryanwills.dev/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      count.innerHTML = res.value;
    });
}
