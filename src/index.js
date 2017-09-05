import './index.scss';

const appId = 'myApp';

/**
 * Component to say hello
 * @param city City (Nantes by default)
 * @returns {string}
 */
function component(city = 'Nantes') {
	const element = document.createElement('h1');
	element.className = 'title';
	element.innerText = `Bonjour ${city}!`;
	return element;
}

/**
 * Bootstrap our app
 */
function bootstrap() {
	const app = document.getElementById(appId);
	app.innerHTML = '';
	app.appendChild(component());
}

setTimeout(bootstrap, 1500);