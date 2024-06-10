document.addEventListener("DOMContentLoaded", () => {
 const intro = document.querySelector(".intro");
 const container = document.querySelector(".container");

 setTimeout(() => {
     intro.classList.add("hidden");
     container.classList.remove("hidden");
 }, 20); 
});
