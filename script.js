let tg = window.Telegram.WebApp;
let yob = document.getElementById("yobirth")
let mob = document.getElementById("mobirth")
let dob = document.getElementById("dobirth")
let calc = document.getElementById("calculate")

calc.addEventListener("click", () => {
  document.getElementById("main").style.display = "none";
  document.getElementById("form").style.display = "block";
  document.getElementById("yobirth").value = 1990
  document.getElementById("mobirth").value = 01
  document.getElementById("dobirth").value = 20
});
