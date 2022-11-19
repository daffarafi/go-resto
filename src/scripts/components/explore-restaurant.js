import './restaurant-list.js';

class ExploreRestaurant extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="container">
            <h2 class="margin-bottom">Explore Restaurant</h2>
            <p class="margin-bottom">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit eligendi et porro excepturi dicta architecto libero fuga nihil praesentium explicabo!</p>
            <restaurant-list/>
        </div>
        `;
	}
}

customElements.define('explore-restaurant', ExploreRestaurant);
