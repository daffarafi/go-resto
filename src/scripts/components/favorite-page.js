class FavoritePage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this._afterRender();
    this._createRestaurantItem();
  }

  render() {
    this.innerHTML = '<div class="loader"></div>';
  }

  _afterRender() {
    this.innerHTML = `
      <h1>Favorite Page</h1>
      <restaurant-list></restaurant-list>
    `;
  }

  _createRestaurantItem() {
    const restaurantListContainer = document.querySelector('restaurant-list');

    restaurantListContainer.restaurants = this._restaurants;
  }
}

customElements.define('favorite-page', FavoritePage);
