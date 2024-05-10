const question = document.querySelectorAll(".question-box");
question.forEach(function (question) {
  question.addEventListener("click", function () {
    this.querySelector(".arrow").classList.toggle("rotate");
    let answer = this.nextElementSibling;
    answer.classList.toggle("show");
  });
});

// Function to create a new div
function createDiv() {
  // Create a new div element
  var newDiv = document.createElement("div");
  newDiv.classList.add("created-div");
  newDiv.textContent = "This is a dynamically created div";

  // Add the new div to the container
  document.getElementById("container").appendChild(newDiv);

  // Save the HTML of the container to local storage
  localStorage.setItem(
    "savedDivs",
    document.getElementById("container").innerHTML
  );
}

// Event listener for the button click
document.getElementById("createDivBtn").addEventListener("click", createDiv);

// Load previously saved divs from local storage on page load
window.onload = function () {
  var savedDivs = localStorage.getItem("savedDivs");
  if (savedDivs) {
    document.getElementById("container").innerHTML = savedDivs;
  }
};
