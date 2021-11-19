let bottomItem = document.querySelectorAll(".bottom__item");

bottomItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.lastElementChild.classList.toggle("hidden");
    item.firstElementChild.lastElementChild.classList.toggle("fa-chevron-up");
  });
});
