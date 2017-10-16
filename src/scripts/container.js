import PureComponent from './component';

/**
 * Data
 * @type {[string,string,string,string,string,string,string,string]} Messages
 */
export const MESSAGES = [
	'Vous êtes des gens vraiment super à',
	'Je serai toujours là pour veiller sur',
	'Je me suis mangé la tour Bretagne en survolant',
	'Préparez-vous ! Une grosse bataille va arriver à',
	'Je n\'ai jamais vu des gens aussi cool que vous',
	'Je connais le chef de la police de',
	'La chasse aux vilains est ouverte à',
	'Vous pouvez compter sur moi',
];

/**
 * Get random hero data
 * @returns {{image: string, message: string}} image path and message
 */
function _getRandomHeroData() {
	const randomValue = Math.floor(Math.random() * MESSAGES.length);
	return {
		image: `/images/hero${randomValue + 1}.jpg`,
		message: MESSAGES[randomValue],
	};
}

/**
 * Component to display hero saying bullshit
 * @param city City (Nantes by default)
 * @returns {Element} PureComponent with our hero
 */
export default function connectedComponent(city = 'Nantes') {
	// retrieve random data at first
	const {
		image,
		message,
	} = _getRandomHeroData();

	// render component
	return PureComponent({
		city,
		image,
		message,
	});
}
