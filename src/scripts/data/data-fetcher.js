import data from './DATA.json';

class DataFetcher {
	static fetchRestaurants = async () => {
		const response = await data;
		return Promise.resolve(response.restaurants);
	};
}

export default DataFetcher;
