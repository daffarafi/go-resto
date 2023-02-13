import { UrlParser, routes } from '@routes';
import { NotFoundPage } from '@pages';

class App {
  constructor({ content, skipToContent }) {
    this._content = content;
    this._skipToContent = skipToContent;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    let page;
    if (url in routes) {
      page = routes[url];
    } else {
      page = NotFoundPage;
    }
    this._content.innerHTML = await page.render();
    await page.afterRender();
    this._skipToContent.innerHTML = '';
    const skipButton = document.createElement('button');
    skipButton.innerHTML = 'skip to content';
    skipButton.setAttribute('type', 'button');
    skipButton.setAttribute('tabindex', 0);
    skipButton.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
    this._skipToContent.appendChild(skipButton);
  }
}

export default App;
