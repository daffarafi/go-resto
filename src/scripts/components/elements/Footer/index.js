import { html, LitElement } from 'lit';
import Style from '@styles/elements/FooterStyle/index.scss';
import '@icons/github-icon';
import '@icons/instagram-icon';
import '@icons/linkedin-icon';
import '@icons/twitter-icon';

class FooterContent extends LitElement {
  static get styles() {
    return Style;
  }

  render() {
    return html`
      <footer>
        <div class="container links">
          <ul class="social-media">
            <li class="twitter">
              <a
                href="https://www.twitter.com/DaffaTGI"
                aria-label="go to author twitter"
                ><twitter-icon></twitter-icon
              ></a>
            </li>
            <li class="instagram">
              <a
                href="https://www.instagram.com/daffa.tgi/"
                aria-label="go to author instagram"
                ><instagram-icon></instagram-icon
              ></a>
            </li>
            <li class="github">
              <a
                href="https://www.github.com/daffarafi"
                aria-label="go to author github"
                ><github-icon></github-icon
              ></a>
            </li>
            <li class="linkedin">
              <a
                href="https://www.linkedin.com/in/daffa-rafi/"
                aria-label="go to author linkedin"
                ><linkedin-icon></linkedin-icon
              ></a>
            </li>
          </ul>
          <div class="logo">
            <div><span>Go</span>Resto</div>
          </div>
          <div class="copyright">
            <p>Copyright © 2022 created with ♥ by Daffa Rafi - GoResto</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-content', FooterContent);
