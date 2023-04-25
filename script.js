let tg = window.Telegram.WebApp;
let start = document.getElementById("start");
let calculate = document.getElementById("calculate");
tg.expand();

calculate.addEventListener("click", () => {
  let birthday = new Date(document.querySelector('input[type="date"]').value);

  console.log(JSON.stringify(birthday));
  tg.sendData(JSON.stringify(birthday));

  tg.close();

});

start.addEventListener("click", () => {
  document.getElementById("main").style.display = "none";
  document.getElementById("form").style.display = "block";
});