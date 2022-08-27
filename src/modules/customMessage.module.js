import {Module} from '../core/module'
import {random} from "../utils/utils";

export class CustomMessageModule extends Module {
	#messages
	#messagesContainerHTML;
	#newMessage
constructor(type, text) {
	super(type, text);
	this.#messages = [
		'Это случайное сообщение',
		'I love JavaScript',
		'42',
		'Здесь могла бы быть ваша реклама',
		'НЛО прилетело и опубликовало эту надпись здесь'
	];

	this.#messagesContainerHTML = document.createElement('div');
	this.#messagesContainerHTML.classList.add('custom-messages');
	this.#newMessage = document.createElement('p');
	this.#newMessage.classList.add('custom-messages__message');


}

	trigger() {
		this.clearBody();
		this.#messagesContainerHTML.innerHTML = "";
		this.#newMessage.classList.add('custom-messages__message');
		this.#newMessage.textContent = this.#messages[random(0, this.#messages.length - 1)];
		this.#messagesContainerHTML.append(this.#newMessage);
		document.body.append(this.#messagesContainerHTML);
		setTimeout(() => {
			this.#messagesContainerHTML.remove();
		}, 3500);

	}


}