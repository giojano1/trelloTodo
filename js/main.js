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

// Create card
const createBtn = document.querySelectorAll(".createBtn");
createBtn.forEach(function (create) {
  create.addEventListener("click", function () {
    const textContent = this.closest(".box").querySelector(".areaBox");
    const trimmedValue = textContent.value.trim();

    if (trimmedValue !== "") {
      const cardsBox = this.closest(".box").querySelector(".cardsBox");
      const newList = document.createElement("div");
      newList.className = "card";
      newList.textContent = trimmedValue;
      cardsBox.appendChild(newList);

      const cardMan = document.createElement("div");
      cardMan.className = "edit";
      newList.appendChild(cardMan);

      const moveBtn = document.createElement("img");
      const removeBtn = document.createElement("img");
      moveBtn.src = "img/arrow.svg";
      removeBtn.src = "img/cancel.svg";

      cardMan.appendChild(moveBtn);
      cardMan.appendChild(removeBtn);

      textContent.value = "";

      // Remove card
      removeBtn.addEventListener("click", function () {
        const card = this.closest(".card");
        const cardsBox = card.closest(".cardsBox");
        cardsBox.removeChild(card);
      });
      //move card
      moveBtn.addEventListener("click", function () {
        const sourceBox = this.closest(".container");
        const destinationBox = sourceBox.nextElementSibling; // Assuming the destination is always the next sibling container

        const card = this.closest(".card");

        // Remove card from source container
        sourceBox.querySelector(".cardsBox").removeChild(card);

        // Append card to destination container
        destinationBox.querySelector(".cardsBox").appendChild(card);
      });
    } else {
      const createCardDiv = this.closest(".box").querySelector(".createCard");
      const addCardDiv = this.closest(".box").querySelector(".addCard");
      const addCardInfo = this.closest(".box").querySelector(".addCardInfo");

      addCardInfo.style.display = "none";
      createCardDiv.style.display = "none";
      addCardDiv.style.display = xw"flex";
    }
  });
});
