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
            <h4>${this._restaurant.city}</h4>
            <h3>${this._restaurant.name}</h3>
            <p>
                ${this._restaurant.description}
            </p>
        </div>
        <div class="restaurant-rating">
            <p>★<span>${this._restaurant.rating}</span></p>
        </div>
        `;
	}
}

customElements.define('restaurant-item', RestaurantItem);
