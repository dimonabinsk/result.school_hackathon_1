import './styles/styles.css';
import { ContextMenu } from "./menu";
import { BackgroundModule } from './modules/background.module';

const modules = [
  new BackgroundModule('random-background', 'Случайный фон'),
  //..и так каждый модуль подключаем
];

// вызов контекстного меню
const contextMenu = new ContextMenu( "#menu" );
contextMenu.open();
modules.forEach(module => contextMenu.add(module));