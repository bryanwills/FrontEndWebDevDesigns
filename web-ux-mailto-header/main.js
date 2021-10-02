const mail = document.querySelector(".mail");
const lid = document.querySelector(".lid");
const mailBack = document.querySelector(".mail-backside");

setTimeout(() => {
  mail.style.animation = `drop-down 1s forwards 1`;
  lid.style.top = `100%`;
  lid.style.opacity = 0;
  mailBack.style.animation = `drop-down 1s forwards 1`;
}, 2500);
