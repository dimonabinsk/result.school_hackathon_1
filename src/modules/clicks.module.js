import {Module} from '../core/module'

export class ClicksModule extends Module {
	#body;
	#container;
	#countdown;
	#label;
	#count;
	#counter;

	constructor(type, text) {
		super(type, text);
		this.#body = document.body;
		this.#counter = 0;

	}


	trigger() {
		this.clearBody();
		this.#count = 5;
		this.#counter = 0;
		this.#container = document.createElement("div");
		this.#container.className = "container-countdown";
		this.#label = document.createElement("span");
		this.#countdown = document.createElement("span");
		this.#countdown.className = "countdown-span";
		this.#container.append(this.#label, this.#countdown);
		this.#body.append(this.#container);
		this.#timerCountDown();

	}

	#timerCountDown() {
		this.#click();
		const startTimer = setInterval(() => {
			this.#label.textContent = "Время пошло, давай кликай по мне ";
			this.#countdown.textContent = `0${this.#count}`;
			this.#count--;
			if(this.#count < 0) {
				clearInterval(startTimer);
				this.#label.textContent = "Время вышло, количество кликов: ";
				this.#countdown.textContent = `${this.#click()} раз`;
			}
		}, 1000)
	}

	#click() {
		const upCounter = () => {
			this.#counter++;
		}
		this.#body.addEventListener("click", upCounter);
		this.#body.addEventListener("dblclick", upCounter);

		return this.#counter;
	}
}