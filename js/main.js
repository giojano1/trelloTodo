//show add card
const showAddCard = document.querySelectorAll(".addCard");
showAddCard.forEach(function (show) {
  show.addEventListener("click", function () {
    show.style.display = "none";

    const addCardInfo = this.parentElement.querySelector(".addCardInfo");
    addCardInfo.style.display = "flex";

    const createCard = this.parentElement.querySelector(".createCard");
    createCard.style.display = "flex";
  });
});
//hide add card
const hideAddcard = document.querySelectorAll(".cancelBtn");
hideAddcard.forEach(function (hide) {
  hide.addEventListener("click", function () {
    const addCardInfo = this.closest(".box").querySelector(".addCardInfo");
    addCardInfo.style.display = "none";

    const createCard = this.closest(".box").querySelector(".createCard");
    createCard.style.display = "none";

    const addCard = this.closest(".box").querySelector(".addCard");
    addCard.style.display = "flex";
  });
});
// create card
const createBtn = document.querySelectorAll(".createBtn");
createBtn.forEach(function (create) {
  create.addEventListener("click", function () {
    const cardsBox = this.closest(".box").querySelector(".cardsBox");
    const newList = document.createElement("div");
    newList.className = "card";
    cardsBox.appendChild(newList);

    const textContent = this.closest(".box").querySelector(".areaBox");
    const newListText = document.createElement("p");
    newListText.textContent = textContent.value;
    newList.appendChild(newListText);

    textContent.value = "";
  });
});
