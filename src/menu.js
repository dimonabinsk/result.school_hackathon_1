import {Menu} from './core/menu'

export class ContextMenu extends Menu {
	#arr;
	#body;
	#itemHTML;
	constructor(selector) {
		super(selector);
		this.#body  = document.body;
		this.#arr = [
			{
				name:"Аналитика кликов",
				data: "click-analytics",
			},
			{
				name:"Случайная фигура",
				data: "random-figure",
			},
			{
				name: "Таймер отсчета",
				data: "countdown-timer",
			},
			{
				name: "Случайный звук",
				data: "random-sound",
			},
			{
				name: "Случайный фон",
				data: "random-background",
			},
			{
				name:"Кастомное сообщение",
				data: "custom-message",
			}

		];

		this.#itemHTML = this.#arr.map(obj => {
			const itemLiHTML = document.createElement("li");
			itemLiHTML.className = "menu-item";
			itemLiHTML.textContent = obj.name;
			itemLiHTML.setAttribute("data-type", `${obj.data}`);
			return itemLiHTML;
		})

	}

	open() {
		this.#body.addEventListener("contextmenu", (e) => {
			e.preventDefault();
			this.close();
			this.add();
			this.el.style.left = `${e.offsetX}px`;
			this.el.style.top = `${e.offsetY}px`;
			this.el.classList.add("open");
		});
	}

	add() {
		this.#itemHTML.forEach(elem => this.el.append(elem));
	}

	close() {
		this.el.innerHTML = "";
		this.el.classList.remove("open");
	}


}