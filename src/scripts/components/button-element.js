class ButtonElement extends HTMLElement {
  set content(content) {
    this._content = content;
    this.render();
  }

  render() {
    this.innerHTML = `<a href=${this._content.link} class="${
      this._content.isPrimary ? 'primary-button' : 'secondary-button'
    }">${this._content.text}</a>`;
  }
}

customElements.define('button-element', ButtonElement);
