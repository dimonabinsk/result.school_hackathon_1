import {Menu} from './core/menu';
import {BackgroundModule} from "./modules/background.module";
import {CustomMessageModule} from "./modules/customMessage.module";

export class ContextMenu extends Menu {
	#tasks
	#body;
	#messages
	constructor(selector) {
		super(selector);
		this.#body = document.body;
		this.#tasks = [
			{
				name:"Аналитика кликов",
				data:"click-analytics",
			},
			{
				name:"Случайная фигура",
				data:"random-figure",
			},
			{
				name:"Таймер отсчета",
				data:"countdown-timer",
			},
			{
				name:"Случайный звук",
				data:"random-sound",
			},
			{
				name:"Случайный фон",
				data:"random-background",
			},
			{
				name:"Кастомное сообщение",
				data:"custom-message",
			}

		];


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
		const backgroundModule = new BackgroundModule(this.#tasks[4].data, this.#tasks[4].name);
		const customMessage = new CustomMessageModule(this.#tasks[5].data, this.#tasks[5].name);

		this.el.append(
			backgroundModule.toHTML(),
			customMessage.toHTML()
		);
		backgroundModule.trigger();
		customMessage.trigger();
	}

	close() {
		this.el.innerHTML = "";
		this.el.classList.remove("open");
	}


}