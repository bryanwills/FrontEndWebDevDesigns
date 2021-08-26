function moveLine(target) {
  target.addClass("active");
  setTimeout(function () {
    target.removeClass("active");
    target.addClass("transition");
    target.addClass("inactive");
    setTimeout(function () {
      target.removeAttr("class");
      moveLine(target);
    }, 700);
  }, 700);
}
function scinder(classe) {
  var content = classe.text();
  var newContent = "";
  for (var i = 0; i < content.length; i++) {
    newContent += "<span>" + content[i] + "</span>";
  }
  classe.html(newContent);
}
function loading(classe, speed) {
  classe.each(function (index) {
    var ceci = $(this);
    setTimeout(function () {
      classe.removeClass("active");
      ceci.addClass("active");
    }, index * speed);
  });
  setTimeout(function () {
    loading(classe, speed);
  }, classe.length * speed);
}
$(function () {
  scinder($(".label-loader"));
  loading($(".label-loader > span"), 150);
  moveLine($(".loader > em"));
});
