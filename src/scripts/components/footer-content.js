import './social-media.js';

class FooterContent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
            <div class="container links">
                <social-media></social-media>
                <div class="logo">
                    <div><span>Go</span>Resto</div>
                </div>
                <div class="copyright"><p>Copyright © 2022 <a href="">Daffa Rafi</a> - GoResto</p></div>
            </div>
        `;
	}
}

customElements.define('footer-content', FooterContent);
