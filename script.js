let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

const sign_selector = document.getElementById("select-sign");
const day_selector = document.getElementById("select-day");
const day_btn = document.querySelector("#select-day .btn");
const radio_buttons = document.querySelectorAll('input[name="day"]');


sign_selector.addEventListener("click", (event) => {
	
	const isButton = event.target.nodeName === "BUTTON"
	if (!isButton) {
		return;
	}
	
	sign_selector.style.display = "none";
	day_selector.style.display = "inline-block";
	
	sign = event.target.id;
	
});

day_btn.addEventListener("click", () => {
	
	let selected_day;
	
	for (const radio_button of radio_buttons) {
		if (radio_button.checked) {			
			selected_day = radio_button.value;
			console.log(selected_day);
			tg.sendData(sign, selected_day);

			tg.close();
			
		}
		else {}			
	}

});
