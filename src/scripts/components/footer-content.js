class FooterContent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        `;
	}
}

customElements.define('footer-content', FooterContent);
