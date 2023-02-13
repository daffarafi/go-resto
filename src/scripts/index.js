import 'regenerator-runtime'; /* for async await transpile */
import { swRegister } from '@utils';
import App from '@pages/app';
import '@elements/Navbar';
import '@elements/Footer';
import '@elements/PopupElement';
import '@styles/_base.scss?directly';
import '@styles/_component.scss?directly';

const app = new App({
  content: document.querySelector('#mainContent'),
  skipToContent: document.querySelector('.skip-to-content'),
});

window.addEventListener('hashchange', () => {
  window.scrollTo(0, 0);
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  try {
    await swRegister();
  } catch (err) {
    const popup = document.querySelector('popup-element');
    popup.appendPopup(err);
  }
});
