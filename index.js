let  button = document.querySelector("body");

button.addEventListener("click", function() {
  var ls = "#" + Math.floor(Math.random() * 16777215).toString(16);
  button.style.backgroundColor = ls;
});
