let tg = window.Telegram.WebApp;
let start = document.getElementById("start");
let calc = document.getElementById("calculate");
tg.expand();

start.addEventListener("click", () => {
  document.getElementById("main").style.display = "none";
  document.getElementById("form").style.display = "block";
  document.getElementById("yobirth").value = "1990";
  document.getElementById("mobirth").value = "01";
  document.getElementById("dobirth").value = "20";
});

calc.addEventListener("click", () => {
  let yob = document.querySelector("#year");
  let mob = document.querySelector("#month");
  let dob = document.querySelector("#day");
  document.getElementById("main").style.display = "none";

  let data = {
    yob: yob,
    mob: mob,
    dob: dob
  }
  tg.sendData(data)
  

  tg.close()
})
