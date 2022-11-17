class NavBar extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
            <div class="navigates">
                <!-- <ul>
                    <li>Home</li>
                    <li>Find</li>
                    <li>Favorite</li>
                    <li>About Us</li>
                </ul> -->
                <button class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="logo">
                <div><span>Go</span>Resto</div>
            </div>
            <div class="lang">
                <label for="switchLang">
                    <span>EN</span>
                    <input type="checkbox" name="switchLang" id="switchLand">
                    <span>ID</span>
                </label>
            </div>
        `;
	}
}

customElements.define('nav-bar', NavBar);
