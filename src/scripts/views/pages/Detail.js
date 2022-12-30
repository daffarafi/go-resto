import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return '<restaurant-detail></restaurant-detail>';
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.DetailRestaurant(url.id);
    const detailPageContainer = await document.querySelector(
      'restaurant-detail'
    );
    detailPageContainer.restaurantDetail = restaurant;
  },
};

export default Detail;
