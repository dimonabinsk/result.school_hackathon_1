import {Module} from '../core/module'
import {random} from "../utils/utils";

export class ShapeModule extends Module {
	#figure;
	#body;
	constructor(type, text) {
		super(type, text);
		this.#body = document.body;
		this.#figure = document.createElement('div');
		this.#figure.className = "circle";
	}

	#setColor(elem) {
		elem.style.backgroundColor = `rgb(${random(10, 230)},${random(90, 200)},${random(30, 210)})`;
	}



	trigger() {
		this.clearBody();
		const {width, height} = this.#body.getBoundingClientRect();
		const sizeCircle = random(25, 100);
		const x = random(0, width - sizeCircle);
		const y = random(0, height - sizeCircle);
		this.#body.style.position = "relative";
		this.#figure.style.position = "absolute";
		this.#figure.style.width = `${sizeCircle}px`;
		this.#figure.style.height = `${sizeCircle}px`;
		this.#figure.style.top = `${y}px`;
		this.#figure.style.left = `${x}px`;
		this.#figure.style.borderRadius = `${random(0, 50)}%`;
		this.#setColor(this.#figure);
		this.#body.append(this.#figure);
	}
}