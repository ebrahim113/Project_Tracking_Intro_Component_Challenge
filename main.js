const nav = document.querySelector("header nav");

const humburgerIcon = document.querySelector(".humburger");

const closeIcon = document.querySelector(".close");

humburgerIcon.addEventListener("click", (_) => {
  nav.style.display = "flex";
  humburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", (_) => {
  nav.style.display = "none";
  humburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
});
