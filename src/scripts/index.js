import 'regenerator-runtime'; /* for async await transpile */
import '../styles/index';
import './components/index';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('.navlinks'),
  cover: document.querySelector('.cover'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  swRegister();
});
