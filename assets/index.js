let card = document.querySelectorAll(".card");
for (cards of card) {
  cards.addEventListener("mouseover", function (event) {
    if (event.target.id === "gelang") {
      event.target.setAttribute("src", "assets/image/p5baru.jpg");
      return;
    } else if (event.target.id === "medali") {
      event.target.setAttribute("src", "assets/image/p17baru.jpg");
      return;
    } else if (event.target.id === "gelbat") {
      event.target.setAttribute("src", "assets/image/sold.png");
      return;
    }
  });

  cards.addEventListener("mouseout", function (event) {
    if (event.target.id === "gelang") {
      event.target.setAttribute("src", "assets/image/p5.jpg");
      return;
    }
    if (event.target.id === "medali") {
      event.target.setAttribute("src", "assets/image/p17.jpg");
      return;
    }
    if (event.target.id === "gelbat") {
      event.target.setAttribute("src", "assets/image/p7.jpg");
      return;
    }
  });
}
// JavaScript untuk mengaktifkan tombol menu hamburger
const hamburgerButton = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-links");

hamburgerButton.addEventListener("click", function () {
  navList.classList.toggle("show");
});
