let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

const wrapper = document.getElementById("wrapper");

wrapper.addEventListener("click", (event) => {
	
	const isButton = event.target.nodeName === "BUTTON"
	if (!isButton) {
		tg.close();
	}
	
	tg.sendData(event.target.id);

	tg.close();

});
