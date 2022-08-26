import {Menu} from './core/menu'

export class ContextMenu extends Menu {
	#arr;
	#body;
	#itemHTML;
	constructor(selector) {
		super(selector);
		this.#body  = document.body;
		this.#arr = [
			"Аналитика кликов",
			"Случайная фигура",
			"Таймер отсчета",
			"Случайный звук",
			"Случайный фон",
			"Кастомное сообщение"
		];

		this.#itemHTML = this.#arr.map(str => {
			const itemLiHTML = document.createElement("li");
			itemLiHTML.className = "menu-item";
			itemLiHTML.textContent = str;
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