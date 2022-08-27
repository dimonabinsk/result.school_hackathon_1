import {Module} from '../core/module'
import {getRandomColor} from '../utils/utils'


export class BackgroundModule extends Module {


	trigger() {
		this.clearBody();
		document.body.style.backgroundColor = getRandomColor();
	}
}