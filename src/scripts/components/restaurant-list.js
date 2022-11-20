import './restaurant-item.js';

class RestaurantList extends HTMLElement {
	constructor() {
		super();
	}

	set restaurants(restaurants) {
		this._restaurants = restaurants;
		this.render();
	}

	renderNotFound(string) {
		this.innerHTML = `
            <p class="not-found">${string}</p>
        `;
	}

	render() {
		this.innerHTML = `

        `;

		this._restaurants.map((restaurant) => {
			const item = document.createElement('restaurant-item');
			item.restaurant = restaurant;
			this.appendChild(item);
		});
	}
}

customElements.define('restaurant-list', RestaurantList);
