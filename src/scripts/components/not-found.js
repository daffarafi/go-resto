class NotFound extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set buttonAttribute({ homeButtonAttribute, contactButtonAttribute }) {
    this._homeButtonAttribute = homeButtonAttribute;
    this._contactButtonAttribute = contactButtonAttribute;

    this._afterRender();
  }

  render() {
    this.innerHTML = `
        <h1>404 Page Not Found</h1>
        <p>Are you sure the website URL is correct?</p>
        <p>Try to contact developer or go back to Homepage</p>
        <div class="not-found-button">
          <button-element class="contact-dev"></button-element>
          <button-element class="go-home"></button-element>
        </div>
    `;
  }

  _afterRender() {
    const goHomeButton = document.querySelector('.go-home');
    const contactDevButton = document.querySelector('.contact-dev');

    goHomeButton.content = this._homeButtonAttribute;
    contactDevButton.content = this._contactButtonAttribute;
  }
}

customElements.define('not-found', NotFound);
