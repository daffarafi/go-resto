class ButtonElement extends HTMLElement {
	constructor() {
		super();
	}

	set text(text) {
		this._text = text;
		this.render();
	}

	render() {
		this.innerHTML = `
            <button class="primary-button">${this._text}</button>
        `;
	}
}

customElements.define('button-element', ButtonElement);
