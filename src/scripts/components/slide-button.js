class SlideButton extends HTMLElement {
  set buttonLabel(buttonLabel) {
    this._buttonLabel = buttonLabel;
    this.render();
  }

  render() {
    this.innerHTML = `
    <button>
      <p>${this._buttonLabel}</p>
      <div class="block"></div>
    </button>    
    `;
  }
}

customElements.define('slide-button', SlideButton);
