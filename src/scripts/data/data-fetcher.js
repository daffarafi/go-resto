import data from './DATA.json';

class DataFetcher {
	static fetchRestaurants = async (keyword = '') => {
		const response = await data;
		const restaurants = response.restaurants;
		const filteredRestaurants = restaurants.filter((restaurant) => {
			return (
				restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
				restaurant.city.toLowerCase().includes(keyword.toLowerCase())
			);
		});

		if (filteredRestaurants.length == 0) {
			return Promise.reject(`${keyword} tidak ditemukan`);
		}
		return Promise.resolve(filteredRestaurants);
	};
}

export default DataFetcher;
