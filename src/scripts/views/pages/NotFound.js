const NotFound = {
  async render() {
    return '<not-found></not-found>';
  },

  async afterRender() {
    const notFoundPage = document.querySelector('not-found');
    notFoundPage.buttonAttribute = {
      homeButtonAttribute: { text: 'GO HOME', link: '/', isPrimary: true },
      contactButtonAttribute: {
        text: 'CONTACT',
        link: 'https://daffarafi.netlify.app',
        isPrimary: true,
      },
    };
  },
};

export default NotFound;
