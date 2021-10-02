const upload = document.querySelector("input");
const uploadbtn = document.querySelector(".upload");
const image = document.querySelector(".img img");
const close = document.querySelector(".icon .close");

var loadFile = function(event) {
  var image = document.querySelector(".img img");
  image.classList.add("active");
  close.classList.add("exit");
  // if user clicks on the browse file button it executes a command opening a pannel for the user to pick he's source file of the image
  image.src = URL.createObjectURL(event.target.files[0]);

  close.onclick = (e)=>{
    image.classList.remove("active");
    close.classList.remove("exit");
  }
}
