const btn = document.getElementById("btn");
const div2 = document.querySelector(".div2");
const affirBtn = document.getElementById("affirBtn");
const mantBtn = document.getElementById("mantBtn");
const img = document.getElementById("img");

const affirMessage = [
	"I am successful.",
	"I am confident.",
	"I am powerful.",
	"I am strong.",
	"I am getting better and better every day.",
	"All I need is within me right now.",
	"I wake up motivated.",
	"I am an unstoppable force of nature.",
];
const mantMessage = [
	"i am free of doubt",
	"i am free of fear",
	"i am free of shame",
	"i am free of blame",
	"i am free",
];

btn.addEventListener("click", () => {
	let content = document.querySelector(".div2 :first-child");
	content.remove();
	if (affirBtn.checked == true) {
		let para = document.createElement("p");
		const node = document.createTextNode(
			affirMessage[Math.floor(Math.random() * affirMessage.length)]
		);
		para.appendChild(node);
		div2.appendChild(para);
	} else if (mantBtn.checked == true) {
		const para2 = document.createElement("p");
		const node = document.createTextNode(
			mantMessage[Math.floor(Math.random() * mantMessage.length)]
		);
		para2.appendChild(node);
		div2.appendChild(para2);
	}
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
	let content = document.querySelector(".div2 :first-child");
	content.remove();
	div2.appendChild(img);
});
