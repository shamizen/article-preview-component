let shareButton = document.querySelectorAll(".share-btn");
shareButton.forEach((element) => element.addEventListener("click", handleOnClick));

document.querySelector(".share-container").classList.add("hidden");

function handleOnClick() {
  let profileContainer = document.querySelector(".profile-container");
  profileContainer.className === "profile-container" ? displayShareOption() : collapsedShareOption();
}

function displayShareOption() {
  document.querySelector(".profile-container").classList.add("hidden");
  document.querySelector(".share-container").classList.remove("hidden");
  document.querySelector(".share-container").classList.add("pop-up");
}

function collapsedShareOption() {
  document.querySelector(".profile-container").classList.remove("hidden");
  document.querySelector(".share-container").classList.remove("pop-up");
  document.querySelector(".share-container").classList.add("hidden");
}
