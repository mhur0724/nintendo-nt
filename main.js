let bottomItem = document.querySelectorAll(".bottom__item");
let availableNowLi = document.querySelectorAll(".available-now__ul__li");
let availableNowUl = document.querySelector(".available-now__ul");
let trendingGamesUl = document.querySelector(".trending-games__ul");
let NewReleasesUl = document.querySelector(".new-releases__ul");
let newsTopUl = document.querySelector(".news__ul__top");
let newsBottomUl = document.querySelector(".news__ul__bottom");
let hamburger = document.querySelector(".hamburger");
let bottomNav = document.querySelector(".bottom-nav");
let main = document.querySelector("main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  bottomNav.classList.toggle("open");
  main.classList.toggle("open");
  document.getElementById("overlay").classList.toggle("open");
});

main.addEventListener("click", () => {
  if (main.classList.contains("open")) {
    hamburger.classList.toggle("open");
    bottomNav.classList.toggle("open");
    main.classList.toggle("open");
    document.getElementById("overlay").classList.toggle("open");
  }
});

bottomItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.lastElementChild.classList.toggle("hidden");
    item.firstElementChild.lastElementChild.classList.toggle("fa-chevron-up");
  });
});

fetch("objects/AvailableNow.json")
  .then((response) => response.json())
  .then((data) => {
    for (i in data) {
      let li = document.createElement("li");
      let img = document.createElement("img");
      let title = document.createElement("h2");
      let p = document.createElement("p");

      img.src = data[i].image;
      title.innerHTML = data[i].title;
      p.innerHTML = "Nintendo Switch";
      li.appendChild(img);
      li.appendChild(title);
      li.appendChild(p);
      availableNowUl.appendChild(li);
    }
  });

fetch("objects/TrendingGames.json")
  .then((response) => response.json())
  .then((data) => {
    for (i in data) {
      let li = document.createElement("li");
      let img = document.createElement("img");
      let date = document.createElement("p");
      let title = document.createElement("h2");
      let price = document.createElement("p");
      let p = document.createElement("p");

      img.src = data[i].image;

      date.innerHTML = data[i].date;
      date.classList.add("trending-games__date");

      title.innerHTML = data[i].title;
      price.innerHTML = data[i].price;
      p.innerHTML = "Nintendo Switch";

      li.appendChild(img);
      li.appendChild(date);
      li.appendChild(title);
      li.appendChild(price);
      li.appendChild(p);

      trendingGamesUl.appendChild(li);
    }
  });

fetch("objects/NewReleases.json")
  .then((response) => response.json())
  .then((data) => {
    for (i in data) {
      let li = document.createElement("li");
      let img = document.createElement("img");
      let date = document.createElement("p");
      let title = document.createElement("h2");
      let price = document.createElement("p");
      let p = document.createElement("p");

      img.src = data[i].image;

      date.innerHTML = data[i].date;
      date.classList.add("trending-games__date");

      title.innerHTML = data[i].title;
      price.innerHTML = data[i].price;
      p.innerHTML = "Nintendo Switch";

      li.appendChild(img);
      li.appendChild(date);
      li.appendChild(title);
      li.appendChild(price);
      li.appendChild(p);

      NewReleasesUl.appendChild(li);
    }
  });

fetch("objects/News.json")
  .then((response) => response.json())
  .then((data) => {
    for (i in data.top) {
      let li = document.createElement("li");
      let img = document.createElement("img");
      let date = document.createElement("p");
      let title = document.createElement("h2");
      let info = document.createElement("p");

      img.src = data.top[i].image;
      date.innerHTML = data.top[i].date;
      title.innerHTML = data.top[i].title;
      info.innerHTML = data.top[i].info;

      li.appendChild(img);
      li.appendChild(date);
      li.appendChild(title);
      li.appendChild(info);

      newsTopUl.appendChild(li);
    }
    for (i in data.bottom) {
      let li = document.createElement("li");
      let img = document.createElement("img");
      let date = document.createElement("p");
      let title = document.createElement("h2");

      img.src = data.bottom[i].image;
      date.innerHTML = data.bottom[i].date;
      title.innerHTML = data.bottom[i].title;

      li.appendChild(img);
      li.appendChild(date);
      li.appendChild(title);

      newsBottomUl.appendChild(li);
    }
  });
