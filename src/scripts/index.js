import './../styles/index.scss';

import HeroComponent from './container';

export const appId = 'myApp';

/**
 * Bootstrap our app by emulating random very-high-performance front-end framework
 */
setTimeout(() => {
	const app = document.getElementById(appId);
	app.innerHTML = '';
	app.appendChild(HeroComponent());
}, 500);