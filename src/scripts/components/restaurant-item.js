import './button-element';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="restaurant-cover">
            <img src="https://restaurant-api.dicoding.dev/images/small/${
              this._restaurant.pictureId
            }" 
                alt="${this._restaurant.name}"
            >
        </div>
        <div class="restaurant-detail">
            <div class="restaurant-detail-text">
                <h4><span>★</span>${this._restaurant.rating}</h4>
                <h3>${this._restaurant.name}</h3>
                    ${
                      this._restaurant.description.length <= 130
                        ? `<p>${this._restaurant.description}</p>`
                        : `<p>${this._restaurant.description.slice(
                            1,
                            130
                          )}...</p>`
                    }
            </div>
            <button-element></button-element>
        </div>
        <div class="restaurant-city">
            <p>${this._restaurant.city}</p>
        </div>
        `;
    const readMoreBtn = this.querySelector('button-element');
    readMoreBtn.content = {
      text: 'Read more',
      link: `/#/detail/${this._restaurant.id}`,
      isPrimary: true,
    };
  }
}

customElements.define('restaurant-item', RestaurantItem);
