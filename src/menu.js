import {Menu} from './core/menu';

export class ContextMenu extends Menu {

	#body;
	constructor(selector) {
		super(selector);
		this.#body = document.body;

	}

	open() {
		this.#body.addEventListener("contextmenu", (e) => {
			e.preventDefault();
			this.el.style.left = `${e.offsetX}px`;
			this.el.style.top = `${e.offsetY}px`;
			this.el.classList.add("open");
		});
	}

	add(module) {
		const newModuleLiHTML = module.toHTML();
		newModuleLiHTML.addEventListener('click', module.trigger.bind(module));
		this.el.append(newModuleLiHTML);
	}

	close() {
		this.el.classList.remove("open");
	}


}