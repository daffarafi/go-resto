import { html, LitElement } from 'lit';
import { map } from 'lit/directives/map.js';
import '@elements/ButtonElement';
import Style from '@styles/elements/NavbarStyle/index.scss';
import { navigateLinks } from './constant';
import '@icons/github-icon';
import '@icons/instagram-icon';
import '@icons/linkedin-icon';
import '@icons/twitter-icon';

class NavBar extends LitElement {
  static get styles() {
    return Style;
  }

  static properties = {
    _isSidemenuShowed: { type: Boolean, attribute: false },
    _isNavbarBackgroundVisible: { type: Boolean, attribute: false },
    _isButtonBorderVisible: { type: Boolean, attribute: false },
    isNavbarBackgroundChangeDisabled: { type: Boolean },
  };

  constructor() {
    super();
    this._isSidemenuShowed = false;
    this._isNavbarBackgroundVisible = false;
    this._isButtonBorderVisible = false;
    this.isNavbarBackgroundChangeDisabled = false;
    document.addEventListener('scroll', () => {
      this._setNavbarBackgroundVisible();
    });
    window.addEventListener('resize', () => {
      this._setNavbarButtonBorder();
    });
  }

  _setNavbarBackgroundVisible() {
    if (this.isNavbarBackgroundChangeDisabled) {
      this._isNavbarBackgroundVisible = true;
      return;
    }
    if (
      document.body.scrollTop > 500
      || document.documentElement.scrollTop > 500
    ) {
      this._isNavbarBackgroundVisible = true;
    } else {
      this._isNavbarBackgroundVisible = false;
    }
  }

  _setNavbarButtonBorder() {
    if (window.innerWidth >= 1024) {
      this._isButtonBorderVisible = false;
    } else {
      this._isButtonBorderVisible = true;
    }
  }

  _setScrolling() {
    if (this._isSidemenuShowed && window.innerWidth < 1024) {
      document.body.style = 'overflow: hidden';
    } else {
      document.body.style = 'overflow: visible';
    }
  }

  _toggleSidemenu() {
    this._isSidemenuShowed = !this._isSidemenuShowed;
  }

  _closeSidemenu() {
    this._isSidemenuShowed = false;
  }

  render() {
    this._setNavbarBackgroundVisible();
    this._setNavbarButtonBorder();
    this._setScrolling();
    return html`
      <nav
        class="container ${this._isNavbarBackgroundVisible
          ? 'bg-secondary'
          : ''}"
      >
        <div class="navbar-content">
          <div class="navigates">
            <button
              aria-label="open drawer"
              class="hamburger"
              @click=${this._toggleSidemenu}
            >
              <span class="${this._isSidemenuShowed ? 'active' : ''}"></span>
              <span class="${this._isSidemenuShowed ? 'active' : ''}"></span>
              <span class="${this._isSidemenuShowed ? 'active' : ''}"></span>
            </button>
            <div
              class="cover ${this._isSidemenuShowed ? 'active' : ''}"
              @click=${() => {
                this._closeSidemenu();
              }}
            ></div>
            <div class="navlinks ${this._isSidemenuShowed ? 'active' : ''}">
              <ul>
                ${map(
                  navigateLinks,
                  ({ text, link }) => html`
                    <li>
                      <button-element
                        is-full-width
                        is-link
                        href=${link}
                        color="primary"
                        color-hover="secondary"
                        bg-color="transparent"
                        bg-color-hover="primary"
                        aria-label="go to ${link}"
                        border="${this._isButtonBorderVisible
                          ? 'primary'
                          : 'transparent'}"
                        .clickEvent=${() => this._closeSidemenu()}
                        >${text}</button-element
                      >
                    </li>
                  `,
                )}
              </ul>
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
            </div>
          </div>
          <div
            class="logo ${this._isNavbarBackgroundVisible
              ? 'reset-position'
              : ''}"
          >
            <div><span>Go</span>Resto</div>
          </div>
          <div class="profile"></div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
