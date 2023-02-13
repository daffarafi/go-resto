class PopupElement extends HTMLElement {
  set popupAttribute({ title, content, isError }) {
    this._title = title;
    this._content = content;
    this._isError = isError;

    this.render();
    this._afterRender();
  }

  render() {
    this.innerHTML = `
    <div class="popup-title ${this._isError ? 'popup-error' : 'popup-success'}">
      <h1>${this._title}</h1>
    </div>
    <div class="popup-content">
      <p>${this._content}</p>
      <button class="popup-button" id="popupButton">Ok</button>
    </div>
    `;
  }

  _afterRender() {
    const popupOkButton = document.getElementById('popupButton');

    popupOkButton.addEventListener('click', () => {
      this._popupOkButtonHandler();
    });
  }

  _popupOkButtonHandler() {
    const popup = document.querySelector('popup-element');
    popup.remove();
  }
}

customElements.define('popup-element', PopupElement);
