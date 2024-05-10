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
// const createBtn = document.querySelectorAll(".createBtn");
// createBtn.forEach(function (create) {
//   create.addEventListener("click", function () {
//     const cardsBox = this.closest(".box").querySelector(".cardsBox");
//     const textContent = this.closest(".box").querySelector(".areaBox");
//     if (textContent.value !== "") {
//       const newList = document.createElement("div");
//       newList.className = "card";
//       cardsBox.appendChild(newList);

//       const newListText = document.createElement("p");
//       newListText.textContent = textContent.value;
//       newList.appendChild(newListText);

//       textContent.value = "";
//     } else {
//       const createCardDiv = this.closest(".box").querySelector(".createCard");
//       const addCardDiv = this.closest(".box").querySelector(".addCard");
//       const addCardInfo = this.closest(".box").querySelector(".addCardInfo");

//       addCardInfo.style.display = "none";
//       createCardDiv.style.display = "none";
//       addCardDiv.style.display = "flex";
//     }
//   });
// });

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

      // Store created div in localStorage
      const sectionIndex = Array.from(
        this.closest(".container").parentElement.children
      ).indexOf(this.closest(".container"));
      const cardIndex = Array.from(cardsBox.children).indexOf(newList);
      localStorage.setItem(`card-${sectionIndex}-${cardIndex}`, trimmedValue);

      textContent.value = "";
    } else {
      const createCardDiv = this.closest(".box").querySelector(".createCard");
      const addCardDiv = this.closest(".box").querySelector(".addCard");
      const addCardInfo = this.closest(".box").querySelector(".addCardInfo");

      addCardInfo.style.display = "none";
      createCardDiv.style.display = "none";
      addCardDiv.style.display = "flex";
    }
  });
});

function recreateCards() {
  const containers = document.querySelectorAll(".container");
  containers.forEach(function (container, sectionIndex) {
    const cardsBox = container.querySelector(".cardsBox");
    for (let cardIndex = 0; cardIndex < localStorage.length; cardIndex++) {
      const key = localStorage.key(cardIndex);
      if (key.startsWith(`card-${sectionIndex}-`)) {
        const trimmedValue = localStorage.getItem(key);
        const newList = document.createElement("div");
        newList.className = "card";
        newList.textContent = trimmedValue;
        cardsBox.appendChild(newList);
      }
    }
  });
}

// Call the function to recreate cards when the page loads
window.addEventListener("load", function () {
  recreateCards();
});
