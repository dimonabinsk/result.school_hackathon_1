import { Module } from '../core/module';
import { random } from '../utils/utils';

const messages = [
  'Это случайное сообщение',
  'I love JavaScript',
  '42',
  'Здесь могла бы быть ваша реклама',
  'НЛО прилетело и опубликовало эту надпись здесь'
];

export class CustomMessageModule extends Module {
  #messagesContainerHTML;

  constructor(type, text) {
    super(type, text);
    this.#messagesContainerHTML = document.createElement('div');
    this.#messagesContainerHTML.classList.add('custom-messages');    
    document.body.append(this.#messagesContainerHTML);
  }

  trigger() {
    const newMessage = document.createElement('p');
    newMessage.classList.add('custom-messages__message');
    newMessage.textContent = messages[random(0, messages.length - 1)];

    setTimeout(() => {
      newMessage.classList.add('custom-messages__message_hidden');
    }, 3000);
    setTimeout(() => {
      newMessage.remove();
    }, 3500);

    this.#messagesContainerHTML.append(newMessage);
  }
}