export class Module {
	constructor(type, text) {
		if(!type) {
			throw new Error('Please specify "type" param')
		}
		if(!text) {
			throw new Error('Please specify "text" param')
		}
		this.type = type
		this.text = text

		this.itemHtml = document.createElement("li");
		this.itemHtml.className = "menu-item";
		this.itemHtml.dataset.type = this.type;
		this.itemHtml.textContent = this.text;
	}

	trigger() {
		throw new Error(`Trigger method should be implemented in module "${this.type}"`)
	}

	toHTML() {
		return this.itemHtml;
	}

	clearBody() {
		const body = document.body;
		const ulListItem = document.getElementById("menu")
		body.style.backgroundColor = "#fff";
		while(body.lastElementChild !== ulListItem) {
			body.removeChild(body.lastElementChild);
		}
	}
}