var tabCoul = ["#54ACD2", "#3D8EB9", "#2969B0", "#3D8EB9"];
function changeTab(paramTab, paramTabL, thisIndex) {
  if (thisIndex == paramTabL) {
    thisIndex = 0;
  }
  var cetteCouleur = paramTab[thisIndex];
  $(".a_r").each(function (index) {
    var ceci = $(this);
    var ceciParent = $(this).parent();
    setTimeout(function () {
      ceci.css("background-color", cetteCouleur);
      ceci.css("opacity", 1);
      ceci.css("height", "100%");
      setTimeout(function () {
        ceciParent.css("background-color", cetteCouleur);
        ceci.css("height", "0%");
        ceci.css("opacity", 0);
      }, 200);
    }, 100 * index);
  });
  setTimeout(function () {
    console.log("un tour", thisIndex);
    thisIndex++;
    changeTab(paramTab, paramTabL, thisIndex);
  }, 800);
}
changeTab(tabCoul, tabCoul.length, 0);
