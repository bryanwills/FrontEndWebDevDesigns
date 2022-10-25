const passwordInput = document.querySelector(".password-box input"),
copyIcon = document.querySelector(".password-box .copy-icon"),
rangeInput = document.querySelector(".range-box input"),
sliderNumber = document.querySelector(".range-box .slider-number"),
generateButton = document.querySelector(".generate-button");

//Available characters
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=+[]{]}|;:'/?.>,<";

// function used on page reload, generateButton clicked and rangeInput slider
const generatePassword = () => {
    let newPassword = "";
    for (let i = 0; i < rangeInput.value; i++) {
        let randomNumbers = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomNumbers];;
    }
    passwordInput.value = newPassword;
    copyIcon.classList.replace("uil-file-check-alt", "uil-copy"); //replaces icon state

};

rangeInput.addEventListener("click", () => {
    sliderNumber.innerText = rangeInput.value;

});

// copy generated password value when icon is clicked
copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt"); //replaces icon state
})
generatePassword();

generateButton.addEventListener("click", generatePassword);