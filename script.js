let tg = window.Telegram.WebApp;
let start = document.getElementById("start");
let calculate = document.getElementById("calculate");
tg.expand();

calculate.addEventListener("click", () => {
  let yob = document.querySelector("#year");
  let mob = document.querySelector("#month");
  let dob = document.querySelector("#day");

  document.getElementById("test").style.display = "none";

  let data = {
    yob: yob,
    mob: mob,
    dob: dob
  };

  tg.sendData(data);

  tg.close();

});

start.addEventListener("click", () => {
  document.getElementById("main").style.display = "none";
  document.getElementById("form").style.display = "block";
});