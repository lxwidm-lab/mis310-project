console.log("JavaScript is connected.");
const button = document.querySelector("#details-button");
const details = document.querySelector("#details");

button.addEventListener("click", function () {
    details.textContent = "In Index Page click on Webpage you want to navigate to" 
});