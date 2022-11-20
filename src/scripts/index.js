import 'regenerator-runtime'; /* for async await transpile */
import '../styles/component.scss';
import '../styles/Navbar.scss';
import '../styles/Header.scss';
import '../styles/ExploreRestaurant.scss';
import '../styles/TrendingToday.scss';
import '../styles/Footer.scss';
import '../styles/Button.scss';
import '../styles/SocialMedia.scss';
import '../styles/SearchBar.scss';
import '../styles/RestaurantList.scss';
import '../styles/RestaurantItem.scss';
import './components/nav-bar.js';
import './components/header-content.js';
import './components/explore-restaurant.js';
import './components/trending-today.js';
import './components/footer-content.js';
import main from './view/main.js';

document.addEventListener('DOMContentLoaded', main);
