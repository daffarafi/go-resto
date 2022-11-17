import DataFetcher from '../data/data-fetcher.js';

const main = () => {
	const restaurantList = document.querySelector('restaurant-list');

	const fetchRestaurants = async () => {
		try {
			renderResult(await DataFetcher.fetchRestaurants());
		} catch (err) {
			alert(err);
		}
	};

	const renderResult = (restaurants) => {
		restaurantList.restaurants = restaurants;
	};

	fetchRestaurants();
};

export default main;
