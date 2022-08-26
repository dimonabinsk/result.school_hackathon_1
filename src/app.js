import './styles/styles.css';

const body = document.body;

const arrItem = [
	"Аналитика кликов",
	"Случайная фигура",
	"Таймер отсчета",
	"Случайный звук",
	"Случайный фон",
	"Кастомное сообщение"
];

function createListItem(arr) {
	return arr.map(str => {
		const itemLiHTML = document.createElement("li");
		itemLiHTML.className = "menu-item";
		itemLiHTML.textContent = str;
		return itemLiHTML;
	})
}


body.addEventListener("contextmenu", (e) => {
	e.preventDefault();
	// console.log(e.pageY, e.pageX);
	const h = e.pageY;
	const w = e.pageX;
	const bodyWidth = body.clientWidth;
	console.log("bodyWidth", bodyWidth)
	console.log("w", w)

	const bodyHeight = body.clientHeight;
	console.log("bodyHeight", bodyHeight)
	console.log("h",h)
const elemItem = createListItem(arrItem);
	// console.log(elemItem)

	const listMenu = document.querySelector(".menu");
	listMenu.innerHTML = "";
	elemItem.forEach(elem => listMenu.append(elem));
	const offsetHeight = listMenu.offsetHeight;
	const offsetWidth = listMenu.offsetWidth;
	console.log("offsetWidth", offsetWidth);

	if(h < offsetHeight || w < offsetWidth &&  bodyWidth > w + offsetWidth) {
		listMenu.style.left = `${w}px`;
		listMenu.style.top = `${h}px`;
	}
	if(h < offsetHeight && w < offsetWidth &&  bodyWidth < w + offsetWidth) {
		listMenu.style.left = `${w - offsetWidth}px`;
		listMenu.style.top = `${h}px`;
	}
	else {
		listMenu.style.left = `${w - offsetWidth}px`;
		listMenu.style.top = `${h - offsetHeight}px`;

	}
	listMenu.classList.add("open");

})
