import './social-media';

class FooterContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="container links">
                <social-media></social-media>
                <div class="logo">
                    <div><span>Go</span>Resto</div>
                </div>
                <div class="copyright"><p>Copyright © 2022 created with ♥ by Daffa Rafi - GoResto</p></div>
            </div>
        `;
  }
}

customElements.define('footer-content', FooterContent);
