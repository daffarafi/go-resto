import * as WorkboxWindow from 'workbox-window';

export const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    return Promise.reject(
      new Error(
        'Uh oh! Service Worker not supported in the browser! No problem, you can still use this web.',
      ).message,
    );
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(
      new Error(
        'Failed to register service worker! But you can still use this web.',
      ).message,
    );
  }
};

export default swRegister;
