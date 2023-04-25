let tg = window.Telegram.WebApp;
let start = document.getElementById("start");
let calculate = document.getElementById("calculate");
tg.expand();

calculate.addEventListener("click", () => {
  let date = new Date(document.querySelector('input[type="date"]').value);

  let yob = date.getFullYear();
  let mob = date.getMonth() + 1;
  let dob = date.getDate();

  let birthday = {
    yob: yob,
    mob: mob,
    dob: dob
  };

  console.log(birthday);
  tg.sendData(birthday);

  tg.close();

});

start.addEventListener("click", () => {
  document.getElementById("main").style.display = "none";
  document.getElementById("form").style.display = "block";
});