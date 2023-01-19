import '@modules/NotFoundModule';

export const NotFoundPage = {
  async render() {
    return '<notfound-module></notfound-module>';
  },

  async afterRender() {
    const navbar = document.querySelector('nav-bar');
    navbar.isNavbarBackgroundChangeDisabled = true;
  },
};

export default NotFoundPage;
