let container = document.querySelector(".btn-container");
let btn = document.getElementById("btn");

container.addEventListener("click", (e) => {
  alert("Hola! Soy el div");
});

btn.addEventListener("click", (e) => {
  alert("Hola");
  e.stopPropagation();
});
