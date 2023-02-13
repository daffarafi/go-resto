const DrawerInitiator = {
  init({ button, drawer, cover }) {
    const hamburgerStrip = button.getElementsByTagName('span');
    const navBar = document.querySelector('nav');
    const logoNav = navBar.querySelector('.logo');
    const navLinkBtn = navBar.querySelectorAll('button-element a');

    window.addEventListener('scroll', () => {
      this._addNavbarLogic({ navBar, logoNav });
    });

    this._addNavbarButtonLogic(navLinkBtn);
    window.addEventListener('resize', () => {
      this._addNavbarButtonLogic(navLinkBtn);
    });

    navLinkBtn.forEach((el) => {
      el.addEventListener('click', (event) => {
        this._closeDrawer({ event, drawer, cover, hamburgerStrip });
      });
    });

    button.addEventListener('click', (event) => {
      this._toggleDrawer({ event, drawer, cover, hamburgerStrip });
    });

    cover.addEventListener('click', (event) => {
      this._closeDrawer({ event, drawer, cover, hamburgerStrip });
    });
  },

  _toggleDrawer({ event, drawer, cover, hamburgerStrip }) {
    event.stopPropagation();
    Array.from(hamburgerStrip).forEach((el) => el.classList.toggle('active'));
    drawer.classList.toggle('active');
    cover.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  },

  _closeDrawer({ event, drawer, cover, hamburgerStrip }) {
    event.stopPropagation();
    Array.from(hamburgerStrip).forEach((el) => el.classList.remove('active'));
    drawer.classList.remove('active');
    cover.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  },

  _addNavbarLogic({ navBar, logoNav }) {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      navBar.style.backgroundColor = '#161616';
      navBar.style.borderBottomColor = '#e88f2a';
      logoNav.style.transform = 'translateY(0)';
    } else {
      navBar.style.backgroundColor = 'transparent';
      navBar.style.borderBottomColor = 'transparent';
      logoNav.style.transform = 'translateY(-100px)';
    }
  },

  _addNavbarButtonLogic(navLinkBtn) {
    if (window.innerWidth >= 1024) {
      Array.from(navLinkBtn).forEach((el) => el.classList.add('nav-btn-on-pc'));
    } else {
      // prettier-ignore
      Array.from(navLinkBtn).forEach((el) => el.classList.remove('nav-btn-on-pc'));
    }
  },
};

export default DrawerInitiator;
