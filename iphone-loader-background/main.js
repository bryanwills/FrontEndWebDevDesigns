const iPhone = (target) => {
  const iP_target = document.querySelector(target);
  const iP_circles = 3;
  const createCircle = () => {
    const circle = document.createElement("span");
    circle.classList.add("iphone_circle");
    return circle;
  };
  const setCircles = (nb_Circles) => {
    for (var i = 0; i < nb_Circles; i++) {
      iP_target.appendChild(createCircle());
    }
  };
  setCircles(iP_circles);
};

const colorPalettes = () => {
  return [
    ["#e58e26", "#fa983a", "#f6b93b", "#fad390"],
    ["#0c2461", "#1e3799", "#4a69bd", "#6a89cc"],
    ["#079992", "#38ada9", "#78e08f", "#b8e994"],
    ["#6D214F", "#B33771", "#F97F51", "#FEA47F"],
    ["#2f3542", "#57606f", "#ced6e0", "#dfe4ea"],
  ];
};

iPhone("#iphone");

const getIterables = () => {
  let colors_tab = [];
  const colors_div = document.querySelectorAll(".iphone_circle");
  const iPhone = document.querySelector("#iphone");
  colors_tab = [...colors_div];
  colors_tab.push(iPhone);
  return colors_tab;
};

let iterationColor = 0;

const updateColors = (it, clrs) => {
  const iterables = it;
  for (var i = 0; i < iterables.length; i++) {
    iterables[i].style.background = clrs[iterationColor][i];
  }
  iterationColor += 1;
  if (iterationColor == iterables.length + 1) {
    iterationColor = 0;
  }
};

setInterval(() => {
  updateColors(getIterables(), colorPalettes());
}, 3000);
