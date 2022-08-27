import { Module } from '../core/module'

export class ClockModule extends Module {
   #clockModule;
   constructor(type, text) {
      super(type, text);
   }
   
   trigger() {
      this.#clockModule = document.createElement('div');
      this.#clockModule.classList.add('module-clock');
      document.body.append(this.#clockModule);
      setInterval(function () {
         let date = new Date;

         let getHours = date.getHours();
         if (date.getHours() < 10) {
            getHours = `0${date.getHours()}`
         };

         let getMinutes = date.getMinutes();
         if (date.getMinutes() < 10) {
            getMinutes = `0${date.getMinutes()}`
         };

         let getSeconds = date.getSeconds();
         if (date.getSeconds() < 10) {
            getSeconds = `0${date.getSeconds()}`
         };
         this.#clockModule.innerHTML = `${getHours}:${getMinutes}:${getSeconds}`
      }, 1000);
   }
}