import './styles/styles.css';
import { ContextMenu } from "./menu";
import { BackgroundModule } from './modules/background.module';
import {CustomMessageModule} from "./modules/customMessage.module";
import {ClicksModule} from "./modules/clicks.module";
import {RandomSoundModule} from "./modules/randomSound.module";
import {ShapeModule} from "./modules/shape.module";
import {TimerModule} from "./modules/timer.module";

const modules = [
    new BackgroundModule('random-background', 'Случайный фон'),
    new CustomMessageModule("custom-message", "Кастомное сообщение"),
    new ClicksModule("click-analytics", "Аналитика кликов"),
    new RandomSoundModule("random-sound","Случайный звук"),
    new ShapeModule("random-figure", "Случайная фигура"),
    new TimerModule("countdown-timer", "Таймер отсчета")

];
// вызов контекстное меню
const contextMenu = new ContextMenu( "#menu" );
contextMenu.open();

modules.forEach(module => contextMenu.add(module));