import './styles/styles.css';
import { ContextMenu } from "./menu";
import { BackgroundModule } from './modules/background.module';

// вызов контекстное меню
const contextMenu = new ContextMenu( ".menu" );
contextMenu.open();

// зменение фона body
const elBackground = document.querySelector( '[data-type = "random-background"]' );

elBackground?.addEventListener( 'click', () =>
{
	let element = new BackgroundModule( "backgroundModule", "Изменить фон" )
	element.trigger()
} );
