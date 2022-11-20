import DataFetcher from '../data/data-fetcher.js';

const main = () => {
	const restaurantList = document.querySelector('restaurant-list');
	const navBar = document.querySelector('nav-bar');
	const logoNav = navBar.querySelector('.logo');
	const switchLang = document.getElementsByName('switchLang');
	const switchLangLabel = document.querySelectorAll('.lang label');

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

	window.addEventListener('scroll', () => {
		if (
			document.body.scrollTop > 500 ||
			document.documentElement.scrollTop > 500
		) {
			navBar.style.backgroundColor = '#161616';
			navBar.style.borderBottomColor = '#e88f2a';
			logoNav.style.transform = 'translateY(0)';
		} else {
			navBar.style.backgroundColor = 'transparent';
			navBar.style.borderBottomColor = 'transparent';
			logoNav.style.transform = 'translateY(-100px)';
		}
	});

	for (const el of switchLang) {
		el.addEventListener('change', () => {
			switchLangLabel[0].classList.toggle('selected-lang');
			switchLangLabel[1].classList.toggle('selected-lang');
		});
	}
};

export default main;
