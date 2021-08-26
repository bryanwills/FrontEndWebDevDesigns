$(".cover").click(function () {
  $(this).fadeOut();
});
var ligneActuelle = 1;
var ligneMax = Math.ceil($(".keynav_layout > div").length / 4);
function scroller(href) {
  var valeur = 0;
  var taille_fenetre = $(window).height() / 4;
  var index_this = href.attr("data-index");
  valeur = taille_fenetre * (ligneActuelle - 1);
  $(".keynav_layout")
    .animate({ scrollTop: valeur }, 200)
    .promise()
    .done(function () {
      console.log("yoann test");
    });
  console.log(ligneActuelle);
}
$(".keynav_layout > div").first().addClass("focused");
$(".keynav_layout > div").each(function (index) {
  $(this).attr("data-index", parseInt(index + 1));
  $(this).attr("id", "elt" + parseInt(index + 1));
  $(this)
    .find("div.title")
    .text("Application #" + (index + 1));
});
$(document).keydown(function (e) {
  var elemToScroll;
  switch (e.which) {
    case 37:
      console.log("left");
      var ceci = $(".focused");
      var thisIndex = parseInt($(".focused").attr("data-index"));
      if (thisIndex != 1) {
        ceci.removeClass("focused");
        $("#elt" + parseInt(thisIndex - 1)).addClass("focused");
        elemToScroll = $(".focused");
      }
      if (thisIndex % 4 == 1) {
        ligneActuelle -= 1;
      }
      break;
    case 38:
      console.log("up");
      var ceci = $(".focused");
      var thisIndex = parseInt($(".focused").attr("data-index"));
      if (ligneActuelle != 1) {
        var thisIndex = parseInt($(".focused").attr("data-index"));
        ceci.removeClass("focused");
        $("#elt" + parseInt(thisIndex - 4)).addClass("focused");
        ligneActuelle = ligneActuelle - 1;
        elemToScroll = $(".focused");
      }
      break;
    case 39:
      console.log("right");
      var ceci = $(".focused");
      var thisIndex = parseInt($(".focused").attr("data-index"));
      if (thisIndex != $(".keynav_layout > div").length) {
        ceci.removeClass("focused");
        $("#elt" + parseInt(thisIndex + 1)).addClass("focused");
        elemToScroll = $(".focused");
      }
      if (thisIndex % 4 == 0) {
        ligneActuelle += 1;
      }
      break;
    case 40:
      console.log("down");
      var ceci = $(".focused");
      var thisIndex = parseInt($(".focused").attr("data-index"));
      if (ligneActuelle != ligneMax) {
        var thisIndex = parseInt($(".focused").attr("data-index"));
        ceci.removeClass("focused");
        var valeurAajouter = 4;
        while (thisIndex + valeurAajouter > $(".keynav_layout > div").length) {
          valeurAajouter--;
        }
        $("#elt" + parseInt(thisIndex + valeurAajouter)).addClass("focused");
        ligneActuelle = ligneActuelle + 1;
        elemToScroll = $(".focused");
      }
      break;
    default:
      return;
  }
  scroller($(".focused"));
  e.preventDefault();
});
setInterval(function () {
  if ($(".focused").length == 0) {
    $("#elt1").addClass("focused");
    ligneActuelle = 1;
  }
}, 3000);
