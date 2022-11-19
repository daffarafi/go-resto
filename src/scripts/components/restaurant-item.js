class RestaurantItem extends HTMLElement {
	constructor() {
		super();
	}

	set restaurant(restaurant) {
		this._restaurant = restaurant;
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="restaurant-cover">
            <img src="${this._restaurant.pictureId}" alt="">
        </div>
        <div class="restaurant-detail">
            <h4><span>★</span>${this._restaurant.rating}</h4>
            <h3>${this._restaurant.name}</h3>
            <p>
                ${
					this._restaurant.description.length <= 150
						? this._restaurant.description
						: this._restaurant.description.slice(1, 150) +
						  '... <span>Read more</span>'
				}
            </p>
        </div>
        <div class="restaurant-city">
            <p>${this._restaurant.city}</p>
        </div>
        `;
	}
}

customElements.define('restaurant-item', RestaurantItem);
