import './styles/styles.css';
import { BackgroundModule } from '../src/modules/background.module.js'

const elBackground = document.querySelector ('[data-type = backgroundModule]')

elBackground?.addEventListener ('click', () => {
let element = new BackgroundModule ("backgroundModule", "Изменить фон")
element.trigger()
})