const btnShare = document.getElementById("btnShare");
const barAuthor = document.getElementById("author");

btnShare.addEventListener("click", () => {
  barAuthor.classList.toggle("active");
});
