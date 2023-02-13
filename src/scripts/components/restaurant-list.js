import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
    this._afterRender();
  }

  renderNotFound(string) {
    this.innerHTML = `
            <p class="not-found">${string}</p>
        `;
  }

  render() {
    this.innerHTML = '';
  }

  _afterRender() {
    this._restaurants.forEach((restaurant) => {
      const item = document.createElement('restaurant-item');
      item.restaurant = restaurant;
      this.appendChild(item);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
