class HeaderContent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <h1><span>Go</span>Resto</h1>
        `;
	}
}

customElements.define('header-content', HeaderContent);
