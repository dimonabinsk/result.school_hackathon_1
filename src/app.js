import './styles/styles.css';
import { ContextMenu } from "./menu";
import { BackgroundModule } from './modules/background.module';
import {CustomMessageModule} from "./modules/customMessage.module";


// const tasks = [
// 	{
// 		name:"Аналитика кликов",
// 		data:"click-analytics",
// 	},
// 	{
// 		name:"Случайная фигура",
// 		data:"random-figure",
// 	},
// 	{
// 		name:"Таймер отсчета",
// 		data:"countdown-timer",
// 	},
// 	{
// 		name:"Случайный звук",
// 		data:"random-sound",
// 	},
// 	{
// 		name:"Случайный фон",
// 		data:"random-background",
// 	},
// 	{
// 		name:"Кастомное сообщение",
// 		data:"custom-message",
// 	}
//
// ];

const modules = [
	new BackgroundModule('random-background', 'Случайный фон'),
	new CustomMessageModule("custom-message", "Кастомное сообщение"),

];
// вызов контекстное меню
const contextMenu = new ContextMenu( "#menu" );
contextMenu.open();

modules.forEach(module => contextMenu.add(module));


