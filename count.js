const count = document.getElementById("count");

updateVisitCount();

function updateVisitCount() {
  fetch("https://apt.countapi.xyz/update/bryanwills.dev/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      count.innerHTML = res.value;
    });
}
