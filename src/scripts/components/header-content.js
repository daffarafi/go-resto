import img from '../../public/images/heros/hero-image_4.jpg';
import './button-element.js';

class HeaderContent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.style.backgroundImage = `url("${img}")`;
		this.style.display = 'flex';
		this.style.flexDirection = 'column';
		this.innerHTML = `
        <div class="opacity"></div>
        <div class="head-content">
            <h1><span>Go</span>Resto</h1>
        </div>
        `;
		const button = document.createElement('button-element');
		const headContent = document.querySelector('.head-content');
		button.text = 'Restaurant';
		headContent.appendChild(button);
	}
}

customElements.define('header-content', HeaderContent);