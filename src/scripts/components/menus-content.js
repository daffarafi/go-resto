class MenusContent extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1>Menus</h1>
    <div class='menus-container' id="menusContainer">${Object.entries(
      this._menus
    )
      .map((menuDetail) => this._createMenuContainer(...menuDetail))
      .join('')}</div>
    `;
  }

  _createMenuContainer(categoryTitle, menuList) {
    return `
      <h2>${categoryTitle}</h2>
      <div class="menu-container">
        ${menuList.map((menu) => this._createMenuItem(menu)).join('')}
      </div>
    `;
  }

  _createMenuItem(menuDetail) {
    return `
    <div class="menu-item">
      <div class="menu-image">

      </div>
      <div class="menu-title">
        <h3>${menuDetail.name}</h3>
      </div>
    </div>
    `;
  }
}

customElements.define('menus-content', MenusContent);
