console.log("JavaScript動いた！");

const questions = document.querySelectorAll(".faq-question");

questions.forEach(function (question) {

  question.addEventListener("click", function () {

    const answer = question.nextElementSibling;

    answer.classList.toggle("open");

  });

});
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

});

fadeElements.forEach((element) => {

  observer.observe(element);

});
const menuButton = document.querySelector(".menu-button");

const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {

  menu.classList.toggle("open");

});

// メニューのリンクを押したら閉じる
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});