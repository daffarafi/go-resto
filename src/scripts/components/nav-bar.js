class NavBar extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.classList.add('container');
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
                <label for="en" class="selected-lang">
                    EN
                    <input type="radio" name="switchLang" id="en" hidden>
                </label>
                <label for="id">
                    ID
                    <input type="radio" name="switchLang" id="id" hidden>
                </label>
            </div>
        `;
	}
}

customElements.define('nav-bar', NavBar);
