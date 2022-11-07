//Accessing and storing elements
var allFilters = document.querySelectorAll('section.btns li.btn');
var allCards = document.querySelectorAll('section.gallery div.card');

// Add a click event for all the buttons
for(var i =0; i < allFilters.length; i++){
    allFilters[i].addEventListener('click', myFunction);
}

//Define myFunction
function myFunction(){
    //Access the button has the active class and remove active from other buttons
    var currentTab = document.querySelector('section.btns .active');
    currentTab.classList.remove('active');
    // add active class to the button which has been clicked on
    this.classList.add('active');

    //Get the value of the data-filter element when clicked
    var filter = this.getAttribute('data-filter');

    //if any buttoin is clicked except all work, then show contents of the clicked button and hide everything else
    if(filter != 'all'){
        for(let i = 0; i < allCards.length; i++){
            allCards[i].classList.add('hide');
            allCards[i].classList.remove('active');
            var currentItem = allCards[i].getAttribute('data-item');
            if(currentItem == filter){
                allCards[i].classList.add('active');
                allCards[i].classList.remove('hide');
            }
        }
    }
    // else all button is clicked and show everything
    else{
        for(let i = 0; i < allCards.length; i++){
            allCards[i].classList.remove('hide');
            allCards[i].classList.add('active');
        }
    }
}
