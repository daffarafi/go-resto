import DataFetcher from '../data/data-fetcher.js';

const main = () => {
	const exploreRestaurant = document.querySelector('.explore-restaurant');
	const popularRestaurant = document.querySelector('.popular-restaurant');
	const navBar = document.querySelector('nav');
	const logoNav = navBar.querySelector('.logo');
	const searchBtn = document.querySelector('#searchButtonElement');
	const switchLangContainer = document.querySelector('#lang');
	const switchLangBtn = switchLangContainer.querySelector('#switchLang');
	const toggleNavlinks = document.querySelector('.hamburger');
	const cover = document.querySelector('.cover');
	const cross = toggleNavlinks.getElementsByTagName('span');
	const menu = document.querySelector('.navlinks');
	const navLinkBtn = menu.querySelectorAll('button-element a');

	const fetchRestaurants = async (
		keyword = '',
		container = exploreRestaurant
	) => {
		try {
			renderResult(
				await DataFetcher.fetchRestaurants(keyword),
				container
			);
		} catch (err) {
			renderNotFound(err, container);
		}
	};

	const renderResult = (restaurants, container) => {
		container.restaurants = restaurants;
	};

	const renderNotFound = (string, container) => {
		container.renderNotFound(string);
	};

	const toggleMenu = () => {
		for (const el of cross) {
			el.classList.toggle('active');
		}
		menu.classList.toggle('active');
		cover.classList.toggle('active');
		document.body.classList.toggle('overflow-hidden');
	};

	const giveBtnClassOnPc = () => {
		if (window.innerWidth >= 1024) {
			for (const el of navLinkBtn) {
				el.classList.add('nav-btn-on-pc');
			}
		} else {
			for (const el of navLinkBtn) {
				el.classList.remove('nav-btn-on-pc');
			}
		}
	};

	fetchRestaurants();
	fetchRestaurants('malang', popularRestaurant);

	searchBtn.addEventListener('click', () => {
		const searchValue = document.querySelector('#searchElement').value;
		fetchRestaurants(searchValue, exploreRestaurant);
	});

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

	window.addEventListener('resize', () => {
		giveBtnClassOnPc();
	});

	giveBtnClassOnPc();

	switchLangBtn.addEventListener('click', () => {
		if (switchLangBtn.checked) {
			switchLangContainer.classList.add('switch-lang');
		} else {
			switchLangContainer.classList.remove('switch-lang');
		}
	});

	toggleNavlinks.addEventListener('click', toggleMenu);
	cover.addEventListener('click', toggleMenu);
};

export default main;
