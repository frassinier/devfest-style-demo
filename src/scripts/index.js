import './../styles/index.scss';

import HeroComponent from './container';

export const APP_ID = 'myApp';

/**
 * Bootstrap our app by emulating random very-high-performance front-end framework
 */
setTimeout(() => {
	const app = document.getElementById(APP_ID);
	app.innerHTML = '';
	app.appendChild(HeroComponent());
}, 500);