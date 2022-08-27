import {Module} from '../core/module'
import {getRandomColor} from '../utils/utils'


export class BackgroundModule extends Module {


	constructor(type, text) {
		super(type, text);

	}


	toHTML() {
		return this.itemHtml;
	}

	trigger() {
			document.body.style.backgroundColor = getRandomColor();

	}
}