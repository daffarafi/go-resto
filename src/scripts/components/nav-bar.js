import './button-element';
import './social-media';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.classList.add('container');
    this.innerHTML = `
        <div class="navigates">
            <button class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="cover"></div>
            <div class="navlinks">
                <social-media></social-media>
            </div>
        </div>
        <div class="logo">
            <div><span>Go</span>Resto</div>
        </div>
        <div class="profile"></div>
        `;
    const navLinks = document.querySelector('.navlinks');
    const ul = document.createElement('ul');
    const socialMedia = document.querySelector('social-media');

    const createLi = (text, link) => {
      const li = document.createElement('li');
      const btn = document.createElement('button-element');
      btn.content = { text, link, isPrimary: false };
      li.appendChild(btn);
      ul.appendChild(li);
    };

    createLi('Home', '#');
    createLi('Favorite', '#/favorite');
    createLi('About us', 'https://daffarafi.netlify.app');

    navLinks.insertBefore(ul, socialMedia);
  }
}

customElements.define('nav-bar', NavBar);
