import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import NotFound from './pages/NotFound';

class App {
  constructor({ button, drawer, cover, content }) {
    this._button = button;
    this._drawer = drawer;
    this._cover = cover;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      cover: this._cover,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    let page;
    console.log(url);
    if (url in routes) {
      page = routes[url];
    } else {
      page = NotFound;
    }
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
