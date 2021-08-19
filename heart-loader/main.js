var heart = $(".heart").prop("outerHTML");
setInterval(function () {
  $(".heart").remove();
  $("main").html(heart);
}, 1500);
