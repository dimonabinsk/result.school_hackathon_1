import {Module} from '../core/module'
import {random} from "../utils/utils";

export class CustomMessageModule extends Module {
	#messages;
	#messagesContainerHTML;
	#newMessage;
	#timeoutToDeleteId;
	#timeoutToHideId;

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
		this.#newMessage.classList.remove('custom-messages__message_hidden');
		this.#newMessage.textContent = this.#messages[random(0, this.#messages.length - 1)];
		this.#messagesContainerHTML.append(this.#newMessage);
		document.body.append(this.#messagesContainerHTML);

		if (this.#timeoutToHideId) {
			clearTimeout(this.#timeoutToHideId);
		}

		if (this.#timeoutToDeleteId) {
			clearTimeout(this.#timeoutToDeleteId);
		}

		this.#timeoutToHideId = setTimeout(() => {
			this.#newMessage.classList.add('custom-messages__message_hidden');
		}, 2000);

		this.#timeoutToDeleteId = setTimeout(() => {
			this.#newMessage.remove();
		}, 2500);
	}
}