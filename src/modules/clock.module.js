import {Module} from '../core/module'

export class ClockModule extends Module {
	#body;
	date;
	getHours;
	getMinutes;
	getSeconds;
	#clockModule;

	constructor(type, text) {
		super(type, text);
		this.#clockModule = document.createElement('div');
		this.#clockModule.classList.add('module-clock-hidden');
		this.#clockModule.dataset.clock = type;
		this.#body = document.body;

	}

	newTime() {
		this.date = new Date;
		this.getHours = this.date.getHours();
		this.getMinutes = this.date.getMinutes();
		this.getSeconds = this.date.getSeconds();

		if(this.getHours < 10) {
			this.getHours = `0${this.getHours}`;
		}

		if(this.getMinutes < 10) {
			this.getMinutes = `0${this.getMinutes}`;
		}

		if(this.getSeconds < 10) {
			this.getSeconds = `0${this.getSeconds}`;
		}
		return this.#clockModule.innerText = `${this.getHours}:${this.getMinutes}:${this.getSeconds}`;

	}

	trigger() {
		this.clearBody();
		setInterval(this.newTime.bind(this), 1000);
		this.#body.append(this.#clockModule);
		setTimeout(() => {
			this.#clockModule.classList.add('show');
			}, 1000);
	}
} 