let shareBtn_1 = document.querySelector(".share-btn");
shareBtn_1.addEventListener("click", displayShareOption, false);

let shareBtn_2 = document.querySelector(".right.share-btn");
shareBtn_2.addEventListener("click", collapsedShareOption, false);

function displayShareOption() {
  let profileContainer = document.querySelector(".profile-container");
  let shareContainer = document.querySelector(".share-container");
  profileContainer.classList.add("display-share");
  shareContainer.classList.add("display-share");
}

function collapsedShareOption() {
  let profileContainer = document.querySelector(".profile-container");
  let shareContainer = document.querySelector(".share-container");
  profileContainer.className = "profile-container";
  shareContainer.className = "share-container";
}
