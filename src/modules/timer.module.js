import {Module} from '../core/module';


export class TimerModule extends Module {
    #body
    constructor(type, text) {
        super(type, text);

        this.#body = document.body;
        this.input = document.createElement('input')
        this.form = document.createElement('form');
        this.button = document.createElement('button');
        this.label = document.createElement('label');
        this.container = document.createElement('div');
        this.counter = document.createElement('div');

        this.input.className = 'timer';
        this.input.placeholder = 'Введите число от 0 до 10';
        this.input.type = 'number';
        this.input.min = 0;
        this.input.max = 10;


        this.button.textContent = 'Начать отсчёт';
        this.button.className = 'button-timer';
        this.button.type = 'submit';

        this.counter.textContent = '0';
        this.counter.className = 'timer-count';

        this.form.append(this.input, this.button);
        this.container.append(this.form, this.counter);


    }


    trigger() {
        this.#body.append(this.container);
        this.form?.addEventListener('submit', event => {
            event.preventDefault();
            this.counter.textContent = this.input.value;
            this.form.style.display = 'none';
            this.counter.style.display = 'block';

            let count = +this.input.value;
            const timeOutstanding = setInterval( () => {
                count--;
                this.counter.textContent = `${count}`;
                if (count === 0) {
                    clearInterval(timeOutstanding);
                    setTimeout(() => {
                        alert('Время вышло');
                    }, 1000);
                }
            }, 1000);
            

        })
    }


}