const RestaurantDetailInitiator = {
  init({
    menusContent,
    addressContent,
    reviewsContent,
    menus,
    address,
    customerReviews,
    restaurantId,
  }) {
    menusContent.menus = menus;
    addressContent.address = address;
    reviewsContent.reviews = { reviews: customerReviews, restaurantId };
  },
};

export default RestaurantDetailInitiator;
