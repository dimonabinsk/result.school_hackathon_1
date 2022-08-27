import {Module} from '../core/module'

export class TimerModule extends Module {
	constructor(type, text) {
		super(type, text);
	}

	toHTML() {
		return this.itemHtml;
	}

	trigger() {
		super.trigger();
	}
}