// Dom Part

var photo_database = [];
var photo_book = [];
var selected_photo;

var dom_photogallery = document.querySelector("#photo-gallery");
var dom_blocphoto = document.querySelector("#bloc-photo");
var dom_cachephoto = document.querySelector("#cache-photo");

var max_photo = 49;

function setPhotos(min, max) {
  photo_book = [];
  for (var i = min; i < max; i++) {
    photo_book.push(photo_database[i]);
  }
  loadPhotoGallery();
}

function addClass(paramCible, paramClass) {
  paramCible.classList.add(paramClass);
}

function removeClass(paramCible, paramClass) {
  paramCible.classList.remove(paramClass);
}

function hasClass(paramCible, paramClass) {
  return paramCible.classList.contains(paramClass);
}

function loadPhotoGallery() {
  dom_photogallery.innerHTML = "";
  for (var key in photo_book) {
    var photo = photo_book[key];
    dom_photogallery.innerHTML += getPhotoConstruction(photo);
  }
  displayImg();
}

function displayImg() {
  var photos = document.getElementsByClassName("photo");
  var photo;
  for (var i = 0; i < photos.length; i++) {
    photo = photos[i];
    var time = i * 20;
    displayThis(photo, time);
  }
}

function displayThis(photo, time) {
  setTimeout(function () {
    addClass(photo, "displayed");
  }, time);
}

function displayPhoto(photo) {
  addClass(dom_cachephoto, "active");
  dom_blocphoto.style.top = photo.offsetTop + "px";
  dom_blocphoto.style.left = photo.offsetLeft + "px";
  dom_blocphoto.style.width = photo.offsetWidth + "px";
  dom_blocphoto.style.height = photo.offsetHeight + "px";
  setTimeout(() => {
    addClass(dom_blocphoto, "active");
    setTimeout(() => {
      displayPhotoFull(photo);
    }, 500);
  }, 400);
}

function displayPhotoFull(photo) {
  var base = 300;
  dom_blocphoto.style.left = 25 + "%";
  dom_blocphoto.style.top = 20 + "%";
  setTimeout(() => {
    dom_blocphoto.style.height = 60 + "%";
  }, base);
  setTimeout(() => {
    dom_blocphoto.style.width = 50 + "%";
  }, base * 2);
  setTimeout(() => {
    displayPhotoContent(photo);
  }, base * 3);
}

function displayPhotoContent(photo) {
  var full_url = photo.getAttribute("data-url");
  dom_blocphoto.innerHTML = "";
  dom_blocphoto.innerHTML += "<div>";
  dom_blocphoto.innerHTML +=
    '<img id="image_full" src="' + full_url + '" alt="alt"/>';
  dom_blocphoto.innerHTML += "</div>";
  dom_blocphoto.innerHTML +=
    '<button id="close" onclick="closeAll()">X</button>';
  selected_photo = photo;
  setTimeout(() => {
    addClass(document.querySelector("#image_full"), "displayed");
  }, 300);
  setTimeout(() => {
    addClass(document.querySelector("#close"), "displayed");
  }, 600);
}

function closeAll() {
  removeClass(document.querySelector("#image_full"), "displayed");
  removeClass(document.querySelector("#close"), "displayed");
  setTimeout(() => {
    dom_blocphoto.style.top = selected_photo.offsetTop + "px";
    dom_blocphoto.style.left = selected_photo.offsetLeft + "px";
    dom_blocphoto.style.width = selected_photo.offsetWidth + "px";
    dom_blocphoto.style.height = selected_photo.offsetHeight + "px";
  }, 300);
  setTimeout(() => {
    removeClass(dom_blocphoto, "active");
  }, 900);
  setTimeout(() => {
    removeClass(dom_cachephoto, "active");
  }, 1200);
}

function getPhotoConstruction(paramPhoto) {
  var domPhoto =
    '<div class="photo" data-url="' +
    paramPhoto.url +
    '" data-title="' +
    paramPhoto.title +
    '" onclick="displayPhoto(this)">';
  //domPhoto += '<button>' + paramPhoto.title + '</button>';
  domPhoto += '<img alt="photo" src="' + paramPhoto.thumbnailUrl + '"/>';
  domPhoto += "</div>";
  return domPhoto;
}

// Data Part
var myHeaders = new Headers();

var api_base = "https://jsonplaceholder.typicode.com/";

var myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

fetch(api_base + "photos", myInit)
  .then(function (response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      var error = { status: response.status, text: response.statusText };
      throw error;
    }
  })
  .then(function (data) {
    photo_database = data;
    if (photo_database.length < max_photo) setPhotos(0, photo_database.length);
    else setPhotos(0, max_photo);
  })
  .catch(function (error) {
    console.log("Il y a eu un problème avec l'opération fetch: ", error);
  });
