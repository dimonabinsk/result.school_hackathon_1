import './styles/styles.css';
import { BackgroundModule } from './modules/background.module';

const elBackground = document.querySelector ('[data-type = "random-background"]')

elBackground?.addEventListener ('click', () => {
let element = new BackgroundModule ("backgroundModule", "Изменить фон")
element.trigger()
})