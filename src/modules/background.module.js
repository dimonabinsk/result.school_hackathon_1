import {Module} from '../core/module'
import {getRandomColor} from '../utils/utils'


export class BackgroundModule extends Module {
	#itemHtml;

	constructor(type, text) {
		super(type, text);
		this.#itemHtml = document.createElement("li");
		this.#itemHtml.className = "menu-item";
		this.#itemHtml.dataset.type = this.type;
		this.#itemHtml.textContent = this.text;
	}


	toHTML() {
		return this.#itemHtml;
	}

	trigger() {
			document.body.style.backgroundColor = getRandomColor();

	}
}