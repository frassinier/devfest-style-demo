/**
 * HTML5 section which display a comic strip
 * @param city City name
 * @param image Image path
 * @param message Message to display
 * @returns {Element} Hero section as pure component
 */
export default function pureComponent({ city, image, message }) {
	// span.title.is-unselectable.is-size-1.has-text-grey to say something
	const spanElement = document.createElement('span');
	spanElement.className = 'title is-unselectable is-size-1 has-text-grey';
	spanElement.innerText = `${message} ${city}!`;

	// div.box.is-bubble
	const divElement = document.createElement('div');
	divElement.className = 'box is-bubble';
	divElement.appendChild(spanElement);

	// main.column.is-three-quarters
	const mainElement = document.createElement('main');
	mainElement.className = 'column is-three-quarters';
	mainElement.appendChild(divElement);

	// div.container.has-text-centered
	const divContainerElement = document.createElement('div');
	divContainerElement.className = 'container has-text-centered';
	divContainerElement.appendChild(mainElement);

	// div.hero-body
	const divHeroBodyElement = document.createElement('div');
	divHeroBodyElement.className = 'hero-body';
	divHeroBodyElement.appendChild(divContainerElement);

	// section.hero.is-medium.is-dark.is-bold with hero as background
	const sectionHeroElement = document.createElement('section');
	sectionHeroElement.className = 'hero is-medium is-dark is-bold';
	sectionHeroElement.style = `background-image: url('${image}')`;
	sectionHeroElement.appendChild(divHeroBodyElement);

	// Return the whole section element
	return sectionHeroElement;
}