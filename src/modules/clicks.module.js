import {Module} from '../core/module'

export class ClicksModule extends Module {
	#body;
	#container;
	#countdown;
	#label;

	constructor(type, text) {
		super(type, text);
		this.#body = document.body;
	}


	trigger() {
		this.clearBody();
		this.#container = document.createElement("div");
		this.#label = document.createElement("span");
		this.#countdown = document.createElement("span");
		this.#container.append(this.#label, this.#countdown);
		this.#body.append(this.#container);
		this.#timerCountDown();

	}

	#timerCountDown() {
	let counter = 0;
	let time = 5;
		const startTimer = setInterval(() => {
			this.#label.textContent = "Кликай по экрану, время пошло:  ";
			this.#countdown.textContent = ` 0${time} сек`;
			time--;
			if(time < 0) {
				clearInterval(startTimer);
				this.#label.textContent = "Время вышло, количество кликов: ";
				this.#countdown.textContent = `${counter} раз`;
			}
		}, 1000);

		const upCounter = () => {
			counter++;
		}
		this.#body.addEventListener("click", upCounter);
		this.#body.addEventListener("dblclick", upCounter);

	}

}